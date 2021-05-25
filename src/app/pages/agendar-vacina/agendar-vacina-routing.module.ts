import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendarVacinaPage } from './agendar-vacina.page';

const routes: Routes = [
  {
    path: '',
    component: AgendarVacinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendarVacinaPageRoutingModule {}
