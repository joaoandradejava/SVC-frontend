import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcluircadastroPage } from './excluircadastro.page';

const routes: Routes = [
  {
    path: '',
    component: ExcluircadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcluircadastroPageRoutingModule {}
