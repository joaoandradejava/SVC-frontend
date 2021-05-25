import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor(private loadingController: LoadingController) {}

  public async criarLoading(mensagem: string) {
    const loading = await this.loadingController.create({
      message: mensagem,
    });

    await loading.present();
  }

  public async terminarLoading() {
    this.loadingController.dismiss();
  }
}
