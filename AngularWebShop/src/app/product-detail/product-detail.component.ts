import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {FormsModule, NgForm} from '@angular/forms';


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

  submitProduct( f: NgForm): void {
    this.productService.addProduct(this.slug, f.value.quantity);
      // .subscribe((response) => {
      //     console.log(response);
      //   });
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.slug = params['slug'];
      console.log('usao u konstruktor')
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
