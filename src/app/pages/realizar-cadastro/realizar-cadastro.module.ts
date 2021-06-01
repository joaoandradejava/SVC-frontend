import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealizarCadastroPageRoutingModule } from './realizar-cadastro-routing.module';

import { RealizarCadastroPage } from './realizar-cadastro.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealizarCadastroPageRoutingModule,
    ReactiveFormsModule,
      BrMaskerModule

  ],
  declarations: [RealizarCadastroPage]
})
export class RealizarCadastroPageModule {}
