import { Injectable } from '@angular/core';
import { Product } from './product';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient, HttpHeaders, HttpRequest,} from '@angular/common/http';
import {Category} from './category';
import {Router} from '@angular/router';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8000/';

  constructor(private http: HttpClient, private router: Router) {

  }

  getProducts(): Observable<Product[]> {
    const url = this.baseUrl + 'ws/product-list';
    return this.http.get<Product[]>(url);
}

  getCategories(): Observable<Category[]> {
    const url = this.baseUrl + 'ws/categories';
    return this.http.get<Category[]>(url);
  }


  getProduct(slug: string): Observable<Product> {
    const url = this.baseUrl + 'ws/product-detail/' + slug;
    return this.http.get<Product>(url);
  }


  addProduct(slug: string, quantity: number) {

    const url = this.baseUrl + 'cart/ws/add-product';
    // return this.http.post(url , quantity);

    return this.http.post(url, {
      quantity: quantity,
      slug : slug
    }, { withCredentials: true })
      .subscribe(
        res => {
          //ter.navigate(['/']);
        }
      );
  }


  getProductsByCategory(category: string): Observable<Product[]> {
    const url = this.baseUrl + 'ws/product-list/' + category;
    return this.http.get<Product[]>(url);
  }

}
