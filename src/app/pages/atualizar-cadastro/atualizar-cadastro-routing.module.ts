import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtualizarCadastroPage } from './atualizar-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: AtualizarCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtualizarCadastroPageRoutingModule {}
