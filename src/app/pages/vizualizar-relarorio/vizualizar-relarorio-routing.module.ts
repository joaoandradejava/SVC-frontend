import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VizualizarRelarorioPage } from './vizualizar-relarorio.page';

const routes: Routes = [
  {
    path: '',
    component: VizualizarRelarorioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VizualizarRelarorioPageRoutingModule {}
