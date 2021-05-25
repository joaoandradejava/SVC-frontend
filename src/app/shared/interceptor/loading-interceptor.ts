import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable({
  providedIn: 'root',
})
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingService.criarLoading('Por favor aguarde');

    return next.handle(req).pipe(
      finalize(() => {
        this.loadingService.terminarLoading();
      })
    );
  }
}
