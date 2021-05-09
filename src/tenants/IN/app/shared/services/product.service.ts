import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ServerResponse, ProductModelServer } from '../models/product.model';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = environment.serverURL;

  constructor(private http: HttpClient, private apiService: ApiService) {
  }

  getAllProducts(routeParams, query): Observable<any> {
    return this.apiService.ApiClientObj.get(`${this.url}products`, { routeParams, query });

  }

  getSingleProduct(routeParams): Observable<any> {
    return this.apiService.ApiClientObj.get(`${this.url}products/:productId`, { routeParams });
  }

  getProductsFromCategory(routeParams, query): Observable<any> {
    return this.apiService.ApiClientObj.get(`${this.url}products/category/:catId/:subCatId`, { routeParams, query });
  }

}
