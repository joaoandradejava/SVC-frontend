import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VizualizarHistoricoPageRoutingModule } from './vizualizar-historico-routing.module';

import { VizualizarHistoricoPage } from './vizualizar-historico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VizualizarHistoricoPageRoutingModule
  ],
  declarations: [VizualizarHistoricoPage]
})
export class VizualizarHistoricoPageModule {}
