import { Restaurante } from './../models/Restaurante';
import { RestauranteService } from './../services/Restaurante.service';
import { Component, OnInit } from '@angular/core';
import { AutenticaService } from "../services/Autentica.service";

@Component({
  selector: 'app-inicial-res',
  templateUrl: './inicial-res.component.html',
  styleUrls: ['./inicial-res.component.css']
})
export class InicialResComponent implements OnInit {

  restaurante: Restaurante = new Restaurante();

  constructor(private restauranteService:RestauranteService, private autenticaService:AutenticaService) { }

  armazenarDados(){
    this.restaurante.idAdim = this.autenticaService.userLogado.id;    
    this.restauranteService.insert(this.restaurante);
    
  }  
  ngOnInit() {
     this.restaurante = new Restaurante();
  }

}
