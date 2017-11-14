import { Restaurante } from './restaurante';

export class Reserva{
    nome:String;
    data:String;
    hora: String;
    restaurante:Restaurante;
    idUser: number;
    id: number;
    status:String;
}