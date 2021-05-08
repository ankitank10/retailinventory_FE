import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategoryNode } from '../../shared/models/category.model';
import { MAIN_CATEGORIES } from '../../shared/constants';
import { ApiService } from '../../shared/services/api-service';
import { ProductService } from '../../shared/services/product.service';
import { ProductModelServer, ServerResponse } from '../../shared/models/product.model';


@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {
  categoryDetails: any;
  queryParams: any;
  currentState$: Observable<any>;
  categoryNodes: CategoryNode[] = [...MAIN_CATEGORIES];
  routeParams: any = {};
  products: ProductModelServer[] = [];
  constructor(private router: Router, public route: ActivatedRoute, private productService: ProductService) {
  }

  mapQueryparams(n: CategoryNode): CategoryNode {
    const node = { ...n, expanded: true, active: true };
    if (this.routeParams.subCatId) {
      for (const i in node.subcategories) {
        if (node.subcategories[i].id === this.routeParams.subCatId) {
          node.subcategories[i] = { ...node.subcategories[i], expanded: true, active: true };
          break;
        }
      }
    }
    return node;
  }

  ngOnInit(): void {
    console.log(this.router);
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.routeParams.catId = +params.get('catId');
        this.routeParams.subCatId = this.route.snapshot.paramMap.get('subCatId') ? +this.route.snapshot.paramMap.get('subCatId') : 0;
        this.categoryNodes = this.categoryNodes.map(c =>
          c.id === this.routeParams.catId
            ? this.mapQueryparams(c)
            : c
        );
        this.productService.getProductsFromCategory(this.routeParams).subscribe((res: ServerResponse) => {
          this.products = res.products;

        });
      }
    );
    // this.routeParams.catId = +this.route.snapshot.paramMap.get('catId');
    // this.routeParams.subCatId = this.route.snapshot.paramMap.subCatId ? +this.route.snapshot.paramMap.subCatId : 0;

  }
}
