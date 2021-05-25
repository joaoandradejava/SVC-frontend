import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerarRelatorioPage } from './gerar-relatorio.page';

const routes: Routes = [
  {
    path: '',
    component: GerarRelatorioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerarRelatorioPageRoutingModule {}
