import { Component, OnInit } from '@angular/core';
import { Usuario } from './../models/Usuario';


import {UsuarioService} from './../services/Usuario.service'


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})


export class CadastrarComponent implements OnInit {

   usuario:Usuario = new Usuario();
  

 constructor(private usuarioService: UsuarioService) { }
 

  armazenarDados(){
    this.usuario.tipo = 0;
    this.usuarioService.insert(this.usuario);
    
  }  

  ngOnInit() {
    this.usuario = new Usuario();
   
  }

}