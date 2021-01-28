import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/view', pathMatch: 'full'
  },
  {
    path:'view',component:ProductsComponent
  },
  {
    path: 'add',component:AddProductComponent,
    canActivate: [ AuthGuard],
    data:{ role: ['admin']}
  },
  {
    path: 'product-details/:id', component:ProductDetailsComponent
  },
  {
    path: 'register',component:RegisterComponent
  },
  {
    path:'login', component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
