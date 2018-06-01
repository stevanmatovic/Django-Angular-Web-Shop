import { Injectable } from '@angular/core';
import { Product } from './product';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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

  getProduct(slug: string): Observable<Product> {
    const url = this.baseUrl + 'product-detail/' + slug;
    return this.http.get<Product>(url);
  }

  getProductsByCategory(Category: string): Observable<Product[]> {
    const url = this.baseUrl + 'product-list/' + Category;
    return this.http.get<Product[]>(url);
  }

}
