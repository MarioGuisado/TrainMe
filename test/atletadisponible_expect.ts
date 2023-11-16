import { expect } from 'chai';
import { EntrenadorDisponible } from '../src/entrenadordisponible';
import { AtletaDisponible } from '../src/atletadisponible';
import { DisponibilidadHoraria } from '../src/disponibilidadhoraria';
import { CategoriasPeso } from '../src/types';


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

describe('AtletaDisponible', function() {
    describe('Constructor', function() {
        it('Creación parámetros correctos', function() {
            let fecha = new Date(2001, 11, 28);
            expect (() => new AtletaDisponible(
                fecha,
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
            let fecha = new Date(2001, 11, 28);
            expect (() => new AtletaDisponible(
                fecha,
                1 as any,
                1 as any,
                1 as any,
                1 as any,
                1 as any,
                CategoriasPeso.MENOS_66,
                123
            )).to.throw(TypeError);
        });
    });

    describe('Funciones', function() {
        it('Obtener ID', function() {
            expect(atleta.getID()).to.equal(123);
        });
        it('Obtener Disponibilidad', function() {
            expect(atleta.estaDisponible()).to.be.true;
        });
        it('Asignar Disponibilidad', function() {
            atleta.asignarDisponibilidad(false);
            expect(atleta.estaDisponible()).to.be.false;
        });

        it('Asignar Disponibilidad Errónea lanza error', function() {
            expect(() => atleta.asignarDisponibilidad("a" as any)).to.throw(TypeError);
        });

        it('Asignar Entrenador', function() {
            atleta.asignarEntrenador(entrenador as any);
            expect((atleta as any)._entrenadorElegido).to.not.be.null;
        });
        it('Asignar Entrenador no válido lanza error', function() {
            expect(() => atleta.asignarEntrenador(123 as any)).to.throw(TypeError);
        });
        it('Sugerir Entrenador', function() {
            atleta.sugerirEntrenador(entrenador as any);
            expect((atleta as any)._entrenadoresSugeridos.length).to.equal(1);
        });
        it('Sugerir Atleta no válido lanza error', function() {
            expect(() => atleta.sugerirEntrenador(123 as any)).to.throw(TypeError);
        });
    });
});