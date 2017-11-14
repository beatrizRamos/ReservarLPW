import { AutenticaService } from './../services/Autentica.service';
import { MenuItem } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';
import { Restaurante } from './../models/Restaurante';
import { Reserva } from './../models/Reserva';
import { ReservaService } from './../services/Reserva.service';
import { Router } from "@angular/router";




@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  displayDialog: boolean;

  reserva: Reserva = new Reserva();

  reservaselect: Reserva;

  newReserv: boolean;

  reservas: Reserva[] = [];

  constructor(private reservaService: ReservaService, private router: Router, private autenticaService: AutenticaService) {

  }

  items: MenuItem[];

  ngOnInit() {
    this.reservas = this.reservaService.listAll();

    this.items = [
      { label: 'Nova Reserva', icon: 'fa-plus', routerLink: '/tela' },
      { label: 'Listar', icon: 'fa-download', routerLink: '/reservas' }
    ];
  }

  save() {
    let reservas = [...this.reservas];
    if (this.newReserv)
      reservas.push(this.reserva);
    else
      reservas[this.findSelectedReservaIndex()] = this.reserva;
    this.reservas = reservas;
    this.reserva = null;
    this.displayDialog = false;
    this.reservaService.reservas = this.reservas;

  }

  delete() {
    let index = this.findSelectedReservaIndex();
    this.reservas = this.reservas.filter((val, i) => i != index);
    this.reserva = null;
    this.displayDialog = false;
    this.reservaService.reservas = this.reservas;
  }

  findSelectedReservaIndex(): number {
    return this.reservas.indexOf(this.reservaselect);
  }

  onRowSelect(event) {
    this.newReserv = false;
    this.reserva = this.cloneReserva(event.data);
    this.displayDialog = true;
  }

  cloneReserva(c: Reserva): Reserva {
    let reserva = new Reserva();
    for (let prop in c) {
      reserva[prop] = c[prop];
    }
    this.reservaService.reservas = this.reservas;
    return reserva;
  }
}
