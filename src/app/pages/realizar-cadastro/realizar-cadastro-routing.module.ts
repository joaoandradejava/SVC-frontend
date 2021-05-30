import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealizarCadastroPage } from './realizar-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: RealizarCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealizarCadastroPageRoutingModule {}
