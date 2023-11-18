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

    private validarMap(map: Map<number, string>, enumObj: object): void {
        for (let [key, value] of map) {
            if (!Object.keys(enumObj).includes(key.toString()) || !(Object as any).values(enumObj).includes(value)) {
                throw new Error('El valor no es válido');
            }
        }
    }

    private validarEdad(fechaNacimiento: Date): void {
        let edad = new Date().getFullYear() - fechaNacimiento.getFullYear();
        if (edad < 14 || edad > 100) {
            throw new Error('El rango de edad debe estar entre 14 y 100');
        }
    }

    private validarNivelRendimiento(nivelRendimiento: Map<number, string>): void {
        this.validarMap(nivelRendimiento, Rendimiento);
    }
    
    private validarNivelCompromiso(nivelCompromiso: Map<number, string>): void {
        this.validarMap(nivelCompromiso, Compromiso);
    }
    
    private validarModalidadEntreno(modalidadEntreno: Map<number, string>): void {
        this.validarMap(modalidadEntreno, ModalidadEntreno);
    }
    
    private validarPreferenciasContacto(preferenciasContacto: Map<number, string>): void {
        this.validarMap(preferenciasContacto, TipoContacto);
    }
}