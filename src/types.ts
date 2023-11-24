export const Rendimiento = new Map<string, number>([
    ['BAJO', 0],
    ['MEDIO', 0.5 ],
    ['ALTO', 1 ],
]);

export const Compromiso = new Map<string, number>([
    ['BAJO', 0],
    ['MEDIO', 0.5],
    ['ALTO', 1],
]);

export const ModalidadEntreno = new Map<string, number>([
    ['PRESENCIAL', 0],
    ['SEMIPRESENCIAL', 0.5],
    ['ONLINE', 1],
]);

export const TipoContacto = new Map<string, number>([
    [ 'WHATSAPP',0],
    ['TELEGRAM', 0.5],
    ['EMAIL', 1 ],
]);

export enum CategoriasPeso {
    MENOS_66,
    MENOS_74,
    MENOS_83,  
    MENOS_93,
    MENOS_105,
    MENOS_120,
    MAS_120,
};

export enum TipoMatriz{
    ENTRENADORES,
    ATLETAS
}