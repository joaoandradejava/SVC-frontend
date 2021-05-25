import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnviarFeedbackPage } from './enviar-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: EnviarFeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnviarFeedbackPageRoutingModule {}
