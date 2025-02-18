import express from 'express';
import cors from 'cors';
import categorieRoute from './routes/categorie.js';

const app = express();

app.use(cors('*'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', categorieRoute);

export default app;