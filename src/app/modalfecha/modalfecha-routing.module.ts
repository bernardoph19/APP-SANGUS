import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalfechaPage } from './modalfecha.page';

const routes: Routes = [
  {
    path: '',
    component: ModalfechaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalfechaPageRoutingModule {}
