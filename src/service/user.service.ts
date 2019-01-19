import { Injectable } from '@angular/core';
import { User } from 'src/model/user';
import { AjaxService } from './ajax.service';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    // apiDomain = "https://localhost:44308"
    apiDomain = "https://user-manager-api.azurewebsites.net"
    userId: Promise<number>;
    constructor (private ajaxService: AjaxService) {
        this.getCurrentUser();
    }

    getUsers() {
        return this.ajaxService.get(`${this.apiDomain}/users`).catch(_ => []);
    }

    getUser(id: number) {
        return this.ajaxService.get(`${this.apiDomain}/users/${id}`);
    }

    getCurrentUser() {
        return this.userId || (this.userId = this.getCurrentUserFromApi());
    }

    saveUser(user: User) {
        var url = user.id && `${this.apiDomain}/users/${user.id}` || `${this.apiDomain}/users`;
        return (user.id && this.ajaxService.put || this.ajaxService.post).call(this.ajaxService, url, {
            id: user.id,
            lastName: user.lastName,
            firstName: user.firstName,
            birthDate: user.birthDate,
            email: user.login,
            password: user.password,
            isActive: user.isActif,
        });
    }

    removeUser(id: number) {
        return this.ajaxService.delete(`${this.apiDomain}/users/${id}`);
    }

    signin(login: string, password: string) {
        return this.ajaxService.post(`${this.apiDomain}/accounts/login`, {
            login: login,
            password: password
        }).then(() => {
            this.userId = this.getCurrentUserFromApi();
        });
    }

    private getCurrentUserFromApi() {
        return this.ajaxService.get(`${this.apiDomain}/accounts`).then((_:any) => _ && +_.id).catch(_ => undefined);
    }
}