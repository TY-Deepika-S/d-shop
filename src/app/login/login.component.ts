import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private auth: AuthService,
              private router: Router,
              private productService: ProductService) { }
   error: string;
  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    this.auth.login(form.value).subscribe(res =>{
      console.log(res);
      if(res.error){
        this.error = res.message;
        setTimeout(() =>{
          this.error = null;
        },5000);
      }else {
        this.productService.myToken = res.token;
        localStorage.setItem('userDetails', JSON.stringify(res));
        this.router.navigateByUrl('/');
      }
      form.reset();
    });
  }

}
