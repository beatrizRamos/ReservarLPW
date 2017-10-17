import { Component, OnInit } from '@angular/core';
import { Restaurante } from './../models/Restaurante';
import {RestauranteService} from './../services/Restaurante.service'

@Component({
  selector: 'app-cadastro-rest',
  templateUrl: './cadastro-rest.component.html',
  styleUrls: ['./cadastro-rest.component.css']
})

export class CadastroRestComponent implements OnInit {

restaurante: Restaurante = new Restaurante();

  constructor(private restauranteservice: RestauranteService) { }

armazenarRestaurante(){
    this.restauranteservice.insert(this.restaurante);
  }

  ngOnInit() {
     this.restaurante = new Restaurante();
  }

}
