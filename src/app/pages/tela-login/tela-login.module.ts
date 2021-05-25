import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaLoginPageRoutingModule } from './tela-login-routing.module';

import { TelaLoginPage } from './tela-login.page';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaLoginPageRoutingModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule

  ],
  declarations: [TelaLoginPage]
})
export class TelaLoginPageModule {}
