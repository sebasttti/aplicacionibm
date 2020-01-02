import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/core/services/main-service.service';

@Component({
  selector: 'app-asesores',
  templateUrl: './asesores.component.html',
  styleUrls: ['./asesores.component.scss']
})
export class AsesoresComponent implements OnInit {

  nAsesores = [];

  constructor(
    private mainServiceService: MainServiceService
  ) { }

  ngOnInit() {

    Promise.all([this.fetchAsesores(), this.fetchTipoAsesor()])
    .then((response) => {
      // console.log(response);

      const gotAsesores: any = response[0];
      const gotTipoAsesor = response[1];
      const resultAsesores = [];

      for (const iterator of gotAsesores) {

        // separo los elementos de la informacion
        const actualAsesor: {[k: string]: any} = {};
        const jsonValue = JSON.parse(iterator.info_asesor);


        actualAsesor.id = iterator.id_cliente;
        actualAsesor.nombre = jsonValue.nombre;
        actualAsesor.tipo = this.getTipoAsesor(jsonValue.tipo,gotTipoAsesor);
        
        // faltan las tarjetas
        resultAsesores.push(actualAsesor);
      }

      this.nAsesores = resultAsesores;

    });
  }

  getTipoAsesor(id, arrayAsesor){

    
    const aux = arrayAsesor.find((element) => element.id_tipo === id );
    console.log(aux);
    return aux.desc_tipo;

  }

  fetchAsesores() {

    return new Promise((resolve) => {
      this.mainServiceService.getAllInfo('asesor')
      .subscribe(response => {
        // console.log(response);
        resolve(response);
      });
    });

  }

  fetchTipoAsesor() {

    return new Promise((resolve) => {
      this.mainServiceService.getAllInfo('tipo_asesor')
      .subscribe(response => {
        // console.log(response);
        resolve(response);
      });
    });

  }

}
