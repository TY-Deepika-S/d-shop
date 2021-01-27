import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://ty-shop-token.herokuapp.com/api/users/';
  constructor(private http:HttpClient,
    private router:Router) { }

  register(userDetails){
    return this.http.post<{
      error:boolean,
      message:string
    }>(`${this.baseUrl}register`, userDetails);
  }

  login(userDetails){
    return this.http.post<any>(`${this.baseUrl}login`, userDetails);
  }

  getUserDetails(){
    return JSON.parse(localStorage.getItem('userDetails'));
  }

  isLoggedIn(){
    const userDetails = this.getUserDetails();
    if(userDetails) {
      return true;
    } else {
      return false;
    }
  }

  isAdmin(){
    const userDetails = this.getUserDetails();
    if(userDetails && userDetails.role === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  isUser() {
    const userDetails = this.getUserDetails();
    if(userDetails && userDetails.role === 'user') {
      return true;
    } else {
      return false;
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/login')
  }
}
