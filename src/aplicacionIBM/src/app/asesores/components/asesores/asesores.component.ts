import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/core/services/main-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-asesores',
  templateUrl: './asesores.component.html',
  styleUrls: ['./asesores.component.scss']
})
export class AsesoresComponent implements OnInit {
  asesores;
  nAsesores = [];
  formAsesores: FormGroup;
  auxCrearAsesor = false;
  auxModificarAsesor = false;
  auxId;
  tipoAsesor;

  constructor(
    private mainServiceService: MainServiceService,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit() {
    Promise.all([this.fetchAsesores(), this.fetchTipoAsesor()]).then(
      response => {
        // console.log(response);

        const gotAsesores: any = response[0];
        const gotTipoAsesor = response[1];
        const resultAsesores = [];

        for (const iterator of gotAsesores) {
          // separo los elementos de la informacion
          const actualAsesor: { [k: string]: any } = {};
          const jsonValue = JSON.parse(iterator.info_asesor);

          actualAsesor.id = iterator.id_asesor;
          actualAsesor.nombre = jsonValue.nombre;
          actualAsesor.tipo = this.getTipoAsesor(jsonValue.tipo, gotTipoAsesor);

          // faltan las tarjetas
          resultAsesores.push(actualAsesor);
        }
        this.tipoAsesor = gotTipoAsesor;
        this.nAsesores = resultAsesores;
        this.asesores = gotAsesores;
        // console.log(this.asesores);
      }
    );
  }

  getTipoAsesor(id, arrayAsesor) {
    const aux = arrayAsesor.find(element => element.id_tipo === id);
    return aux.desc_tipo;
  }

  fetchAsesores() {
    return new Promise(resolve => {
      this.mainServiceService.getAllInfo('asesor').subscribe(response => {
        // console.log(response);
        resolve(response);
      });
    });
  }

  fetchTipoAsesor() {
    return new Promise(resolve => {
      this.mainServiceService.getAllInfo('tipo_asesor').subscribe(response => {
        // console.log(response);
        resolve(response);
      });
    });
  }

  addAsesor() {
    this.auxCrearAsesor = true;
    this.auxModificarAsesor = false;
  }

  buildForm() {
    this.formAsesores = this.formBuilder.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required]
    });
  }

  createAsesorButton() {
    if (this.formAsesores.valid) {
      const dataAsesores = JSON.stringify(this.formAsesores.value);
      this.mainServiceService
        .sendInfo('asesor', 'info_asesor', dataAsesores)
        .subscribe(response => {
          const auxResponse: { [k: string]: any } = response;

          console.log(auxResponse);
          if (auxResponse.exito) {
            window.location.reload();
          }
        });
    } else {
      console.log(
        'Por favor revisa la información del formulario antes de continuar'
      );
      return;
    }
  }

  modifyAsesorButton(id) {
    let getAsesor = this.asesores.find(asesor => asesor.id_asesor === id);
    this.auxId = getAsesor.id_asesor;

    getAsesor = JSON.parse(getAsesor.info_asesor);

    this.formAsesores.patchValue(getAsesor);

    console.log(getAsesor, this.auxId);

    this.auxCrearAsesor = false;
    this.auxModificarAsesor = true;
  }

  modifyAsesorButtonSend() {
    if (this.formAsesores.valid) {

      const dataToSend = JSON.stringify(this.formAsesores.value);

      this.mainServiceService.updateInfo('asesor', this.auxId, dataToSend).
      subscribe(response => {
        console.log(response);
        window.location.reload();
      });
    } else {
      alert('Por favor revisa la información antes de continuar');
    }
  }
}
