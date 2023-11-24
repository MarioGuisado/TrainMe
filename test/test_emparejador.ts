import { expect } from 'chai';
import { Entrenador } from '../src/entrenador';
import { Atleta } from '../src/atleta';
import { Emparejador } from '../src/emparejador';
import { CategoriasPeso, Rendimiento } from '../src/types';

let fecha = new Date(2001, 11, 28);
const atleta1 = new Atleta(
  fecha,
  new Map<string, number>([['ALTO', 1]]),
  new Map<string, number>([['MEDIO', 0.5]]),
  new Map<string, number>([['ONLINE', 1]]),
  new Map<string, number>([['TELEGRAM', 0.5]]),
  CategoriasPeso.MENOS_66 as any,
  1
);

const atleta2 = new Atleta(
    fecha,
    new Map<string, number>([['ALTO', 1]]),
    new Map<string, number>([['ALTO', 1]]),
    new Map<string, number>([['ONLINE', 1]]),
    new Map<string, number>([['TELEGRAM', 0.5]]),
    CategoriasPeso.MENOS_66 as any,
    2
  );

const entrenador1 = new Entrenador(
    [20, 30],
    new Map<string, number>([['ALTO', 1]]),
    new Map<string, number>([['ALTO', 1]]),
    new Map<string, number>([['ONLINE', 1]]),
    new Map<string, number>([['TELEGRAM', 0.5]]),
    CategoriasPeso.MENOS_66 as any,
    3
);

const entrenador2 = new Entrenador(
  [20, 30],
  new Map<string, number>([['ALTO', 1]]),
  new Map<string, number>([['MEDIO', 0.5]]),
  new Map<string, number>([['ONLINE', 1]]),
  new Map<string, number>([['TELEGRAM', 0.5]]),
  CategoriasPeso.MENOS_66 as any,
  4
);

const emparejador = new Emparejador();
emparejador.procesarUsuario(atleta1);
emparejador.procesarUsuario(atleta2);
emparejador.procesarUsuario(entrenador1);
emparejador.procesarUsuario(entrenador2);

describe('Emparejador', function() {
    describe('Funciones', function() {
        it('Procesar Usuario', function() {
            const nuevo_emparejador = new Emparejador();
            nuevo_emparejador.procesarUsuario(atleta1);
            let matriz:number[][] = [[1, 1, 0.5, 1, 0.5]];
            expect(nuevo_emparejador.matriz_atletas).to.deep.equal(matriz);
        });

        it('Sugerir ID de entrenador para un atleta', function() {
            let id_esperado = 4;
            expect(emparejador.realizarEmparejamiento(atleta1)).to.equal(id_esperado);
        });

        it('Sugerir ID de atleta para un entrenador', function() {
            let id_esperado = 2;
            expect(emparejador.realizarEmparejamiento(entrenador1)).to.equal(id_esperado);
        });

    });
});

