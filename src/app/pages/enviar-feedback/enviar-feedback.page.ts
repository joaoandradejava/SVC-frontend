import { FeedbackService } from './../../shared/services/feedback.service';
import { ValidadorFormulario } from './../../shared/utils/validador-formulario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/shared/services/toast.service';
import { AutenticacaoService } from 'src/app/shared/services/autenticacao.service';

@Component({
  selector: 'app-enviar-feedback',
  templateUrl: './enviar-feedback.page.html',
  styleUrls: ['./enviar-feedback.page.scss'],
})
export class EnviarFeedbackPage implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private feedbackService: FeedbackService,
    private toastService: ToastService,
    private autenticacaoService: AutenticacaoService
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      comentario: ['', [Validators.required]],
    });
  }

  public enviarFeedback(): void {
    if (this.formGroup.valid) {
      this.feedbackService
        .enviarFeedback(
          this.formGroup.value,
          this.autenticacaoService.getUsuarioAutenticado().id
        )
        .subscribe((data) => {
          this.toastService.exibirMensagemDeSucesso(
            'Feedback enviado com sucesso!',
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
}
