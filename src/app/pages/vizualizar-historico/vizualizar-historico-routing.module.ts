import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VizualizarHistoricoPage } from './vizualizar-historico.page';

const routes: Routes = [
  {
    path: '',
    component: VizualizarHistoricoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VizualizarHistoricoPageRoutingModule {}
