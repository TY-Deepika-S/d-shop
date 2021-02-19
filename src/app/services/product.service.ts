import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'https://ty-shop-token.herokuapp.com/api/products/';
  myToken: string;


  constructor( private http: HttpClient) { }

  getProducts(){

    return this.http.get<{
      error: boolean,
      message: string,
      products: Products[]
    }>(this.baseUrl);
  }
//to get each product using id
  getProduct(productId){
    return this.http.get<{
      error: boolean,
      message: string,
      product: Products
    }>(`${this.baseUrl}${productId}`);
  }

  addProduct(product){
    // const myHeader = new HttpHeaders({
    //   Authorization:'Bearer ' + this.myToken
    // })

    return this.http.post<{
      error: boolean,
      message: string,
      product: Products,

    }>(this.baseUrl, product);

  }

  updateProduct(product: Products) {
    // const myHeader = new HttpHeaders({
    //   Authorization:'Bearer ' + this.myToken
    // })

    return this.http.put<{
      error: boolean,
      message: string,
      product: Products,

  }> (
    `${this.baseUrl}${product._id}`,
    product
  );
}
deleteProduct(id){
  // const myHeader = new HttpHeaders({
  //   Authorization:'Bearer ' + this.myToken
  // })

  return this.http.delete<{
    error: boolean,
      message: string,
      product: Products
  }>(`${this.baseUrl}${id}`);
}
}
