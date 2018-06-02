import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ProductListComponent} from './product-list/product-list.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: 'product-list', component: ProductListComponent }
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
