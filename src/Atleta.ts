import { DisponibilidadHoraria } from "./DisponibilidadHoraria";

export class Atleta{
    private _fechaNacimiento: number;
    private _nivelRendimiento: Map<number, string>;
    private _nivelCompromiso: Map<number, string>;
    private _modalidadEntreno: Map<number, string>;
    private _disponibilidadHorariaSemanal: DisponibilidadHoraria;
    private _preferenciasContacto: Map<number, string>;
    private _categoriasPeso: Map<string, [number, number]>;

    constructor(
        fechaNacimiento: number,
        nivelRendimiento: Map<number, string>,
        nivelCompromiso: Map<number, string>,
        modalidadEntreno: Map<number, string>,
        disponibilidadHorariaSemanal: DisponibilidadHoraria,
        preferenciasContacto: Map<number, string>,
        categoriasPeso: Map<string, [number, number]>) 
    {
        this._fechaNacimiento = fechaNacimiento;
        this._nivelRendimiento = nivelRendimiento;
        this._nivelCompromiso = nivelCompromiso;
        this._modalidadEntreno = modalidadEntreno;
        this._disponibilidadHorariaSemanal = disponibilidadHorariaSemanal;
        this._preferenciasContacto = preferenciasContacto;
        this._categoriasPeso = categoriasPeso;

    }
}