import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarVacinaPageRoutingModule } from './agendar-vacina-routing.module';

import { AgendarVacinaPage } from './agendar-vacina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarVacinaPageRoutingModule
  ],
  declarations: [AgendarVacinaPage]
})
export class AgendarVacinaPageModule {}
