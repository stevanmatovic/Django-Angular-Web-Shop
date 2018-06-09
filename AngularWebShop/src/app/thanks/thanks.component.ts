import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {

  user: string;

  constructor() { }

  ngOnInit() {
    this.user=localStorage.getItem('currentUser');
  }

}
