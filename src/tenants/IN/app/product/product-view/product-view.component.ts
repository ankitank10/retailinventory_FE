import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductModelServer } from '../../shared/models/product.model';
import { FacadeService } from '../../shared/services/facade.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  routeParams: any = {};
  product: ProductModelServer;
  constructor(private router: Router, public route: ActivatedRoute, private facadeService: FacadeService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.routeParams.productId = +params.get('productId');
        this.facadeService.getSingleProduct(this.routeParams).subscribe((res: ProductModelServer) => {
          this.product = res;

        });
      }
    );
  }

}
