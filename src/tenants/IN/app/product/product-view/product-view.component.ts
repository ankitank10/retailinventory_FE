import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
import { ProductModelServer } from '../../shared/models/product.model';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  routeParams: any = {};
  product: ProductModelServer;
  constructor(private router: Router, public route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.routeParams.productId = +params.get('productId');
        this.productService.getSingleProduct(this.routeParams).subscribe((res: ProductModelServer) => {
          console.log(res);

        });
      }
    );
  }

}
