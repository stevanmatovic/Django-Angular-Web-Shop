import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  register( f: NgForm): void {
    if ( f.value.password !== f.value.repeat_password){
      alert('Password not matching')
      return;
    }
    this.authenticationService.register(f.value.username, f.value.password).subscribe((response) => {
      console.log(response);
    });
  }

}
