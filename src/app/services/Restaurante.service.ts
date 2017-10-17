import { Injectable } from '@angular/core';
import { Restaurante } from './../models/Restaurante';

@Injectable()
export class RestauranteService{

    restaurantes:Restaurante [] = [];
	ids: number []= [];
   controlador = 0;

restaurante1 : Restaurante = new Restaurante();
   res2: Restaurante = new Restaurante();
   res3 : Restaurante = new Restaurante();

    restaurante : Restaurante = new Restaurante();

    achou : Restaurante [] =[];

  constructor() {

    this.restaurante1.nome = "kitnet"; 
    this.res2.nome ="vaca";
    this.res3.nome ="toca";

     this.restaurante1.id = 22; 
    this.res2.id = 23;
    this.res3.id = 24;

    this.restaurantes.push(this.restaurante1);
    this.restaurantes.push(this.res2);
    this.restaurantes.push(this.res3);
   }

 insert(restaurante:Restaurante){
      //qual id?  
      for(var i = 0; i<= this.ids.length; i ++){
          if(this.controlador <= this.ids[i] ){
              this.controlador ++;
            }
          }
    this.ids.push (this.controlador);

    restaurante.id = this.controlador; 
    
    alert(restaurante.nome);
  this.restaurantes.push(restaurante);
 
    }

  listAll() {
		return this.restaurantes;
	}

  search(rest :Restaurante){
   for(let i = 0; i < this.restaurantes.length; i++) {
  if(this.restaurantes[i].nome == rest.nome ) {
   this.achou.push(this.restaurantes[i]);
   alert(this.restaurantes[i]); 
 }
}

  }

retorno() {
		return this.achou;
	}

 

	//update(id: number, aluno: Aluno) {
		//this.alunos[id] = aluno;
	//}
 
	//delete(id: number) {
		//this.restaurantes.splice(id, 1);
	//}

}