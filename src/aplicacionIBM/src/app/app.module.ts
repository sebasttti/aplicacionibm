import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { CoreModule } from './core/core.module';
import { ClientesModule } from './clientes/clientes.module';
import { AsesoresModule } from './asesores/asesores.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { InfoTarjetaModule } from './info-tarjeta/info-tarjeta.module';
import { InfoTarjetaCComponent } from './info-tarjeta-c/info-tarjeta-c.component';
import { AgregarClienteComponent } from './clientes/components/agregar-cliente/agregar-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { ModificarClienteComponent } from './clientes/components/modificar-cliente/modificar-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    EjemploComponent,
    AgregarClienteComponent,
    InfoTarjetaCComponent,
    ModificarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    ClientesModule,
    AsesoresModule,
    InfoTarjetaModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
