
import { Injectable } from '@angular/core';

import {UsuarioService} from './../services/Usuario.service'
import { Usuario } from './../models/Usuario';
import {SelectItem} from 'primeng/components/common/api';


@Injectable()

export class AutenticaService{

private userAutenticado: boolean = false;
  userLogado: Usuario = new Usuario();
 

  constructor(private usuarioService: UsuarioService) { }


logar(user:Usuario){
   for(let i = 0; i < this.usuarioService.usuarios.length; i++) {
  if(this.usuarioService.usuarios[i].nome == user.nome && this.usuarioService.usuarios[i].senha == user.senha) {
this.userAutenticado = true;
this.userLogado = this.usuarioService.usuarios[i];
 }
}
alert(this.userLogado.id);
return this.userAutenticado; 
}
}