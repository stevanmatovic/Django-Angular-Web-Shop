import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) {
  }


  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

}
