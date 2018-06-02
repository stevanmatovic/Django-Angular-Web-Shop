import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ProductListComponent} from './product-list/product-list.component';
import {AppComponent} from './app.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';

const routes: Routes = [
  {path: '', component: ProductListComponent },
  {path: 'category/:slug', component: ProductListComponent },
  {path: 'product/:slug', component: ProductDetailComponent }
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
