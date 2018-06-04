import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  product: Product;
  slug: string;
  private sub: any;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  submitProduct(quantity: number): void {
    this.productService.addProduct(this.slug, quantity);

  }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.slug = params['slug'];

      this.getProduct(this.slug);

    });
  }

  getProduct(slug: string): void {
    this.productService.getProduct(slug).subscribe(product => this.product = product);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
