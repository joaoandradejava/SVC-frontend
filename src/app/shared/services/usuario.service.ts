import { EsqueceuASenhaInput } from './../models/esqueceu-senha-input';
import { Backend } from './../utils/backend';
import { UsuarioUpdateInput } from './../models/usuario-update';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioInput } from '../models/usuario-input';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  public buscarPorId(id: number): Observable<any> {
    return this.http.get(Backend.getBaseUsuario + `/${id}`);
  }

  public cadastrar(usuarioInput: UsuarioInput): Observable<any> {
    return this.http.post(Backend.getBaseUsuario, usuarioInput);
  }

  public atualizar(
    id: number,
    usuarioUpdateInput: UsuarioUpdateInput
  ): Observable<any> {
    return this.http.put(Backend.getBaseUsuario + `/${id}`, usuarioUpdateInput);
  }

  public esquecerSenha(esqueceuASenhaInput: EsqueceuASenhaInput): Observable<any> {
    return this.http.put(
      Backend.getBaseUsuario + '/esqueci-senha',
      esqueceuASenhaInput
    );
  }
}
