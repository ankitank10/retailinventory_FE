import { Component, OnInit } from '@angular/core';
import { ServerResponse, ProductModelServer } from '../../shared/models/product.model';
import { CategoryBanner, QueryModel } from '../../shared/models/category.model';
import { BANNER_ITEMS } from '../constants';
import { FacadeService } from '../../shared/services/facade.service';

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
  productCardSwiperBigBreakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
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
  query: QueryModel;
  routeParams: any = {};
  discountedProducts: ProductModelServer[] = [];
  constructor(private facadeService: FacadeService) { }

  ngOnInit(): void {
    this.query = {
      limit: 10,
      isDiscounted: false
    };
    this.getDiscountedProds();

    this.facadeService.getAllProducts(this.routeParams, this.query).subscribe((prods: ServerResponse) => {
      this.products = prods.products;
    });
  }

  getDiscountedProds() {
    this.query = {
      limit: 10,
      isDiscounted: true
    };
    this.facadeService.getAllProducts(this.routeParams, this.query).subscribe((res: ServerResponse) => {
      this.discountedProducts = res.products ? res.products : [];
    });
  }

}
