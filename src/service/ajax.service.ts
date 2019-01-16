import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/model/user';

@Injectable({
    providedIn: 'root',
  })
export class AjaxService {
    apiDomain = "https://user-manager-api.azurewebsites.net"
    userId: Promise<number>;
    constructor (private httpClient: HttpClient) {
        this.getCurrentUser();
    }

    getUsers() {
        return this.httpClient.get(`${this.apiDomain}/users`, {
            withCredentials: true
        }).toPromise().catch(_ => []);
    }

    getUser(id: number) {
        return this.httpClient.get(`${this.apiDomain}/users/${id}`, {
            withCredentials: true
        }).toPromise();
    }

    getCurrentUser() {
        return this.userId = this.httpClient.get(`${this.apiDomain}/accounts`, {
            withCredentials: true,
        }).toPromise().then((_:any) => _ && _.id).catch(_ => undefined);
    }

    saveUser(user: User) {
        var url = user.id && `${this.apiDomain}/users/${user.id}` || `${this.apiDomain}/users`;
        return (user.id && this.httpClient.put || this.httpClient.post).call(this.httpClient, url, {
            id: user.id,
            lastName: user.lastName,
            firstName: user.firstName,
            birthDate: user.birthDate,
            email: user.login,
            password: user.password,
            isActive: user.isActif,
        }, {
            withCredentials: true
        }).toPromise();
    }

    removeUser(id: number) {
        return this.httpClient.delete(`${this.apiDomain}/users/${id}`, {
            withCredentials: true
        }).toPromise();
    }

    signin(login: string, password: string) {
        return this.httpClient.get(`${this.apiDomain}/accounts/login?login=${login}&password=${password}`).toPromise();
    }
}