import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-infotarjeta',
  templateUrl: './infotarjeta.component.html',
  styleUrls: ['./infotarjeta.component.scss']
})
export class InfotarjetaComponent implements OnInit {

  id;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
    });
  }

}
