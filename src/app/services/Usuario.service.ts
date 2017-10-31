import { Injectable } from '@angular/core';
import { Usuario } from './../models/Usuario';

@Injectable()

export class UsuarioService{
    
        usuarios:Usuario[] = [];
 ids: number []= [];
   controlador = 0;
  
    user1 : Usuario = new Usuario();
    user2 : Usuario = new Usuario();


  constructor() {


    this.user1.nome = "bia";
        this.user1.senha = "123"
       this.user1.id = 10;
       this.user1.tipo = 0;
       
    this.user2.nome = "van";
      this.user2.senha = "321"
       this.user2.id = 11;
       this.user2.tipo = 1;
    
    this.usuarios.push(this.user1);
    this.usuarios.push(this.user2);
    
  }
    insert(usuario:Usuario){
      //qual id?  
      for(var i = 0; i<= this.ids.length; i ++){
          if(this.controlador <= this.ids[i] ){
              this.controlador ++;
            }
          }
    this.ids.push (this.controlador);

    usuario.id = this.controlador; 
    
    alert(usuario.id);
    this.usuarios.push(usuario);
    }

  listAll() {
    //return this.usuarios;
  }
 
}