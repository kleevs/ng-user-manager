import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AjaxService {
    constructor (private httpClient: HttpClient) {
    }

    get(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }) {
        options = options || {};
        options.withCredentials = true;
        return this.httpClient.get(url, options).toPromise();
    }

    put(url: string, body: any | null, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }) {
        options = options || {};
        options.withCredentials = true;
        return this.httpClient.put(url, body, options).toPromise();
    }

    post(url: string, body: any | null, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }) {
        options = options || {};
        options.withCredentials = true;
        return this.httpClient.post(url, body, options).toPromise();
    }

    delete(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }) {
        options = options || {};
        options.withCredentials = true;
        return this.httpClient.delete(url, options).toPromise();
    }
}