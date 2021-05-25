import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastController: ToastController) {}

  public async exibirMensagemDeError(mensagem: string, duracao: number) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: duracao,
      color: 'danger',
      position: 'top',
      buttons: [
        {
          text: 'Fechar',
          role: 'cancel',
          handler: () => {
          },
        },
      ],
    });
    await toast.present();
  }
}
