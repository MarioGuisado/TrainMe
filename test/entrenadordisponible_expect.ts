import { expect } from 'chai';
import { EntrenadorDisponible } from '../src/entrenadordisponible';
import { AtletaDisponible } from '../src/atletadisponible';
import { DisponibilidadHoraria } from '../src/disponibilidadhoraria';
import { CategoriasPeso } from '../src/types';

const entrenador = new EntrenadorDisponible(
    [20, 30],
    new Map(),
    new Map(),
    new Map(),
    new DisponibilidadHoraria(),
    new Map(),
    CategoriasPeso.MENOS_66,
    123
);
let fecha = new Date(2001, 11, 28);
const atleta = new AtletaDisponible(
    fecha,
    new Map(),
    new Map(),
    new Map(),
    new DisponibilidadHoraria(),
    new Map(),
    CategoriasPeso.MENOS_66,
    123
);

describe('EntrenadorDisponible', function() {
    describe('Constructor', function() {
        it('Creación parámetros correctos', function() {
            expect (() => new EntrenadorDisponible(
                [20, 30],
                new Map(),
                new Map(),
                new Map(),
                new DisponibilidadHoraria(),
                new Map(),
                CategoriasPeso.MENOS_66,
                123
            )).to.not.throw(TypeError);
        });

        it('Creación parámetros incorrectos', function() {
            expect (() => new EntrenadorDisponible(
                [20, 30],
                1 as any,
                1 as any,
                new Map(),
                1 as any,
                new Map(),
                "a",
                123
            )).to.throw(TypeError);
        });
    });

    describe('Funciones', function() {
        it('Obtener ID', function() {
            expect(entrenador.getId()).to.equal(123);
        });
        it('Obtener Disponibilidad', function() {
            expect(entrenador.estaDisponible()).to.be.true;
        });
        it('Asignar Disponibilidad', function() {
            entrenador.asignarDisponibilidad(false);
            expect(entrenador.estaDisponible()).to.be.false;
        });

        it('Asignar Disponibilidad Errónea lanza error', function() {
            expect(() => entrenador.asignarDisponibilidad("a" as any)).to.throw(TypeError);
        });

        it('Asignar Atleta', function() {
            expect(() => entrenador.agregarAtleta(atleta)).to.not.throw(TypeError);
        });

        it('Asignar Atleta no válido lanza error', function() {
            expect(() => entrenador.agregarAtleta(123)).to.throw(TypeError);
        });

        it('Sugerir Atleta', function() {
            expect(() => entrenador.sugerirAtleta(atleta)).to.not.throw(TypeError);
        });

        it('Sugerir Atleta no válido lanza error', function() {
            expect(() => entrenador.sugerirAtleta(123)).to.throw(TypeError);
        });
    });
});