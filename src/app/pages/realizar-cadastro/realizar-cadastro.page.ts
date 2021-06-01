import { ValidadorFormulario } from './../../shared/utils/validador-formulario';
import { UsuarioService } from './../../shared/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/shared/services/toast.service';
import { UsuarioInput } from 'src/app/shared/models/usuario-input';

@Component({
  selector: 'app-realizar-cadastro',
  templateUrl: './realizar-cadastro.page.html',
  styleUrls: ['./realizar-cadastro.page.scss'],
})
export class RealizarCadastroPage implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
        ],
      ],
      cpf: [
        '',
        [
          Validators.required,
          Validators.minLength(14),
          Validators.maxLength(14),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(255),
          Validators.email,
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
      telefone: [
        '',
        [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16),
        ],
      ],
    });
  }

  public valorResetadoTelefone(): string {
    let valor: string = this.formGroup.get('telefone').value;

    valor = valor.replace('(', '');
    valor = valor.replace(')', '');
    valor = valor.replace(' ', '');
    valor = valor.replace(' ', '');

    valor = valor.replace('-', '');

    return valor;
  }

  public valorResetadoCpf(): string {
    let valor: string = this.formGroup.get('cpf').value;

    valor = valor.replace('.', '');
    valor = valor.replace('.', '');
    valor = valor.replace('.', '');
    valor = valor.replace('-', '');

    return valor;
  }

  public realizarCadastro(): void {
    if (this.formGroup.valid) {
      let usuarioInput: UsuarioInput = this.formGroup.value;
      usuarioInput.telefone = this.valorResetadoTelefone();
      usuarioInput.cpf = this.valorResetadoCpf();
      this.usuarioService.cadastrar(this.formGroup.value).subscribe((data) => {
        this.formGroup.reset();
        this.toastService.exibirMensagemDeSucesso(
          'Seu cadastro foi realizado com sucesso!',
          5000
        );
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
