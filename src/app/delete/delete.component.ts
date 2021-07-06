import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

 
  
  constructor(private http:HttpClient,private router:Router, private activatedRoute:ActivatedRoute) { 
    let pid;
    this.activatedRoute.params.subscribe((parameters)=>{
      pid=parameters['id'];
    })
  this.http.delete("http://localhost:3000/products/"+pid)
  .subscribe(()=>{
    // alert("deleted successfully");
    this.router.navigate(['/show'])
  })
}

  ngOnInit() {
  }

}

