import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { ServerResponse, ProductModelServer } from '../../shared/models/product.model';
import { CategoryBanner } from '../../shared/models/category.model';
import { BANNER_ITEMS } from '../constants';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  productCardSwiperBreakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  };
  bannerSwiperBreakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  };
  products: ProductModelServer[] = [];
  banners: CategoryBanner[] = [...BANNER_ITEMS];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts(10).subscribe((prods: ServerResponse) => {
      this.products = prods.products;
    });
  }

}
