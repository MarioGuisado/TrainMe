import { expect } from 'chai';
import { Usuario } from '../src/usuario';
import { Emparejador } from '../src/emparejador';
import { Rendimiento, Compromiso, ModalidadEntreno, TipoContacto } from '../src/types';

const atleta1 = new Usuario(
  Rendimiento.INTERNACIONAL,
  Compromiso.MEDIO,
  ModalidadEntreno.ONLINE,
  TipoContacto.TELEGRAM,
  1
);

const atleta2 = new Usuario(
    Rendimiento.INTERNACIONAL,
    Compromiso.ALTO,
    ModalidadEntreno.ONLINE,
    TipoContacto.TELEGRAM,
    2
  );

const entrenador1 = new Usuario(
    Rendimiento.INTERNACIONAL,
    Compromiso.ALTO,
    ModalidadEntreno.ONLINE,
    TipoContacto.TELEGRAM,
    3
);

const entrenador2 = new Usuario(
    Rendimiento.INTERNACIONAL,
    Compromiso.MEDIO,
    ModalidadEntreno.ONLINE,
    TipoContacto.TELEGRAM,
  4
);

const emparejador = new Emparejador();
emparejador.ProcesarUsuario(atleta1, false);
emparejador.ProcesarUsuario(atleta2, false);
emparejador.ProcesarUsuario(entrenador1, true);
emparejador.ProcesarUsuario(entrenador2, true);

describe('Emparejador', function() {
    describe('Funciones', function() {
        it('Sugerir ID de entrenador para un atleta', function() {
            let id_esperado = 4;
            expect(emparejador.RealizarEmparejamiento(atleta1, false)).to.equal(id_esperado);
        });

        it('Sugerir ID de atleta para un entrenador', function() {
            let id_esperado = 2;
            expect(emparejador.RealizarEmparejamiento(entrenador1, true)).to.equal(id_esperado);
        });

    });
});

