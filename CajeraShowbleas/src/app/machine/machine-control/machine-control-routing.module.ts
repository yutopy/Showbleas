import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineControlPage } from './machine-control.page';

const routes: Routes = [
  {
    path: '',
    component: MachineControlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineControlPageRoutingModule {}
