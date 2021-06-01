import { UsuarioService } from './../../shared/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacaoService } from 'src/app/shared/services/autenticacao.service';
import { ValidadorFormulario } from 'src/app/shared/utils/validador-formulario';
import { ToastService } from 'src/app/shared/services/toast.service';
import { BrMaskDirective, BrMaskModel } from 'br-mask';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { UsuarioUpdateInput } from 'src/app/shared/models/usuario-update';

@Component({
  selector: 'app-atualizar-cadastro',
  templateUrl: './atualizar-cadastro.page.html',
  styleUrls: ['./atualizar-cadastro.page.scss'],
})
export class AtualizarCadastroPage implements OnInit {
  formGroup: FormGroup;
  cpf: string;

  constructor(
    private formBuilder: FormBuilder,
    private autenticacaoService: AutenticacaoService,
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
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(255),
          Validators.email,
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

    this.usuarioService
      .buscarPorId(this.autenticacaoService.getUsuarioAutenticado().id)
      .subscribe((data) => {
        this.formGroup.get('nome').setValue(data.nome);
        this.formGroup.get('email').setValue(data.email);
        this.formGroup.get('telefone').setValue(data.telefone);
        this.cpf = data.cpf;
      });
  }

  public getMensagemCampoObrigatorio(label: string): string {
    return ValidadorFormulario.getMensagemCampoObrigatorio(label);
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

  public atualizar(): void {
    if (this.formGroup.valid) {
      let usuarioUpdateInput: UsuarioUpdateInput = this.formGroup.value;
      usuarioUpdateInput.telefone = this.valorResetadoTelefone();
      this.usuarioService
        .atualizar(
          this.autenticacaoService.getUsuarioAutenticado().id,
          usuarioUpdateInput
        )
        .subscribe((data) => {
          this.toastService.exibirMensagemDeSucesso(
            'Dados atualizados com sucesso!',
            5000
          );
        });
    }
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
