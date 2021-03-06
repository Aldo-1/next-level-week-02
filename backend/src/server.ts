import express from 'express';
import cors from 'cors';
import rota from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(rota);

app.listen(3333);
