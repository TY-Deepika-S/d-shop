import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Products } from '../models/product.model';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {



  constructor(private productservice: ProductService,
    public auth: AuthService,
    private router: Router ) { }
 products: Products[];
 isLoading = false;
 selectedProductToEdit: Products;
 @ViewChild('editProductForm')
 editForm: NgForm;
 @ViewChild('closeModal')
 closeButton: ElementRef;
  ngOnInit(): void {
    this.getProducts();
  }


  getProducts(){
    this.isLoading = true;
    this.productservice.getProducts().subscribe(data => {

      this.products = data.products;
      console.log(this.products);
      this.isLoading = false;
      console.log(this.products);
    });
  }

  onEdit(product) {
    this.selectedProductToEdit = {...product}
  }

  editProduct() {
    this.productservice.updateProduct(this.editForm.value)
    .subscribe(res => {
      console.log(res);
      this.closeButton.nativeElement.click();

    });
  }
  deleteProduct(id) {
    this.productservice.deleteProduct(id).subscribe(res => {
      console.log(res);
      this.getProducts();

    });
  }

  onSelectingProduct(product: Products){
    this.router.navigate(['product-details', product._id]);
  }

}
