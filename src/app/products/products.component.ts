import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  isEditing = false;
  isLoading = false;
  products:Product[];
  selectedProductToEdit:Product;
  @ViewChild('editProductForm')
  editForm: NgForm;
  @ViewChild('closeModal')
  closeButton: ElementRef;
  constructor(private productService: ProductService,
    private router:Router,
    public auth:AuthService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.isLoading=true;
    this.productService.getProducts().subscribe(data=>{
      this.products = data.products;
      this.isLoading = false;
      console.log(this.products);
    });
  }

  onEdit(product){
    this.selectedProductToEdit = {...product}
  }

  editProduct() {
    this.isEditing=true;
    this.productService.updateProduct(this.editForm.value)
    .subscribe(res=>{
      console.log(res);
      this.isEditing=false;
      this.editForm.reset();
      this.closeButton.nativeElement.click();
      this.getProducts();
    });
  }

  deleteProduct(id){
    this.productService.deleteProduct(id).subscribe(res=>{
      console.log(res);
      this.getProducts();
    })
  }

  onSelectingProduct(product:Product){
    this.router.navigate(['product-details',product._id]);
  }

}
