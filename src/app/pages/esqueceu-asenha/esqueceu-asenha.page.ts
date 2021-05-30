import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/shared/services/toast.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { ValidadorFormulario } from 'src/app/shared/utils/validador-formulario';

@Component({
  selector: 'app-esqueceu-asenha',
  templateUrl: './esqueceu-asenha.page.html',
  styleUrls: ['./esqueceu-asenha.page.scss'],
})
export class EsqueceuASenhaPage implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(255),
          Validators.email,
        ],
      ],
    });
  }

  public mudarSenha(): void {
    if (this.formGroup.valid) {
      this.usuarioService
        .esquecerSenha(this.formGroup.value)
        .subscribe((data) => {
          this.toastService.exibirMensagemDeSucesso(
            'Uma nova senha foi enviada para o seu email!',
            5000
          );
          this.formGroup.reset();
        });
    }
  }

  public getMensagemCampoObrigatorio(label: string): string {
    return ValidadorFormulario.getMensagemCampoObrigatorio(label);
  }

  public getMensagemCampoComTamanho(
    label: string,
    min: number,
    max: number
  ): string {
    return ValidadorFormulario.getMensagemCampoComTamanho(label, min, max);
  }

  public campoInvalido(label: string): string {
    return ValidadorFormulario.campoInvalido(label);
  }
}
