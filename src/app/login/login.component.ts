import { AutenticaService } from './../services/Autentica.service';
import { UsuarioService } from './../services/Usuario.service';
import { Usuario } from './../models/Usuario';
import { Reserva } from './../models/Reserva';
import { Component, OnInit } from '@angular/core';
import { Restaurante } from './../models/Restaurante';

import { SelectItem } from 'primeng/components/common/api';
import { Message } from 'primeng/components/common/api';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  msgs: Message[] = [];

  constructor(private autenticaService: AutenticaService, private router: Router) { }

  showError() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'ERRO', detail: 'user ou senha incorretos' });
  }


  ngOnInit() {
  }

  fazerlogin() {
    let ok: boolean = false;
    ok = this.autenticaService.logar(this.usuario);
    if (ok == true) {
      this.router.navigate(['/pesquisa']);
    }
    else if (ok == false) {
      this.showError()
    }

  }


}

