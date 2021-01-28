import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {


product: string;
  constructor(
    private route:ActivatedRoute,
    private productService:ProductService
  ) {

    this.route.params.subscribe(data=>{
      console.log(data);
      this.productService.getProduct(data.id).subscribe(
        data=>{
          console.log(data);
        }
      );
    });
  }

  ngOnInit(): void {
  }

}
