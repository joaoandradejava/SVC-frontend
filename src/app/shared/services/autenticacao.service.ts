import { UsuarioAutenticado } from 'src/app/shared/models/usuario-autenticado';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor() {}

  public autenticar(usuarioAutenticado: UsuarioAutenticado): void {
    localStorage.setItem(
      'usuario-autenticado',
      JSON.stringify(usuarioAutenticado)
    );
  }

  public getUsuarioAutenticado(): UsuarioAutenticado {
    const data = JSON.parse(localStorage.getItem('usuario-autenticado'));
    let usuarioAutenticado: UsuarioAutenticado = new UsuarioAutenticado(
      data.id,
      data.token,
      data.isAdmin
    );

    return usuarioAutenticado;
  }

  public isAutenticado(): boolean {
    return localStorage.getItem('usuario-autenticado') !== null &&
      localStorage.getItem('usuario-autenticado') !== undefined
      ? true
      : false;
  }

  public sair(): void {
    localStorage.clear();
  }
}
