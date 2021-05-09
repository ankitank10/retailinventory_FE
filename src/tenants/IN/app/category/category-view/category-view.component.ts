import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategoryNode, QueryModel } from '../../shared/models/category.model';
import { MAIN_CATEGORIES } from '../../shared/constants';
import { ProductModelServer, ServerResponse } from '../../shared/models/product.model';
import { FacadeService } from '../../shared/services/facade.service';


@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {
  categoryDetails: any;
  query: QueryModel;
  categoryNodes: CategoryNode[] = [...MAIN_CATEGORIES];
  routeParams: any = {};
  products: ProductModelServer[] = [];
  discountedProducts: ProductModelServer[] = [];
  productCardSwiperBreakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  };

  constructor(private router: Router, public route: ActivatedRoute, private facadeService: FacadeService) {
  }

  mapQueryparams(n: CategoryNode): CategoryNode {
    const node = { ...n, expanded: true, active: true };
    if (this.routeParams.subCatId) {
      for (const i in node.subcategories) {
        if (node.subcategories[i].id === this.routeParams.subCatId) {
          node.subcategories[i] = { ...node.subcategories[i], expanded: true, active: true };
        } else {
          node.subcategories[i] = { ...node.subcategories[i], expanded: false, active: false };
        }
      }
    }
    return node;
  }
  resetNode(n: CategoryNode): CategoryNode {
    const node = { ...n, expanded: false, active: false };
    // tslint:disable-next-line: forin
    for (const i in node.subcategories) {
      node.subcategories[i] = { ...node.subcategories[i], expanded: false, active: false };
    }
    return node;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.routeParams.catId = +params.get('catId');
        this.routeParams.subCatId = this.route.snapshot.paramMap.get('subCatId') ? +this.route.snapshot.paramMap.get('subCatId') : 0;
        this.handleCategoryData();
        this.getDiscountedProds();
      }
    );
  }
  handleCategoryData() {
    this.categoryNodes = this.categoryNodes.map(c =>
      c.id === this.routeParams.catId
        ? this.mapQueryparams(c)
        : this.resetNode(c)
    );
    this.query = {
      limit: 10,
      isDiscounted: false
    };
    this.facadeService.getProductsFromCategory(this.routeParams, this.query).subscribe((res: ServerResponse) => {
      this.products = res.products ? res.products : [];
    });
  }
  getDiscountedProds() {
    this.query = {
      limit: 10,
      isDiscounted: true
    };
    this.facadeService.getProductsFromCategory(this.routeParams, this.query).subscribe((res: ServerResponse) => {
      this.discountedProducts = res.products ? res.products : [];
    });
  }
  handleCategoryChange(evt) {
    if (evt.subnode) {
      this.routeParams.subCatId = evt.subnode.id;
      this.routeParams.catId = evt.node.id;
    } else {
      this.routeParams.subCatId = 0;
      this.routeParams.catId = evt.node.id;
    }
    this.handleCategoryData();
    this.getDiscountedProds();
  }
}
