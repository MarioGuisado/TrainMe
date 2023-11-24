import { Entrenador } from './entrenador';
import { Atleta } from './atleta';
import { TipoMatriz} from './types';


export class Emparejador {
  matriz_entrenadores: number[][];
  matriz_atletas: number[][];

  entrenadores: Entrenador[];
  atletas: Atleta[];

  constructor() {
    this.matriz_entrenadores = [];
    this.matriz_atletas = [];
    this.entrenadores = [];
    this.atletas = [];
  }

  procesarUsuario(usuario: Entrenador | Atleta): void{
    const vector: number[] = [];

    vector.push(usuario.getid());


    vector.push(usuario.getnivelRendimiento().values().next().value);
    vector.push(usuario.getnivelCompromiso().values().next().value);
    vector.push(usuario.getmodalidadEntreno().values().next().value);
    vector.push(usuario.getpreferenciasContacto().values().next().value);
    
    if(usuario instanceof Entrenador)
      this.matriz_entrenadores.push(vector);
    else
     this.matriz_atletas.push(vector);
    }

  calculateSimilarity(usuario: number[], matriz_a_comparar: TipoMatriz): number {
    let minDistance = Infinity;
    let distance;
    let matriz;
    let id_elegido = -1;

    if (matriz_a_comparar == TipoMatriz.ENTRENADORES)
      matriz = this.matriz_entrenadores;
    else
      matriz = this.matriz_atletas;

    matriz.forEach((row) => {
      distance = this.euclideanDistance(usuario, row);
      if (distance < minDistance) {
        minDistance = distance;
        id_elegido = row[0];
      }
    });
    
    return id_elegido;
  }

  getUsuario(id_elegido: number, matriz_a_comparar: TipoMatriz): number[] | undefined {
    let matriz: number[][];

    if (matriz_a_comparar == TipoMatriz.ENTRENADORES)
      matriz = this.matriz_entrenadores;
    else
      matriz = this.matriz_atletas;

    return matriz.find((row) => row[0] == id_elegido);
  }

  euclideanDistance(vector1: number[], vector2: number[]): number {
    if (vector1.length !== vector2.length) {
        throw new Error('Los vectores deben tener la misma longitud');
    }

    let sum = 0;
    vector1.forEach((value, i) => {
      if (i > 0) {
        let diff = value - vector2[i];
        sum += diff * diff;
      }
    });

    return Math.sqrt(sum);  
  }

  realizarEmparejamiento(usuario: Entrenador | Atleta): number {
    let id_usuario = usuario.getid();
    let vector_usuario: number[] | undefined;
    let tipoMatriz: TipoMatriz;

    if(usuario instanceof Entrenador)
      tipoMatriz = TipoMatriz.ENTRENADORES;  
    else
      tipoMatriz = TipoMatriz.ATLETAS;

    vector_usuario = this.getUsuario(id_usuario, tipoMatriz);
    let id_devuelto = -1

    if(vector_usuario != undefined){
      if(tipoMatriz == TipoMatriz.ATLETAS)
        id_devuelto = this.calculateSimilarity(vector_usuario, TipoMatriz.ENTRENADORES);
      else
        id_devuelto = this.calculateSimilarity(vector_usuario, TipoMatriz.ATLETAS);
    }

    return id_devuelto;
  }

}