import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/core/services/main-service.service';

// ====================================================



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes = [];
  tarjetas = [];
  nClientes = [];

  constructor(
    private mainServiceService: MainServiceService
  ) {
    this.fetchClientes();
   }

  ngOnInit() {

    Promise.all([this.fetchClientes(), this.fetchTarjetas()])
    .then((response) => {
      // console.log(response);

      const gotClientes: any = response[0];
      const gotTarjetas = response[1];
      const resultClientes = [];

      for (const iterator of gotClientes) {
        // separo los elementos de la informacion
        const actualCliente: {[k: string]: any} = {};
        const jsonValue = JSON.parse(iterator.info_cliente);

        actualCliente.id = iterator.id_cliente;
        actualCliente.nombre = jsonValue.nombre;
        actualCliente.direccion = jsonValue.direccion;
        actualCliente.ciudad = jsonValue.ciudad;
        actualCliente.telefono = jsonValue.telefono;
        actualCliente.tarjetas = this.assignTarjetas(iterator.id_cliente, gotTarjetas );

        // faltan las tarjetas
        resultClientes.push(actualCliente);
      }

      this.nClientes = resultClientes;

    });
  }

  fetchClientes() {

    return new Promise((resolve) => {
      this.mainServiceService.getAllInfo('cliente')
      .subscribe(response => {
        // console.log(response);
        resolve(response);
      });
    });

  }

  fetchTarjetas() {

    return new Promise((resolve) => {
      this.mainServiceService.getAllInfo('tarjeta')
      .subscribe(response => {
        // console.log(response);
        resolve(response);
      });
    });

  }

  assignTarjetas(id, array) {
    const newResult = array.filter( (element) => element.id_cliente_tarjeta === id );
    const deliveredResult = [];

    for (const iterator of newResult) {
      const actualObj: {[k: string]: any} = {};

      const auxJson = JSON.parse(iterator.info_tarjeta);

      actualObj.id = iterator.id_tarjeta;
      actualObj.numero = auxJson.numero;

      deliveredResult.push(actualObj);
    }

    return deliveredResult;
  }



}
