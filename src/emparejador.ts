import { TipoMatriz} from './types';
import { Usuario } from './usuario';


export class Emparejador {
  matriz_entrenadores: number[][];
  matriz_atletas: number[][];

  constructor() {
    this.matriz_entrenadores = [];
    this.matriz_atletas = [];
  }

  ProcesarUsuario(usuario: Usuario, es_entrenador:boolean): void{
    const vector: number[] = [];

    vector.push(usuario.getid());
    vector.push(usuario.getnivelRendimiento());
    vector.push(usuario.getnivelCompromiso());
    vector.push(usuario.getmodalidadEntreno());
    vector.push(usuario.getpreferenciasContacto());
    
    if(es_entrenador)
      this.matriz_entrenadores.push(vector);
    else
     this.matriz_atletas.push(vector);
    }

  CalculateSimilarity(usuario: number[], matriz_a_comparar: TipoMatriz): number {
    let matriz;
    let id_elegido = usuario[0];

    if (matriz_a_comparar == TipoMatriz.ENTRENADORES)
      matriz = this.matriz_entrenadores;
    else
      matriz = this.matriz_atletas;

    let puntuaciones: number[][] = [];
    let distance;

    matriz.forEach((row) => {
      distance = this.EuclideanDistance(usuario, row);
      puntuaciones.push([row[0], distance]);
    });

    puntuaciones.sort((a, b) => a[1] - b[1]);
    id_elegido = puntuaciones[0][0];
    
    return id_elegido;
  }

  GetUsuario(id_elegido: number, matriz_a_comparar: TipoMatriz): number[] | undefined {
    let matriz: number[][];

    if (matriz_a_comparar == TipoMatriz.ENTRENADORES)
      matriz = this.matriz_entrenadores;
    else
      matriz = this.matriz_atletas;

    return matriz.find((row) => row[0] == id_elegido);
  }

  EuclideanDistance(vector1: number[], vector2: number[]): number {
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

  RealizarEmparejamiento(usuario: Usuario, es_entrenador:boolean): number {
    let id_usuario = usuario.getid();
    let vector_usuario: number[] | undefined;
    let tipoMatriz: TipoMatriz;

    if(es_entrenador)
      tipoMatriz = TipoMatriz.ENTRENADORES;  
    else
      tipoMatriz = TipoMatriz.ATLETAS;

    vector_usuario = this.GetUsuario(id_usuario, tipoMatriz);
    let id_devuelto = id_usuario;

    if(vector_usuario != undefined){
      if(!es_entrenador)
        id_devuelto = this.CalculateSimilarity(vector_usuario, TipoMatriz.ENTRENADORES);
      else
        id_devuelto = this.CalculateSimilarity(vector_usuario, TipoMatriz.ATLETAS);
    }

    return id_devuelto;
  }

}