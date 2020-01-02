import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesoresRoutingModule } from './asesores-routing.module';
import { AsesoresComponent } from './components/asesores/asesores.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [AsesoresComponent],
  imports: [
    CommonModule,
    AsesoresRoutingModule,
    MaterialModule
  ]
})
export class AsesoresModule { }
