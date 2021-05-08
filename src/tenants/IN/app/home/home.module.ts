import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeViewComponent } from './home-view/home-view.component';
import { NewProductsComponent } from '../components/new-products/new-products.component';
import { SwiperModule } from '../../../../shared/swiper/swiper.module';
import { BasicComponentsModule } from '../../../../shared/basic-components/basic-components.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeViewComponent, NewProductsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BasicComponentsModule,
    SwiperModule,
    SharedModule
  ],
  exports: [HomeViewComponent]
})
export class HomeModule { }
