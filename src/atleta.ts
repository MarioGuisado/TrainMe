import { DisponibilidadHoraria } from './disponibilidadhoraria';
import { Rendimiento, Compromiso, ModalidadEntreno, TipoContacto, CategoriasPeso } from './types';

export class Atleta{
    private _fechaNacimiento: Date;
    private _nivelRendimiento: Map<number, string>;
    private _nivelCompromiso: Map<number, string>;
    private _modalidadEntreno: Map<number, string>;
    private _disponibilidadHorariaSemanal: typeof DisponibilidadHoraria;
    private _preferenciasContacto: Map<number, string>;
    private _categoriasPeso: typeof CategoriasPeso;

    constructor(
        fechaNacimiento: Date,
        nivelRendimiento: Map<number, string>,
        nivelCompromiso: Map<number, string>,
        modalidadEntreno: Map<number, string>,
        disponibilidadHorariaSemanal: typeof DisponibilidadHoraria,
        preferenciasContacto: Map<number, string>,
        categoriasPeso: typeof CategoriasPeso) 
    {

        this.validarEdad(fechaNacimiento);
        this.validarNivelRendimiento(nivelRendimiento);
        this.validarNivelCompromiso(nivelCompromiso);
        this.validarModalidadEntreno(modalidadEntreno);
        this.validarPreferenciasContacto(preferenciasContacto);
    

        this._fechaNacimiento = fechaNacimiento;
        this._nivelRendimiento = nivelRendimiento;
        this._nivelCompromiso = nivelCompromiso;
        this._modalidadEntreno = modalidadEntreno;
        this._disponibilidadHorariaSemanal = disponibilidadHorariaSemanal;
        this._preferenciasContacto = preferenciasContacto;
        this._categoriasPeso = categoriasPeso;

    }

    private validarEdad(fechaNacimiento: Date): void {
        let edad = new Date().getFullYear() - fechaNacimiento.getFullYear();
        if (edad < 14 || edad > 100) {
            throw new Error('El rango de edad debe estar entre 14 y 100');
        }
    }

    private validarNivelRendimiento(nivelRendimiento: Map<number, string>): void {
        for (let [key, value] of nivelRendimiento) {
            if (!Object.keys(Rendimiento).includes(key.toString()) || !(Object as any).values(Rendimiento).includes(value)) {
                throw new Error('El nivel de rendimiento no es válido');
            }
        }
    }

    private validarNivelCompromiso(nivelCompromiso: Map<number, string>): void {
        for (let [key, value] of nivelCompromiso) {
            if (!Object.keys(Compromiso).includes(key.toString()) || !(Object as any).values(Compromiso).includes(value)) {
                throw new Error('El nivel de compromiso no es válido');
            }
        }
    }

    private validarModalidadEntreno(modalidadEntreno: Map<number, string>): void {
        for (let [key, value] of modalidadEntreno) {
            if (!Object.keys(ModalidadEntreno).includes(key.toString()) || !(Object as any).values(ModalidadEntreno).includes(value)) {
                throw new Error('La modalidad de entreno no es válida');
            }
        }
    }

    private validarPreferenciasContacto(preferenciasContacto: Map<number, string>): void {
        for (let [key, value] of preferenciasContacto) {
            if (!Object.keys(TipoContacto).includes(key.toString()) || !(Object as any).values(TipoContacto).includes(value)) {
                throw new Error('Las preferencias de contacto no son válidas');
            }
        }
    }
}