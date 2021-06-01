import { Observable } from 'rxjs';
import { VacinaModel } from './../../shared/models/vacina-model';
import { VacinaService } from './../../shared/services/vacina.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { AutenticacaoService } from 'src/app/shared/services/autenticacao.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { AgendamentoInput } from 'src/app/shared/models/agendamento-input';

@Component({
  selector: 'app-agendar-vacina',
  templateUrl: './agendar-vacina.page.html',
  styleUrls: ['./agendar-vacina.page.scss'],
})
export class AgendarVacinaPage implements OnInit {
  vacinas: Observable<VacinaModel[]>;
  formGroup: FormGroup;

  constructor(
    private vacinaService: VacinaService,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private autenticacaoService: AutenticacaoService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.vacinas = this.vacinaService.buscarTodas();

    this.formGroup = this.formBuilder.group({
      dataAgendamento: ['', [Validators.required]],
      tipoVacina: ['', [Validators.required]],
    });

  }

  fazerAgendamento(): void {

    if (this.formGroup.valid) {
      let agendamentoInput: AgendamentoInput = this.formGroup.value
      agendamentoInput.dataAgendamento = new Date(agendamentoInput.dataAgendamento).toISOString()
      console.log(agendamentoInput)
      this.usuarioService
        .fazerAgendamento(
          this.formGroup.value,
          this.autenticacaoService.getUsuarioAutenticado().id
        )
        .subscribe((data) => {
          this.formGroup.reset();
          this.toastService.exibirMensagemDeSucesso(
            'Agendamento realizado com sucesso!',
            5000
          );
        });
    }
  }
}
