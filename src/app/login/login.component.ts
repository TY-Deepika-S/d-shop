import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error:string;
  constructor(
    private auth:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  onLogin(form:NgForm){
    this.auth.login(form.value)
    .subscribe(res =>{
      if(res.error) {
        this.error = res.message;
        setTimeout(()=>{
          this.error = null;
        },5000);
      } else {
        localStorage.setItem('userDetails', JSON.stringify(res));
        this.router.navigateByUrl('/');
      }
      form.reset();
    })
  }
}
