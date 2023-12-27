import { expect } from 'chai';
import { Config } from '../src/config';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

dotenv.config({ debug: true });

describe('Config & Logger', () => {
    let config: Config;
    
    beforeEach(() => {
        config = new Config();
    });

    it('Devolver valor de la clave', () => {
        const logLevel = config.get('LOG_LEVEL');
        expect(logLevel).to.equal('info');
    });

    it('Error si el valor no existe', () => {
        expect(() => config.get('NON_EXISTENT_KEY')).to.throw('La variable de entorno NON_EXISTENT_KEY no está configurada.');
    });

    it('Devolver logger', () => {
        const logger = config.getLogger();
        expect(logger).to.have.property('info');
    });

    it('Creación de logger y verificación de ruta de archivo de logs', () => {
        const logger = config.getLogger();
        const logFilePath = config.get('LOG_FILE_PATH');
    
        expect(logger).to.exist;
    
        expect(logFilePath).to.equal('./logs.log'); 
    });
});