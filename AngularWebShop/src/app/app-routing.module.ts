import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ProductListComponent} from './product-list/product-list.component';

const routes: Routes = [
  {path: '', component: ProductListComponent },
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