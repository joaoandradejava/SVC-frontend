import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Backend } from '../utils/backend';

@Injectable({
  providedIn: 'root'
})
export class EstatisticaService {

  constructor(private http: HttpClient) { }

  public gerarRelatorioDoAgendamentoDasVacinas(): Observable<any>{
    return this.http.get(Backend.getBaseEstatistica + '/agendamentos/relatorio')
  }
}
