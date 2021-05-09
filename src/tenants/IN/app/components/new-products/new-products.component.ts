import { Component, OnInit, Input } from '@angular/core';
import { ProductModelServer, ServerResponse } from '../../shared/models/product.model';
import { CartService } from '../../shared/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent implements OnInit {

  @Input() products: ProductModelServer[] = [];

  constructor(private cartService: CartService, private router: Router) {
  }

  ngOnInit() {

  }

  AddProduct(id: number) {
    this.cartService.AddProductToCart(id);
  }

  selectProduct(id: number) {
    this.router.navigate(['/product', id]).then();
  }

}
