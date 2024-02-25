import http from 'http';
import express from 'express';
// @ts-ignore
import cors from 'cors'; 
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import fs from 'fs';
import path from 'path';
import { ServerManager } from './libs/ServerManager';

dotenv.config();

const app = express();

const server = new http.Server(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    }
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('io', io);
app.set("manager", new ServerManager());

fs.readdirSync(path.join(__dirname, 'routes')).forEach(async(file: string) => {
    if (file.endsWith('.js')) {
        let route = await import(`./routes/${file}`);
        app.use(route.default);
    }
});

app.get('/', (req: any, res: any) => {
    res.json({ message: 'Welcome to MC API' }).status(200);
});

let port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});