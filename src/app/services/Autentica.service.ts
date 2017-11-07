
import { Injectable } from '@angular/core';

import { UsuarioService } from './../services/Usuario.service'
import { Usuario } from './../models/Usuario';
import { SelectItem } from 'primeng/components/common/api';
import { Router } from "@angular/router";

@Injectable()

export class AutenticaService {

  private userAutenticado: boolean = false;
  userLogado: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, private router: Router) { }


  logar(user: Usuario) {
    for (let i = 0; i < this.usuarioService.usuarios.length; i++) {
      if (this.usuarioService.usuarios[i].nome == user.nome && this.usuarioService.usuarios[i].senha == user.senha) {
        this.userLogado = user;
        this.userAutenticado = true;
      }
    }
    return this.userAutenticado;
  }


   redirecionarTelaInicial(){

    if(this.userLogado.tipo == 0){
      this.router.navigate(['/pesquisa']);
    }

    else if(this.userLogado.tipo == 1){
     this.router.navigate(['/reservas']);
    }
  }


}