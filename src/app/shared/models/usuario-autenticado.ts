export class UsuarioAutenticado {
  id: number;
  token: string;
  isAdmin: boolean;

  constructor(id: number, token: string, isAdmin: boolean) {
    this.id = id;
    this.token = token;
    this.isAdmin = isAdmin;
  }
}

