import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService
  ) { }
  canActivate(route: ActivatedRouteSnapshot) {
    const role = this.auth.getRole();
    const pathRoles = route.data.roles as Array<string>;
    if(role && pathRoles && pathRoles.includes(role)) {
      return true;
    } else {
      this.auth.logout();
      return false;
    }
  }
}
