import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  product: any;

  constructor(private router:Router,
    private route: ActivatedRoute,
    public productService: ProductService,
    public auth: AuthService) {
      this.product =this.route.params.subscribe(data => {
        console.log(data); //data via params can be accessed
          //it will be an object
        this.productService.getProduct(data.id).subscribe(res => {
          console.log(res);
          this.product = res.product;
        });
      });
   }
  ngOnInit(): void {
  }

  back(){
    this.router.navigateByUrl('/products');
  }



}
