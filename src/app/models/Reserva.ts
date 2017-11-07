import { Restaurante } from './restaurante';

export class Reserva{
    nome:String;
    data:String;
    hora: String;
    restaurante:Restaurante;
    numeroMesa: number;
    userId: number;
    status:String;
}