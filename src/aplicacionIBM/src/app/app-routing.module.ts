import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { InfoTarjetaCComponent } from './info-tarjeta-c/info-tarjeta-c.component';


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
        loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)
      },
      {
        path: 'asesores',
        loadChildren: () => import('./asesores/asesores.module').then(m => m.AsesoresModule)
      },
      {
        path: 'infotarjeta/:id',
        component: InfoTarjetaCComponent
      },

    ]
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
