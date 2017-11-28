import { Restaurante } from './../models/Restaurante';
import { Injectable } from '@angular/core';
import { Reserva } from './../models/Reserva';
import { AutenticaService } from "./Autentica.service";

@Injectable()

export class ReservaService{

    reservas:Reserva[] = [];
    minhasReservas :Reserva[] = [];

    reserva1 : Reserva = new Reserva();
    reserva2 : Reserva = new Reserva();
    reserva3 : Reserva = new Reserva();

    restaurante : Restaurante = new Restaurante();

  constructor(private autenticaService : AutenticaService) {

    this.restaurante.nome = "kitnet";

    this.reserva1.nome = "bia";
     this.reserva1.data = "24/05/09"
      this.reserva1.hora = "14h"
    this.reserva1.idUser = 10;
    //this.reserva1.id= 98;
       this.reserva1.restaurante = this.restaurante;
       this.reserva1.status = "----";

  this.reserva2.nome = "van";
     this.reserva2.data = "04/05/09"
      this.reserva2.hora = "04h"
      this.reserva2.idUser = 11;
      //this.reserva2.id= 99;
       this.reserva2.restaurante = this.restaurante;
       this.reserva2.status = "----";


       this.reserva3.nome = "marquinhos";
     this.reserva3.data = "30/02/02"
      this.reserva3.hora = "23h"
       this.reserva3.idUser= 2;
       //this.reserva3.id = 100;
       this.reserva3.restaurante = this.restaurante;
       this.reserva3.status = "----";
      
    
    this.reservas.push(this.reserva1);
    this.reservas.push(this.reserva2);
    this.reservas.push(this.reserva3);
  }
  
 insert(reserva:Reserva){   
    this.reservas.push(reserva);
    this.myReserva();
  }

  myReserva() {

    for (let i = 0; i < this.reservas.length; i++) {
      if (this.reservas[i].idUser == this.autenticaService.userLogado.id) {
        this.minhasReservas.push(this.reservas[i]);
      }
    }
    	return this.minhasReservas;
  }

  
  
  //ajeitar isUser => id
	delete(reserva: Reserva) {
        let index = -1;
        for(let i = 0; i < this.reservas.length; i++) {
            if(this.reservas[i].id == reserva.id) {
                index = i;
                break;
            }
        }
        this.reservas.splice(index, 1);
        
    }
     
}


