import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastController: ToastController) {}

  public async exibirMensagemDeError(mensagem: string, duracao: number) {
    this.toastController.getTop().then((hasLoading) => {
      if (hasLoading) {
        this.toastController.dismiss();
      }

      this.toastController
        .create({
          message: mensagem,
          duration: duracao,
          color: 'danger',
          position: 'top',
          buttons: [
            {
              text: 'Fechar',
              role: 'cancel',
              handler: () => {},
            },
          ],
        })
        .then((toast) => {
          toast.present();
        });
    });
  }

  public async exibirMensagemDeSucesso(mensagem: string, duracao: number) {
    this.toastController.getTop().then((hasLoading) => {
      if (hasLoading) {
        this.toastController.dismiss();
      }

      this.toastController
        .create({
          message: mensagem,
          duration: duracao,
          color: 'success',
          position: 'top',
          buttons: [
            {
              text: 'Fechar',
              role: 'cancel',
              handler: () => {},
            },
          ],
        })
        .then((toast) => {
          toast.present();
        });
    });
  }
}
