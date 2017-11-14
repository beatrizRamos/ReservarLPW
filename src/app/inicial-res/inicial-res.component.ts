import { Restaurante } from './../models/Restaurante';
import { RestauranteService } from './../services/Restaurante.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicial-res',
  templateUrl: './inicial-res.component.html',
  styleUrls: ['./inicial-res.component.css']
})
export class InicialResComponent implements OnInit {

  restaurante: Restaurante = new Restaurante();

  constructor(private restauranteService:RestauranteService) { }

  armazenarDados(){
    this.restauranteService.insert(this.restaurante);
    
  }  
  ngOnInit() {
     this.restaurante = new Restaurante();
  }

}
