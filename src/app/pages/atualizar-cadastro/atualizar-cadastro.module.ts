import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtualizarCadastroPageRoutingModule } from './atualizar-cadastro-routing.module';

import { AtualizarCadastroPage } from './atualizar-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtualizarCadastroPageRoutingModule
  ],
  declarations: [AtualizarCadastroPage]
})
export class AtualizarCadastroPageModule {}
