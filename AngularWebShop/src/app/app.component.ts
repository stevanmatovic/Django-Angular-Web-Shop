import {Component, OnInit} from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';
import {Category} from './category';
import {CartService} from './cart.service';
import {AuthenticationService} from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DjangoWebShop';

  user: string;
  categories: Category[];
  constructor(private productService: ProductService, private authenticationService: AuthenticationService) {
  }


  ngOnInit() {
    this.getAllCategories();
    this.user = localStorage.getItem('currentUser');

  }

  getAllCategories(): void {
    this.productService.getCategories().subscribe(categories => this.categories = categories);
  }


  logout() {
    this.authenticationService.logout();
  }
}
