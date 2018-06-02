import { Injectable } from '@angular/core';
import { Product } from './product';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Category} from './category';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8000/ws/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    const url = this.baseUrl + 'product-list';
    return this.http.get<Product[]>(url);
}

  getCategories(): Observable<Category[]> {
    const url = this.baseUrl + 'categories';
    return this.http.get<Category[]>(url);
  }


  getProduct(slug: string): Observable<Product> {
    const url = this.baseUrl + 'product-detail/' + slug;
    return this.http.get<Product>(url);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    const url = this.baseUrl + 'product-list/' + category;
    return this.http.get<Product[]>(url);
  }

}
