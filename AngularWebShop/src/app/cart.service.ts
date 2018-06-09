import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from './product';
import {Observable} from 'rxjs/internal/Observable';
import {Cart} from './Cart';
import {Item} from './Item';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'

})
export class CartService {

  private baseUrl = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }


  getCartDetail(): Observable<Item[]> {
    const url = this.baseUrl + 'cart/ws/cart-details';
    return this.http.get<Item[]>(url,  { withCredentials: true });
  }

  remove(slug: string) {
    const url = this.baseUrl + 'cart/ws/remove/' + slug;
    return this.http.delete(url,  { withCredentials: true}).subscribe();
  }


}
