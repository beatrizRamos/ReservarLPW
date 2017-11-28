import { Injectable } from '@angular/core';
import { Restaurante } from './../models/Restaurante';

@Injectable()
export class RestauranteService{

    restaurantes:Restaurante [] = [];
	ids: number []= [];
   controlador = 0;

   res2: Restaurante = new Restaurante();
   res3 : Restaurante = new Restaurante();

  
  constructor() {
this.res2.nome = "Bebelu";
this.res2.cidade = "Gus";
this.res2.endereco = "sao marcos";
this.res2.idAdim = 11;

this.res3.nome = "Kitkat";
this.res3.cidade = "Gus";
this.res3.endereco = "marcos";
this.res3.idAdim = 11;
   
   }

 insert(restaurante:Restaurante){
   /*
      //qual id?  
      for(var i = 0; i<= this.ids.length; i ++){
          if(this.controlador <= this.ids[i] ){
              this.controlador ++;
            }
          }
    this.ids.push (this.controlador);

    restaurante.id = this.controlador; */
    
    
  this.restaurantes.push(restaurante);
 alert(restaurante.nome);
    }

  listAll() {
		return this.restaurantes;
	}

 

	//update(id: number, aluno: Aluno) {
		//this.alunos[id] = aluno;
	//}
 
	//delete(id: number) {
		//this.restaurantes.splice(id, 1);
	//}

}