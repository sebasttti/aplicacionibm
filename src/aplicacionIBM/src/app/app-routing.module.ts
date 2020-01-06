import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { InfoTarjetaCComponent } from './info-tarjeta-c/info-tarjeta-c.component';
import { AgregarClienteComponent } from './clientes/components/agregar-cliente/agregar-cliente.component';
import { ModificarClienteComponent } from './clientes/components/modificar-cliente/modificar-cliente.component';
import { EjemploComponent } from './clientes/components/ejemplo/ejemplo.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'clientes',
        // loadChildren: './clientes/clientes.module#ClientesModule'
        loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)
      },
      {
        path: 'asesores',
        loadChildren: () => import('./asesores/asesores.module').then(m => m.AsesoresModule)
      },
      {
        path: 'agregarcliente',
        component: AgregarClienteComponent
      },
      {
        path: 'infotarjeta/:id',
        component: InfoTarjetaCComponent
      }
    ]
  },
  {
    path: 'ejemplo/:id',
    component: EjemploComponent
  },
  {
    path: '**',
    // component: EjemploComponent
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
