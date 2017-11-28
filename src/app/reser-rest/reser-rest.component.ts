import { Component, OnInit } from '@angular/core';
import { Restaurante } from "../models/Restaurante";
import { RestauranteService } from "../services/Restaurante.service";

@Component({
  selector: 'app-reser-rest',
  templateUrl: './reser-rest.component.html',
  styleUrls: ['./reser-rest.component.css']
})
export class ReserRestComponent implements OnInit {
 restaurantes : Restaurante [];


  constructor(private restauranteService: RestauranteService) { 
    this.restaurantes = this.restauranteService.listAll();
  }

  ngOnInit() {
  }

}
