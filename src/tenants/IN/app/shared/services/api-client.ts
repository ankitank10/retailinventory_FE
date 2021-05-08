import { HttpClient, HttpParams } from '@angular/common/http';

export class ApiClient {
    constructor(private http: HttpClient, private actionUrl: string) { }

    post(routeURL, options: QueryOptions) {
        let queryParams;
        if (options.query) {
            queryParams = this.createQueryParams(options.query);
        }
        if (options.routeParams) {
            routeURL = this.createRouteURL(routeURL, options.routeParams);
        }

        return this.http.post(routeURL, options.payload, {
            params: queryParams,
        });
    }

    get(routeURL, options: QueryOptions) {
        let queryParams;
        if (options.query) {
            queryParams = this.createQueryParams(options.query);
        }
        if (options.routeParams) {
            routeURL = this.createRouteURL(routeURL, options.routeParams);
        }
        return this.http.get(routeURL);
    }

    private createQueryParams(query: any): HttpParams {
        let params = new HttpParams();
        // tslint:disable-next-line: forin
        for (const key in query) {
            params = params.append(key, query[key]);
        }
        return params;
    }

    private createRouteURL(routeURL = this.actionUrl, routeParams: any): string {
        let urlResult = routeURL;
        if (routeParams) {
            // tslint:disable-next-line: forin
            for (const param in routeParams) {
                const myRegExp = new RegExp(':' + param);
                urlResult = urlResult.replace(myRegExp, routeParams[param]);
            }
        }
        return urlResult;
    }
}
interface QueryOptions {
    query?: any;
    routeParams?: any;
    payload?: any;
}
