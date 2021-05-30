import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { UsuarioAutenticado } from 'src/app/shared/models/usuario-autenticado';
import { AutenticacaoService } from 'src/app/shared/services/autenticacao.service';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.page.html',
  styleUrls: ['./tela-login.page.scss'],
})
export class TelaLoginPage implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private autenticacaoService: AutenticacaoService,
    private router: Router,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      cpf: [
        '',
        [
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(11),
        ],
      ],
      senha: [
        '',
        [
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(255),
        ],
      ],
    });
  }

  logar() {
    if (this.formGroup.valid) {
      this.loginService
        .realizarLogin(this.formGroup.value)
        .subscribe((data) => {
          let usuarioAutenticado: UsuarioAutenticado = new UsuarioAutenticado(
            data.id,
            data.token,
            data.isAdmin
          );
          this.autenticacaoService.autenticar(usuarioAutenticado);
          this.router.navigate(['/atualizar-cadastro']);
        });
    }
  }


}
