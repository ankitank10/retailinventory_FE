import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { BannerComponent } from './components/banner/banner.component';
import { RouterModule } from '@angular/router';
const components = [
  ProductCardComponent,
  BannerComponent,
];
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
