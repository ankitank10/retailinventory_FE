import { Injectable, Injector } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  // tslint:disable-next-line: variable-name
  private _productservice: ProductService;

  public get productService(): ProductService {
    if (!this._productservice) {
      this._productservice = this.injector.get(ProductService);
    }
    return this._productservice;
  }

  constructor(private injector: Injector) { }

  getAllProducts(routeParams, query) {
    return this.productService.getAllProducts(routeParams, query);
  }
  getSingleProduct(routeParams) {
    return this.productService.getSingleProduct(routeParams);
  }
  getProductsFromCategory(routeParams, query) {
    return this.productService.getProductsFromCategory(routeParams, query);
  }
}
