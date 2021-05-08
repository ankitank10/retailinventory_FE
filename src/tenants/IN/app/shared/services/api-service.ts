import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiClient } from './api-client';
import { environment } from '../../../environments/environment';
const ServerURL = environment.serverURL;

@Injectable({ providedIn: 'root' })
export class ApiService {
    apiUrl = ServerURL;

    constructor(private http: HttpClient) { }

    ApiClientObj = new ApiClient(this.http, this.apiUrl);
}
