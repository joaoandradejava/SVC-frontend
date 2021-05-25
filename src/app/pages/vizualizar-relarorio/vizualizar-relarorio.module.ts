import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VizualizarRelarorioPageRoutingModule } from './vizualizar-relarorio-routing.module';

import { VizualizarRelarorioPage } from './vizualizar-relarorio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VizualizarRelarorioPageRoutingModule
  ],
  declarations: [VizualizarRelarorioPage]
})
export class VizualizarRelarorioPageModule {}
