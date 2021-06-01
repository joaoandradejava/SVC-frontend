import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AutenticacaoService } from 'src/app/shared/services/autenticacao.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-excluircadastro',
  templateUrl: './excluircadastro.page.html',
  styleUrls: ['./excluircadastro.page.scss'],
})
export class ExcluircadastroPage implements OnInit {
  constructor(
    private alertController: AlertController,
    private usuarioService: UsuarioService,
    private autenticacaoService: AutenticacaoService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit() {}

  async deletarConta() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Exclusão da conta',
      message:
        'Você tem certeza que deseja <strong>excluir</strong> sua conta?',
      buttons: [
        {
          text: 'NÃO',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'SIM',
          handler: () => {
            this.usuarioService
              .deletarPorId(this.autenticacaoService.getUsuarioAutenticado().id)
              .subscribe((data) => {
                this.autenticacaoService.sair();
                this.toastService.exibirMensagemDeSucesso(
                  'Sua conta foi excluida com sucesso!',
                  5000
                );
                this.router.navigate(['']);
              });
          },
        },
      ],
    });

    await alert.present();
  }
}
