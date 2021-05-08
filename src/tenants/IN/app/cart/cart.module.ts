import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartViewComponent } from './cart-view/cart-view.component';
import { CartRoutingModule } from './cart-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CartViewComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule
  ]
})
export class CartModule { }
