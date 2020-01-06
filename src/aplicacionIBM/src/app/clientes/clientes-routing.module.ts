import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EjemploComponent } from './components/ejemplo/ejemplo.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent
  },
  {
    path: 'ejemplo',
    component: EjemploComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
