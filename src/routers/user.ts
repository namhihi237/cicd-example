import { Router, Request, Response, NextFunction } from 'express';

export const userRoutes: Router = Router();

userRoutes.get('/', async (req: Request, res: Response) => {
	return res.status(200).json({
		message: 'success',
		data: [
			{
				id: 1,
				name: 'John Doe',
			},
			{
				id: 2,
				name: 'Jane Doe',
			},
		],
	});
});
