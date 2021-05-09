import { Component, OnInit } from '@angular/core';
import { ProductModelServer, ServerResponse } from './shared/models/product.model';
import { CategoryNode } from './shared/models/category.model';
import { MAIN_CATEGORIES } from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  categoryNodes: CategoryNode[] = [...MAIN_CATEGORIES];
  title = 'retail-inventory';
  constructor() {
  }

  ngOnInit() {
  }


}
