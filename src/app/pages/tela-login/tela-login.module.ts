import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TelaLoginPageRoutingModule } from './tela-login-routing.module';
import { TelaLoginPage } from './tela-login.page';
import { BrMaskerModule } from 'br-mask';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaLoginPageRoutingModule,
    ReactiveFormsModule,
    BrMaskerModule

  ],
  declarations: [TelaLoginPage]
})
export class TelaLoginPageModule {}
