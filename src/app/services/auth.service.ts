import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  baseUrl ='http://ty-shop-token.herokuapp.com/api/users/';
  constructor(private http: HttpClient,
    private router: Router) { }

  register(userDetails){
    return this.http.post<{
      error: boolean,
      message: string
    }>(`${this.baseUrl}register`, userDetails);
  }

  login(userCredentials) {
    return this.http.post<any>(`${this.baseUrl}login`, userCredentials);
  }


  getUserDetails() {

   return JSON.parse(localStorage.getItem('userDetails'))
  }

  getToken() {
    const userDetails = this.getUserDetails();
    if(userDetails && userDetails.token) {
      return userDetails.token;
    }
  }

  getRole(){
    const userDetails = this.getUserDetails();
    if(userDetails && userDetails.role) {
      return userDetails.role;
    } else {
      return '';
    }
  }

  isAdmin() {
    const userDetails = this.getUserDetails();
    if(userDetails && userDetails.role === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  isUser(){
    const userDetails = this.getUserDetails();
    if(userDetails && userDetails.role === 'user') {
      return true;
    } else {
      return false;
    }
  }

  isLoggedIn(){
    const userDetails = this.getUserDetails();
    if(userDetails){
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
