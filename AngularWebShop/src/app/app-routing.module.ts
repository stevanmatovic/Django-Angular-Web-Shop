import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ProductListComponent} from './product-list/product-list.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: '', component: ProductListComponent },
  {path: 'category/:slug', component: ProductListComponent }
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
