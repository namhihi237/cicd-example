import { User } from './../models/user';
import { Router, Request, Response, NextFunction } from 'express';
export const userRoutes: Router = Router();

userRoutes.get('/', async (req: Request, res: Response) => {
	try {
		let users = await User.findAll();

		users = JSON.parse(JSON.stringify(users));

		return res.status(200).json({
			message: 'success',
			data: users,
		});
	} catch (error) {
		console.log(error);

		return res.status(500).json({
			message: 'fail',
			data: error,
		});
	}
});
