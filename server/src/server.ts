import express from 'express';
import WebSocket from 'ws';
import cors from 'cors';
import morgan from 'morgan';
import ErrorService from './helpers/error-service';
import { createServer } from 'http';
import { limiter } from './helpers/request-limiter';

const app = express();
const errorService = new ErrorService();

app.use(cors());
app.use(morgan('dev'));
app.use(limiter);

export const server = createServer(app);
export const ws = new WebSocket.Server({ server });

app.use(errorService.ErrorSave);
