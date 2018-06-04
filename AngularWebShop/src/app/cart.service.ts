import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from './product';
import {Observable} from 'rxjs/internal/Observable';


const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'

})
export class CartService {

  private baseUrl = 'http://localhost:8000/ws/';

  constructor(private http: HttpClient) { }


  // getCartDetail(): Observable<Cart> {
  //   const url = this.baseUrl + 'cart-details';
  //   return this.http.get<Cart>(url);
  // }
}
