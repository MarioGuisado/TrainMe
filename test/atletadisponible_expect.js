const expect = require('chai').expect;
const EntrenadorDisponible = require('../dist/entrenadordisponible.js').EntrenadorDisponible;
const AtletaDisponible = require('../dist/atletadisponible.js').AtletaDisponible;
const DisponibilidadHoraria = require('../dist/disponibilidadhoraria.js').DisponibilidadHoraria;
const CategoriasPeso = require('../dist/types.js').CategoriasPeso;

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
                1,
                1,
                1,
                1,
                1,
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
            expect(() => atleta.asignarDisponibilidad("a")).to.throw(TypeError);
        });

        it('Asignar Entrenador', function() {
            atleta.asignarEntrenador(entrenador);
            expect(atleta._entrenadorElegido).to.not.be.null;
        });

        it('Asignar Entrenador no válido lanza error', function() {
            expect(() => atleta.asignarEntrenador(123)).to.throw(TypeError);
        });

        it('Sugerir Entrenador', function() {
            atleta.sugerirEntrenador(entrenador);
            expect(atleta._entrenadoresSugeridos.length).to.equal(1);
        });

        it('Sugerir Atleta no válido lanza error', function() {
            expect(() => atleta.sugerirEntrenador(123)).to.throw(TypeError);
        });
    });
});