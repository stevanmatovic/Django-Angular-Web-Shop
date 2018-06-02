import {Component, OnInit} from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';
import {Category} from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DjangoWebShop';

  categories: Category[];
  constructor(private productService: ProductService) {
  }


  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.productService.getCategories().subscribe(categories => this.categories = categories);
  }

}
