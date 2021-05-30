import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsqueceuASenhaPageRoutingModule } from './esqueceu-asenha-routing.module';

import { EsqueceuASenhaPage } from './esqueceu-asenha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsqueceuASenhaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EsqueceuASenhaPage]
})
export class EsqueceuASenhaPageModule {}
