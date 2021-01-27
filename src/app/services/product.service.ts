import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://ty-shop.herokuapp.com/api/products/'
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
    return this.http.post<{
      error: boolean,
      message: string,
      product: Product
    }>(this.baseUrl, product);
  }

  updateProduct(product: Product) {
    return this.http.put<{
      error: boolean,
      message: string,
      product: Product
    }>(`${this.baseUrl}${product._id}`, product);
  }

  deleteProduct(id){
    return this.http.delete<{
      error: boolean,
      message: string,
      product: Product
    }>(`${this.baseUrl}${id}`);
  }
}
