import { Component, OnInit, Input } from '@angular/core';
import { ProductModelServer } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: ProductModelServer;
  @Input() isBig = false;


  discountedPrice = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.discountedPrice = ((100 - this.product.discount) / 100) * this.product.price;
  }
  AddProduct(id: number) {
    this.cartService.AddProductToCart(id);
  }

}
