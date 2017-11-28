import { MenuItem } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';
import { Restaurante } from './../models/Restaurante';
import {RestauranteService} from './../services/Restaurante.service'
import { Router } from "@angular/router";
@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  restaurante: Restaurante = new Restaurante();

  restaurantes: Restaurante[]=[];

  constructor(private restauranteService: RestauranteService) { 
    //this.restaurantes = this.restauranteService.retorno(); 
  }

   items: MenuItem[];


    ngOnInit() {
        this.items = [
                    {label: 'New', icon: 'fa-plus', routerLink :'/tela'},
                    {label: 'Open', icon: 'fa-download' , routerLink :'/reservas'}
                ];
    }


}
