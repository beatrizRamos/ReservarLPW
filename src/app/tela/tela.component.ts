import { MenuItem } from 'primeng/primeng';
import { Restaurante } from './../models/Restaurante';
import { Reserva } from './../models/Reserva';
import {Message} from 'primeng/components/common/api';
import { Component, OnInit } from '@angular/core';
import {ReservaService} from './../services/Reserva.service'
import { AutenticaService } from "../services/Autentica.service";
import {DropdownModule} from 'primeng/primeng';


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
  constructor(private reservaService: ReservaService, private autenticaService: AutenticaService){    
    //this.reservaService = new ReservaService ();  
}

   showSuccess() {
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Sucesso', detail:'Reserva realizada '});
    }

  armazenaDados(){
    this.showSuccess();
    alert(this.autenticaService.userLogado.tipo);
    this.reserva.idUser = this.autenticaService.userLogado.id;
    alert(this.reserva.idUser);
    this.reservaService.insert(this.reserva);
    
    
  }
  items: MenuItem[];

  ngOnInit() {
  
        this.items = [
                    {label: 'Nova Reserva ', icon: 'fa-plus', routerLink :'/tela'},
                    {label: 'Listar', icon: 'fa-download' , routerLink :'/reservas'}
                ];
  }

}









 


