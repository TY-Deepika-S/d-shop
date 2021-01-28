import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://ty-shop-token.herokuapp.com/api/products/';
  myToken:string;

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<{
      error: boolean,
      message: string,
      products: Product[]
    }>(this.baseUrl);
  }

  getProduct(productId){
    return this.http.get<{
      error: boolean,
      message: string,
      products: Product
    }> (`${this.baseUrl}${productId}`)
  }

  addProduct(product) {
    const myHeader = new HttpHeaders({
      Authorization:'Bearer ' + this.myToken
    })
    return this.http.post<{
      error: boolean,
      message: string,
      product: Product
    }>(this.baseUrl, product, {headers:myHeader});
  }

  updateProduct(product: Product) {
    const myHeader = new HttpHeaders({
      Authorization:'Bearer ' + this.myToken
    })
    return this.http.put<{
      error: boolean,
      message: string,
      product: Product
    }>(`${this.baseUrl}${product._id}`, product, {headers:myHeader});
  }

  deleteProduct(id){
    const myHeader = new HttpHeaders({
      Authorization:'Bearer ' + this.myToken
    })
    return this.http.delete<{
      error: boolean,
      message: string,
      product: Product
    }>(`${this.baseUrl}${id}`, {headers:myHeader});
  }
}
