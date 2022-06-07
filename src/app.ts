import express, { Application, Response, Request } from 'express';
import { userRoutes } from './routers/user';
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user', userRoutes);
import { AppError } from './utils';
import { HttpStatusCode } from './constants';

// hand error handling
app.use((err: AppError, _req: Request, res: Response) => {
	const status = err.httpCode || HttpStatusCode.INTERNAL_SERVER_ERROR;

	res.status(status).json({
		ok: status >= 200 && status < 300,
		error: status >= 500 ? 'Internal Server Error' : err.message,
		name: err.name,
	});
});

export default app;
