import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './components/clientes/clientes.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EjemploComponent } from './components/ejemplo/ejemplo.component';

@NgModule({
  declarations: [ClientesComponent, EjemploComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClientesModule { }
