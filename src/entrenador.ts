import { DisponibilidadHoraria } from "./disponibilidadhoraria";
import { Rendimiento, Compromiso, ModalidadEntreno, TipoContacto, CategoriasPeso } from "./types";


export class Entrenador {
    private _rangoEdad: [number, number];
    private _nivelRendimiento: Map<number, string>;
    private _nivelCompromiso: Map<number, string>;
    private _modalidadEntreno: Map<number, string>;
    private _disponibilidadHorariaSemanal: DisponibilidadHoraria;
    private _preferenciasContacto: Map<number, string>;
    private _categoriasPeso: CategoriasPeso;

    constructor(
        rangoEdad: [number, number],
        nivelRendimiento: Map<number, string>,
        nivelCompromiso: Map<number, string>,
        modalidadEntreno: Map<number, string>,
        disponibilidadHorariaSemanal: DisponibilidadHoraria,
        preferenciasContacto: Map<number, string>,
        categoriasPeso: CategoriasPeso)
    {
        if (rangoEdad[0] < 14 || rangoEdad[1] > 100) {
            throw new Error('El rango de edad debe estar entre 14 y 100');
        }
        
        for (let [key, value] of nivelRendimiento) {
            if (!Object.keys(Rendimiento).includes(key.toString()) || !(Object as any).values(Rendimiento).includes(value)) {
                throw new Error('El nivel de rendimiento no es válido');
            }
        }
        
        for (let [key, value] of nivelCompromiso) {
            if (!Object.keys(Compromiso).includes(key.toString()) || !(Object as any).values(Compromiso).includes(value)) {
                throw new Error('El nivel de compromiso no es válido');
            }
        }

        for (let [key, value] of modalidadEntreno) {
            if (!Object.keys(ModalidadEntreno).includes(key.toString()) || !(Object as any).values(ModalidadEntreno).includes(value)) {
                throw new Error('La modalidad de entreno no es válida');
            }
        }

        for (let [key, value] of preferenciasContacto) {
            if (!Object.keys(TipoContacto).includes(key.toString()) || !(Object as any).values(TipoContacto).includes(value)) {
                throw new Error('Las preferencias de contacto no son válidas');
            }
        }

        this._rangoEdad = rangoEdad;
        this._nivelRendimiento = nivelRendimiento;
        this._nivelCompromiso = nivelCompromiso;
        this._modalidadEntreno = modalidadEntreno;
        this._disponibilidadHorariaSemanal = disponibilidadHorariaSemanal;
        this._preferenciasContacto = preferenciasContacto;
        this._categoriasPeso = categoriasPeso;
    }
}