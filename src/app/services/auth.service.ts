import { HttpClient } from '@angular/common/http';
import { IfStmt } from '@angular/compiler';
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
  getToken(){
    const userDetails = this.getUserDetails();
    if(userDetails && userDetails.Token){
      return userDetails.token;
    }else{
      return '';
    }
  }

  isLoggedIn(){
    const userDetails = this.getUserDetails();
    if(userDetails) {
      return true;
    } else {
      return false;
    }
  }
  getRole(){
    const userDetails = this.getUserDetails();
    if(userDetails && userDetails.role) {
      return userDetails.role;
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
