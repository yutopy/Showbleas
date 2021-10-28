import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineControlPageRoutingModule } from './machine-control-routing.module';

import { MachineControlPage } from './machine-control.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineControlPageRoutingModule
  ],
  declarations: [MachineControlPage]
})
export class MachineControlPageModule {}
