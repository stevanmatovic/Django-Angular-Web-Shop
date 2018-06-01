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
  // TODO: we should change the urls from Django Web Services
  private baseUrl = 'http://localhost:8000/ws/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    // TODO: change url
    const url = this.baseUrl + 'products';
    return this.http.get<Product[]>(url);
}

  getProduct(slug: string): Observable<Product> {
    //TODO change url
    const url = this.baseUrl + 'products'
  }

}
