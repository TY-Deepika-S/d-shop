import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  message: string;
  error: string;
  isLoading = false;


  constructor(private productservice: ProductService,
    public auth: AuthService ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.isLoading = true;
    this.productservice.addProduct(form.value).subscribe(res => {
      this.isLoading = false;
      console.log(res);
      if(res.error){
        this.error = res.message;
      } else {
        this.message = res.message;
      }
      form.reset();
    })
  }

}
