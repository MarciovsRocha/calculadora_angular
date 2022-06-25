import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  // operações matemáticas 
  // definidas em constantes
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly MULTIPLICACAO: string = '*';
  static readonly DIVISAO: string = '/';

  constructor() { }

  calcular(n1: number, n2: number, op: string): number{
    let resultado: number;
    switch(op){
      case CalculadoraService.SOMA:
        resultado = n1+n2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = n1-n2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = n1 - n2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = n1 / n2;
        break;
      default:
        resultado = 0;
        break;
    }
    return resultado;
  }

}
