import { MenuItem } from 'primeng/primeng';
import { Restaurante } from './../models/Restaurante';
import { Reserva } from './../models/Reserva';
import {Message} from 'primeng/components/common/api';
import { Component, OnInit } from '@angular/core';
import {ReservaService} from './../services/Reserva.service'
import { AutenticaService } from "../services/Autentica.service";


@Component({
  selector: 'app-tela',
  templateUrl: './tela.component.html',
  styleUrls: ['./tela.component.css']
})

export class TelaComponent implements OnInit {

  //reservaService: ReservaService;
  reserva:Reserva = new Reserva();
  restaurante: Restaurante  = new Restaurante();
 msgs: Message[] = [];
  constructor(private reservaService: ReservaService, private autenticaService:AutenticaService){    
    //this.reservaService = new ReservaService ();  
}

   showSuccess() {
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Sucesso', detail:'Reserva realizada '});
    }

  armazenaDados(){
    this.showSuccess();
    this.reserva.userId = this.autenticaService.userLogado.id;
    this.reservaService.insert(this.reserva);
    
    
  }
  items: MenuItem[];

  ngOnInit() {
  
        this.items = [
                    {label: 'New', icon: 'fa-plus', routerLink :'/tela'},
                    {label: 'Open', icon: 'fa-download' , routerLink :'/reservas'}
                ];
  }

}









 


