import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerarRelatorioPageRoutingModule } from './gerar-relatorio-routing.module';

import { GerarRelatorioPage } from './gerar-relatorio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerarRelatorioPageRoutingModule
  ],
  declarations: [GerarRelatorioPage]
})
export class GerarRelatorioPageModule {}
