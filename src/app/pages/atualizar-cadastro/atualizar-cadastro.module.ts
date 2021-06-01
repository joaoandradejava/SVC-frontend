import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AtualizarCadastroPageRoutingModule } from './atualizar-cadastro-routing.module';
import { AtualizarCadastroPage } from './atualizar-cadastro.page';
import { BrMaskerModule } from 'br-mask';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtualizarCadastroPageRoutingModule,
    ReactiveFormsModule,
    BrMaskerModule

  ],
  declarations: [AtualizarCadastroPage]
})
export class AtualizarCadastroPageModule {}
