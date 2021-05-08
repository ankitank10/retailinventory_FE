import { Component, OnInit } from '@angular/core';
import { ProductModelServer, ServerResponse } from './shared/models/product.model';
import { ProductService } from './shared/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'retail-inventory';
  constructor() {
  }

  ngOnInit() {
  }

}
