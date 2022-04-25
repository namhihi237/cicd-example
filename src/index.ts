import express, { Application, Request, Response } from 'express';

const PORT = process.env.PORT || 3000;
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', (req: Request, res: Response) => {
	res.send('Hello World!');
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
