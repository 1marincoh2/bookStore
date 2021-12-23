import * as fs from 'fs';
import { parse } from 'dotenv'


export class ConfigService {
    private readonly envConfing: { [key: string]: string };

    constructor() {
        const isDevelopmentEnviroment = process.env.NODE_ENV !== "production";

        if (isDevelopmentEnviroment) {
            const envfilepath = __dirname + '/../../.env';
            const existsPath = fs.existsSync(envfilepath);

            if (!existsPath) {
                console.log('.env file does not exist');
                process.exit(0);


            }

            this.envConfing = parse(fs.readFileSync(envfilepath));

        } else {

            this.envConfing = {
                PORT: process.env.PORT,
            }
        }


    }

    get(key: string): string {
        return this.envConfing[key];

    }

}