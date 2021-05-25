import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExcluircadastroPageRoutingModule } from './excluircadastro-routing.module';

import { ExcluircadastroPage } from './excluircadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExcluircadastroPageRoutingModule
  ],
  declarations: [ExcluircadastroPage]
})
export class ExcluircadastroPageModule {}
