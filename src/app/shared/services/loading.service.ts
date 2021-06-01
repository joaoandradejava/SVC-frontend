import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor(private loadingController: LoadingController) {}

  public async criarLoading(mensagem: string) {
    this.loadingController.getTop().then((hasLoading) => {
      if (!hasLoading) {
        this.loadingController
          .create({
            message: mensagem,
            duration: 5000
          })
          .then((loading) => {
            loading.present();
          });
      }
    });
  }

  public async terminarLoading() {
    this.loadingController.getTop().then((hasLoading) => {
      if (hasLoading) {
        this.loadingController.dismiss();
      }
    });
  }
}
