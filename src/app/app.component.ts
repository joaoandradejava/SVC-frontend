import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AutenticacaoService } from './shared/services/autenticacao.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Agendar vacína', url: 'agendar-vacina', icon: 'calendar-number' },
    { title: 'Atualizar cadastro', url: 'atualizar-cadastro', icon: 'reload' },
    {
      title: 'Enviar feedback',
      url: 'enviar-feedback',
      icon: 'document-attach',
    },
    { title: 'Gerar relatório', url: 'gerar-relatorio', icon: 'receipt' },
    {
      title: 'Vizualizar relatório',
      url: 'vizualizar-relarorio',
      icon: 'document',
    },
    {
      title: 'Vizualizar historico',
      url: 'vizualizar-historico',
      icon: 'library',
    },
    { title: 'Excluir cadastro', url: 'excluircadastro', icon: 'trash' },
  ];
  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router,
    private menuController: MenuController
  ) {}
  ngOnInit(): void {
    this.menuController.enable(true);
  }

  isAutenticado(): boolean {
    return this.autenticacaoService.isAutenticado();
  }

  sair(): void {
    this.autenticacaoService.sair();

    this.router.navigate(['']);
  }
}
