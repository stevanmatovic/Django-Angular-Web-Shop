import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ProductListComponent} from './product-list/product-list.component';
import {AppComponent} from './app.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {CartDetailComponent} from './cart-detail/cart-detail.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ThanksComponent} from './thanks/thanks.component';

const routes: Routes = [
  {path: '', component: ProductListComponent },
  {path: 'category/:slug', component: ProductListComponent },
  {path: 'product/:slug', component: ProductDetailComponent },
  {path: 'cart', component: CartDetailComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'thanks', component: ThanksComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
