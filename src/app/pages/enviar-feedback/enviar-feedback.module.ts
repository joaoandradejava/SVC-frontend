import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviarFeedbackPageRoutingModule } from './enviar-feedback-routing.module';

import { EnviarFeedbackPage } from './enviar-feedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnviarFeedbackPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EnviarFeedbackPage]
})
export class EnviarFeedbackPageModule {}
