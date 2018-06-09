import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {routerNgProbeToken} from '@angular/router/src/router_module';
import {setUpControl} from '@angular/forms/src/directives/shared';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:8000/';

  constructor(private http: HttpClient, private router: Router) { }


  login(username: string, password: string) {
    return this.http.post<any>(this.baseUrl + 'ws/login', { username: username, password: password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.router.navigate(['/']);
          window.location.reload();
        }
      }));
  }

  register(username: string, password: string) {
    return this.http.post<any>(this.baseUrl + 'ws/register', { username: username, password: password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.router.navigate(['/']);
          window.location.reload();
        }
      }));
  }


  logout() {
    localStorage.removeItem('currentUser');
    return this.http.post<any>(this.baseUrl + 'ws/logout', {}, {withCredentials: true}).subscribe( res => {
      this.router.navigate(['/']);
      window.location.reload();
    });
  }

}
