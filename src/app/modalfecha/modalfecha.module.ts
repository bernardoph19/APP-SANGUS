import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalfechaPageRoutingModule } from './modalfecha-routing.module';

import { ModalfechaPage } from './modalfecha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalfechaPageRoutingModule
  ],
  declarations: [ModalfechaPage]
})
export class ModalfechaPageModule {}
