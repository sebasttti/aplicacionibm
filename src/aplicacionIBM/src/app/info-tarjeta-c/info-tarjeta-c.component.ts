import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MainServiceService } from '../core/services/main-service.service';

@Component({
  selector: 'app-info-tarjeta-c',
  templateUrl: './info-tarjeta-c.component.html',
  styleUrls: ['./info-tarjeta-c.component.scss']
})
export class InfoTarjetaCComponent implements OnInit {

  id;
  nConsumos = [];
  infoTarjeta: {[k: string]: any} = {};
  auxTarjeta = false;

  constructor(
    private mainServiceService: MainServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;


      Promise.all([this.traerInfo(this.id, 'consumo'), this.traerInfo(this.id, 'tarjeta'), this.getAllInfo('tipo_tarjeta')])
      .then((response) => {

        const consumos: any = response[0];
        const infoTarjeta = response[1];
        const tipoTarjeta: any = response[2];

        console.log(consumos, infoTarjeta, tipoTarjeta);

        // me voy a encargar primero de mostrarl a info de las tarjetas
        const auxTarjeta = JSON.parse(infoTarjeta[0].info_tarjeta);

        this.infoTarjeta.numero = auxTarjeta.numero;

        const descTarjeta = tipoTarjeta.filter((element) => element.id_tipo_tarjeta === auxTarjeta.tipo)

        this.infoTarjeta.tipo = descTarjeta[0].desc_tipo_tarjeta;

        console.log(this.infoTarjeta);

        this.auxTarjeta = true;

        // ahora hago la otra parte
        for (const iterator of consumos) {

          const actualCons = JSON.parse(iterator.info_consumo);

          this.nConsumos.push(actualCons);

        }

      });




    });

  }

  traerInfo(id, table) {

    return new Promise((resolve) => {

      this.mainServiceService.getInfo(id, table)
      .subscribe(response => {
        // console.log(response);
        resolve(response);
      });
    });
  }

  getAllInfo(table) {

    return new Promise((resolve) => {
      this.mainServiceService.getAllInfo(table)
      .subscribe(response => {
        // console.log(response);
        resolve(response);
      });
    });

  }


}
