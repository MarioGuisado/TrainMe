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

    it('Escritura en archivos', (done) => {
        const logger = config.getLogger();
        const logFilePath = config.get('LOG_FILE_PATH');

        logger.info('Mensaje de prueba');

        setTimeout(() => {
            const logFileExists = fs.existsSync(logFilePath);
            expect(logFileExists).to.be.true;
    
            const logFileContent = fs.readFileSync(logFilePath, 'utf-8');
            expect(logFileContent).to.include('Mensaje de prueba');
            done();
        }, 1000);
    });
});