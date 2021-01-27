import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message:string;
  error:string;
   constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  onRegister(form:NgForm){
    this.auth.register(form.value)
    .subscribe(res=>{
      console.log(res);
      if(res.error) {
        this.error = res.message;
        setTimeout(()=>{
          this.error = null;
        },5000)
      } else {
        this.message = res.message;
        setTimeout(()=>{
          this.message = null;
        },5000);
        form.reset();
      }
    });
  }
}
