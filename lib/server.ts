import { serverInterface } from '../interfaces/serverInterface';
// @ts-ignore
import express from 'express';

export class server implements serverInterface{
    constructor() {
        this.port = 5000;
        let now = Date.now();

        let app = express();

        app.get('/', ((req, res) => {
            res.send('Api starting...')
        }))

        app.listen(this.port, () => console.info(`[API] Booted api at [${now}]`));
    }

    method: string;
    port: number;
    url: string
}