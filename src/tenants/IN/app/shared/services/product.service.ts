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

  getAllProducts(limitOfResults = 10): Observable<ServerResponse> {
    return this.http.get<ServerResponse>(this.url + 'products', {
      params: {
        limit: limitOfResults.toString()
      }
    });
  }

  getSingleProduct(routeParams): Observable<any> {
    return this.apiService.ApiClientObj.get(`${this.url}products/:productId/`, { routeParams });

    // return this.http.get<ProductModelServer>(this.url + 'products/' + id);
  }

  getProductsFromCategory(routeParams): Observable<any> {
    return this.apiService.ApiClientObj.get(`${this.url}products/category/:catId/:subCatId`, { routeParams });
    // return this.http.get<ProductModelServer[]>(this.url + `products/category/${routeParams.catId}/${routeParams.subCatId}`);
  }

}
