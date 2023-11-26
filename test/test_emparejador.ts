import { expect } from 'chai';
import { Usuario } from '../src/usuario';
import { Emparejador } from '../src/emparejador';
import { Rendimiento, Compromiso, ModalidadEntreno, TipoContacto, OpcionFiltro } from '../src/types';

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
    Compromiso.ALTO,
    ModalidadEntreno.ONLINE,
    TipoContacto.TELEGRAM,
  4
);

const entrenador3 = new Usuario(
  Rendimiento.INTERNACIONAL,
  Compromiso.MEDIO,
  ModalidadEntreno.ONLINE,
  TipoContacto.TELEGRAM,
5
);

const emparejador = new Emparejador();
emparejador.ProcesarUsuario(atleta1, false);
emparejador.ProcesarUsuario(atleta2, false);
emparejador.ProcesarUsuario(entrenador1, true);
emparejador.ProcesarUsuario(entrenador2, true);
emparejador.ProcesarUsuario(entrenador3, true);

describe('Emparejador', function() {
    describe('Funciones', function() {
        it('Sugerir ID de entrenador para un atleta, filtrando por compromiso y contacto', function() {
            let id_esperado = 5;
            let filtros = [OpcionFiltro.Compromiso,OpcionFiltro.Contacto];
            expect(emparejador.RealizarEmparejamiento(atleta1, false,filtros)).to.equal(id_esperado);
        });

        it('Sugerir ID de atleta para un entrenador, filtrando por rendimiento y compromiso', function() {
            let id_esperado = 2;
            let filtros = [OpcionFiltro.Rendimiento,OpcionFiltro.Compromiso];
            expect(emparejador.RealizarEmparejamiento(entrenador1, true, filtros)).to.equal(id_esperado);
        });

    });
});

