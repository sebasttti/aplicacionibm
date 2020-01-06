import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainServiceService } from 'src/app/core/services/main-service.service';
import { MyValidators } from 'src/app/utils/myValidators';


@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.scss']
})
export class AgregarClienteComponent implements OnInit {

  formClientes: FormGroup;
  formTarjeta: FormGroup;
  tipoTarjeta = [];
  tarjetas = [];
  auxVolver = false;

  constructor(
    private formBuilder: FormBuilder,
    private mainServiceService: MainServiceService
  ) {
    this.buildFormClientes();
   }

  ngOnInit() {

    this.traerTipoTarjeta().then((response: any) => {
      this.tipoTarjeta = response;
    });
  }

  private buildFormClientes() {
    this.formClientes = this.formBuilder.group({

      nombre: ['', [Validators.maxLength(50), Validators.required] ],
      ciudad: ['', [Validators.maxLength(100), Validators.required] ],
      telefono: ['', [Validators.maxLength(30), Validators.required, MyValidators.isNumber] ],
      direccion: ['', [Validators.maxLength(20), Validators.required] ]
    });

    this.formTarjeta = this.formBuilder.group({

      numero: ['', [Validators.maxLength(30), Validators.required] ],
      tipo: ['', [Validators.required] ]
    });

  }

  agregarTarjeta() {

    const actualTarjetas = this.formTarjeta.value;

    if (actualTarjetas.numero.length > 19) {
      actualTarjetas.numero = actualTarjetas.numero.substring(0, 19);
    }

    if (this.formTarjeta.valid) {

        const newNumber = this.formTarjeta.value.numero.replace(/ /g, '');
        this.formTarjeta.value.numero = newNumber;
        this.tarjetas.push(actualTarjetas);

        this.formTarjeta.reset();
    }
  }

  enviarInformacion() {

    if ( this.formClientes.valid === false || this.tarjetas.length < 1) {
      alert('Por favor verifica la información antes de continuar');
      return;
    }

    // console.log(this.formClientes, this.tarjetas);
    const dataCliente = JSON.stringify(this.formClientes.value);

    const dataTarjeta = JSON.stringify(this.tarjetas);

    this.mainServiceService.agregarCliente('cliente', 'info_cliente', dataCliente)
    .subscribe(response => {

      const thisResponse: any = response;

      if (thisResponse.id_cliente) {

          // agrego la informacion de las tarjetas
          this.mainServiceService.agregarTarjeta(thisResponse.id_cliente, dataTarjeta).
          subscribe(response2 => {

            const thisResponse2: any = response2;

            console.log(thisResponse2);

            if (thisResponse2.exito) {
                alert('Información registrada con éxito');
                this.auxVolver = true;
            }

          });

      }


    });


  }

  changeValue( $event ) {

    const actualValue = $event.target.value;

    if (actualValue === '') {
      return;
    } else {
      let newValue = actualValue
      .replace(/\s/g, '')
      .replace(/\D/g, '')
      .replace(/([0-9]{4})/g, '$1 ')
      .trim();

      // ahora vericio que no tenga mas de 19 caraceres
      if (newValue.length > 19) {
        newValue = newValue.substring(0, 19);
      }

      $event.target.value = '';
      $event.target.value = newValue;
    }
  }


  traerTipoTarjeta() {

    return new Promise((resolve) => {
      this.mainServiceService.getAllInfo('tipo_tarjeta')
      .subscribe(response => {
        // console.log(response);
        resolve(response);
      });
    });

  }

  mostrarTipoTarjeta(id) {
    return this.tipoTarjeta.find((tipo) => tipo.id_tipo_tarjeta === id).desc_tipo_tarjeta;
  }

}
