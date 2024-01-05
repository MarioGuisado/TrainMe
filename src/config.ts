import * as dotenv from 'dotenv';
import pino from 'pino';
import fs from 'fs';


export class Config {
    private configValues: { [key: string]: string } = {
        LOG_LEVEL: 'info',
        LOG_FILE_PATH: './logs.log',
    };

    constructor(config?: { [key: string]: string }) {
        for (const key in this.configValues) {
            if (!config && process.env[key]) {
                dotenv.config({ debug: true });
                this.configValues[key] = process.env[key]!;
            } else {
                const githubEnvVar = process.env[`GITHUB_ENV_${key}`];
                if (githubEnvVar) {
                    this.configValues[key] = githubEnvVar;
                }
            }
        }
    }

    get(key: string): string {
        if (this.configValues[key]) {
            return this.configValues[key];
        } else {
            throw new Error(`La variable de entorno ${key} no está configurada.`);
        }
    }

    getLogger(): pino.Logger {
        const filePath = this.get('LOG_FILE_PATH');

        if (fs.existsSync(filePath)) {
            fs.chmodSync(filePath, '777');
        } else {
            fs.writeFileSync(filePath, '', { mode: 0o777 });
        }

        return pino(pino.destination(filePath));
    }
}