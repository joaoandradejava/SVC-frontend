import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { ToastService } from '../services/toast.service';
import { AutenticacaoService } from '../services/autenticacao.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ExceptionsInterceptor implements HttpInterceptor {
  constructor(
    private toastService: ToastService,
    private autenticacaoService: AutenticacaoService,
    private router: Router
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: any) => {
        if (error.error.status === 403) {
          const mensagem =
            'Sessão expirou. para continuar é necessário realizar o login novamente.';
          this.toastService.exibirMensagemDeError(mensagem, 5000);
          this.autenticacaoService.sair();
          this.router.navigate(['']);
        } else {
          const message = error.error.userMessage;
          const errors = error.error.errors;

          if (errors !== undefined) {
            const mensagem = errors[0].userMessage;
            this.toastService.exibirMensagemDeError(mensagem, 5000);
          } else {
            this.toastService.exibirMensagemDeError(message, 5000);
          }
        }

        return throwError(error);
      })
    );
  }
}
