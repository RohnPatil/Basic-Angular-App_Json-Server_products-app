import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  prod_details;
  constructor(private http:HttpClient) {
    this.http.get("http://localhost:3000/products")
    .subscribe(
      (data)=>this.prod_details=data
    )
   }
  ngOnInit() {
  }

}
