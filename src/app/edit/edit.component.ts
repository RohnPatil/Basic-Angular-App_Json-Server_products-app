import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

 
  product;
  pid;

  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) {
    this.route.params.subscribe((parameters)=>{
      this.pid=parameters['id']
    })
      this.http.get("http://localhost:3000/products/"+this.pid)
      .subscribe((data)=>{
	  this.product=data;
	  this.getById();
      })
   }
   getById(){
	    this.pname=this.product.name;
        this.desc=this.product.Desc;
        this.price=this.product.price;
   }
   pname;
   desc;
   price;
   updateProd(){
    var json ={name:this.pname,Desc:this.desc,price:this.price};
    var header=new HttpHeaders({'Content-Type':'application/json'});
    this.http.put("http://localhost:3000/products/"+this.pid,json,{headers:header})
    .subscribe(()=>{
      alert("updated successfully");
      this.router.navigate(['/view'])
    })
   }

  ngOnInit() {
  }

}
