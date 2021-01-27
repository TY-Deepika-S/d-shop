import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  message:string;
  error:string;
  isLoading = false;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.isLoading = true;
    this.productService.addProduct(form.value)
    .subscribe(res =>{
      this.isLoading=false;
      console.log(res);
      if(res.error) {
        this.error = res.message;
      }else{
        this.message = res.message;
      }
      form.reset();
    });
  }

}
