import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryViewComponent } from './category-view/category-view.component';
import { TreeModule } from '../../../../shared/tree/tree.module';
import { SwiperModule } from '../../../../shared/swiper/swiper.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CategoryViewComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    TreeModule,
    SwiperModule,
    SharedModule
  ]
})
export class CategoryModule { }
