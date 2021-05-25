import { MenuController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacaoService } from '../services/autenticacao.service';

@Injectable({
  providedIn: 'root',
})
export class AutenticadoGuard implements CanActivate {
  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router,
    private menuController: MenuController
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.menuController.enable(this.autenticacaoService.isAutenticado());

    if (!this.autenticacaoService.isAutenticado()) {
      this.router.navigate(['tela-login']);

      return false;
    }

    return true;
  }
}
