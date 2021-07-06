import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  pname;
  desc;
  price;


  addProd(){
    var json ={name:this.pname,Desc:this.desc,price:this.price};
    var header=new HttpHeaders({'Content-Type':'application/json'});
    this.http.post("http://localhost:3000/products",json,{headers:header})
    .subscribe(()=>{
      alert("added successfully");
      this.router.navigate(['/show'])
    })
  }
  constructor( private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }

}
