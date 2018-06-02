import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[];
  slug: string;
  private sub: any;
  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.slug = params['slug'];

      if (this.slug) {
        this.getProductsForCategory(this.slug);
      } else {
        this.getAllProducts();
      }

    });

  }

  getAllProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }
  getProductsForCategory(slug: string): void {
    this.productService.getProductsByCategory(slug).subscribe(products => this.products = products);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
