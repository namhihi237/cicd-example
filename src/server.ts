import express, { Application } from 'express';
import { userRoutes } from './routers/user';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRoutes);

module.exports = app;
