import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AjaxService } from './ajax.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private ajaxService: AjaxService) { }

  canActivate() {
    return this.ajaxService.getCurrentUser().then(id => !!id || (this.router.navigate(["/login"])));
  }
}