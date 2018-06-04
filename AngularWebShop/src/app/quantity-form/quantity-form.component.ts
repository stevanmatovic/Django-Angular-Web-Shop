import { Component, OnInit } from '@angular/core';

import { Quantity} from '../quantity';

@Component({
  selector: 'app-quantity-form',
  templateUrl: './quantity-form.component.html',
  styleUrls: ['./quantity-form.component.css']
})
export class QuantityFormComponent implements OnInit {

  model = new Quantity(1);

  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }


  constructor() { }

  ngOnInit() {
  }

}
