import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CartService} from '../cart.service';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  login( f: NgForm): void {
    this.authenticationService.login(f.value.username, f.value.password).subscribe((response) => {
           console.log(response);
         });
  }

}
