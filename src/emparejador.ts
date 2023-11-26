import { TipoMatriz, OpcionFiltro} from './types';
import { Usuario } from './usuario';


export class Emparejador {
  matriz_entrenadores: { [key: number]: number[] };
  matriz_atletas: { [key: number]: number[] };


  constructor() {
    this.matriz_entrenadores = {};
    this.matriz_atletas = {};
  }

  ProcesarUsuario(usuario: Usuario, es_entrenador:boolean): void {
    const vector: number[] = [usuario.GetNivelRendimiento(), usuario.GetNivelCompromiso(),
    usuario.GetModalidadEntreno(), usuario.GetPreferenciasContacto()];

    if(es_entrenador)
      this.matriz_entrenadores[usuario.GetId()] = vector;
    else
      this.matriz_atletas[usuario.GetId()] = vector;
  }

  CalculateSimilarity(id: number, matriz_a_comparar: TipoMatriz, filtros:OpcionFiltro[]): number {
    let matriz;
    let id_elegido;
    let usuario: number[];

    if (matriz_a_comparar == TipoMatriz.ENTRENADORES){
      matriz = this.matriz_entrenadores;
      usuario = this.matriz_atletas[id];
    }
    else{
      matriz = this.matriz_atletas;
      usuario = this.matriz_entrenadores[id];
    }
    
    let indices_filtro: number[] = [];
    filtros.forEach((filtro) => {
      indices_filtro.push(filtro);
    });

    let puntuaciones: number[][] = [];

    Object.entries(matriz).forEach(([key, value]) => {
      let isEqual = indices_filtro.every((index) => value[index] === usuario[index]);
      if (isEqual) {
        let distance = this.EuclideanDistance(usuario, value);
        puntuaciones.push([Number(key), distance]);
      }
    });

    puntuaciones.sort((a, b) => a[1] - b[1]);
    id_elegido = puntuaciones[0][0] || id;
    
    return id_elegido;
  }

  GetUsuario(id_elegido: number, matriz_a_comparar: TipoMatriz): number[] | undefined {
    let matriz: { [key: number]: number[] };

    if (matriz_a_comparar == TipoMatriz.ENTRENADORES)
      matriz = this.matriz_entrenadores;
    else
      matriz = this.matriz_atletas;

    return matriz[id_elegido];
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

  RealizarEmparejamiento(usuario: Usuario, es_entrenador:boolean, filtros:OpcionFiltro[]): number {
    let id_usuario = usuario.GetId();
    let tipoMatriz: TipoMatriz;

    if(es_entrenador)
      tipoMatriz = TipoMatriz.ENTRENADORES;  
    else
      tipoMatriz = TipoMatriz.ATLETAS;

    let id_devuelto = id_usuario;

    if(id_usuario != undefined){
      if(!es_entrenador)
        id_devuelto = this.CalculateSimilarity(id_usuario, TipoMatriz.ENTRENADORES, filtros);
      else
        id_devuelto = this.CalculateSimilarity(id_usuario, TipoMatriz.ATLETAS, filtros);
    }

    return id_devuelto;
  }

}