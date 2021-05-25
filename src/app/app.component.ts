import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
 
    { title: 'Agendar vacína', url: 'agendar-vacina', icon: 'calendar-number' },
    { title: 'Atualizar cadastro', url: 'atualizar-cadastro', icon: 'reload' },
    { title: 'Enviar feedback', url: 'enviar-feedback', icon: 'document-attach' },
    { title: 'Gerar relatório', url: 'gerar-relatorio', icon: 'receipt' },
    { title: 'Vizualizar relatório', url: 'vizualizar-relarorio', icon: 'document' },
    { title: 'Vizualizar historico', url: 'vizualizar-historico', icon: 'library' },
    { title: 'Excluir cadastro', url: 'excluircadastro', icon: 'trash' },
    { title: 'Logoff', url: 'excluircadastro', icon: 'log-out' },

  ];
  constructor() {}
}
