import { Backend } from './../utils/backend';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {

  constructor(private http: HttpClient) { }

  public buscarTodas(): Observable<any>{
    return this.http.get(Backend.getBaseVacina)
  }
}
