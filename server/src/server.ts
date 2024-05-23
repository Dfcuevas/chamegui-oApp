import express from 'express';
import WebSocket from 'ws';
import cors from 'cors';
import morgan from 'morgan';
import { createServer } from 'http';

const app = express();

app.use(cors());
app.use(morgan('dev'));

export const server = createServer(app);
export const ws = new WebSocket.Server({ server });
