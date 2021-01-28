import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  products: any;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    public auth: AuthService) {
      this.products =this.route.params.subscribe(data => {
        console.log(data); //data via params can be accessed
          //it will be an object
        this.productService.getProduct(data.id).subscribe(res => {
          console.log(res);
        });
      });
   }
  ngOnInit(): void {
  }



}
