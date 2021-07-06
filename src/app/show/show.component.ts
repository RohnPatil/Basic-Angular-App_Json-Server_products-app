import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  prod_details;
  
  constructor(private ps:ProductService) {
    this.prod_details=ps.getDetails()
    .subscribe(
        (data)=>this.prod_details=data
        )
   }

  ngOnInit() {
  }

}
