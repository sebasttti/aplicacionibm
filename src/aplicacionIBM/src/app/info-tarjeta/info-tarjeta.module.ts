import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoTarjetaRoutingModule } from './info-tarjeta-routing.module';
import { InfotarjetaComponent } from './components/infotarjeta/infotarjeta.component';


@NgModule({
  declarations: [InfotarjetaComponent],
  imports: [
    CommonModule,
    InfoTarjetaRoutingModule
  ]
})
export class InfoTarjetaModule { }
