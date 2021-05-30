import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacaoService } from '../services/autenticacao.service';
import { UsuarioAutenticado } from '../models/usuario-autenticado';
import 'rxjs/operators'
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable({
  providedIn: 'root',
})
export class TokenJwtInterceptor implements HttpInterceptor {
  constructor(private autenticacaoService: AutenticacaoService, private loadingService: LoadingService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.autenticacaoService.isAutenticado()) {
      let usuarioAutenticado: UsuarioAutenticado =
        this.autenticacaoService.getUsuarioAutenticado();
      let tokenJwt = usuarioAutenticado.token;

      const request = req.clone({ setHeaders: { Authorization: tokenJwt } });

      return next.handle(request);
    }

    return next.handle(req).pipe(finalize(() => {
      this.loadingService.terminarLoading()
    }));
  }
}
