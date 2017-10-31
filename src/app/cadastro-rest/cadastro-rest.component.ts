import { Component, OnInit } from '@angular/core';
import { Usuario } from './../models/Usuario';


import {UsuarioService} from './../services/Usuario.service'

@Component({
  selector: 'app-cadastro-rest',
  templateUrl: './cadastro-rest.component.html',
  styleUrls: ['./cadastro-rest.component.css']
})


export class CadastroRestComponent implements OnInit {

   usuario:Usuario = new Usuario();
  

 constructor(private usuarioService: UsuarioService) { }
 

  cadastrar(){
    this.usuario.tipo = 1;
    this.usuarioService.insert(this.usuario);
    
  }  

  ngOnInit() {
    this.usuario = new Usuario();
   
  }

}