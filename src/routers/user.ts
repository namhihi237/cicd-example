import { User } from './../models/user';
import { op } from '../models';
import { Router, Request, Response, NextFunction } from 'express';
export const userRoutes: Router = Router();

userRoutes.get('/', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { next = 0 } = req.query;
		const perPage = 20;
		let users = await User.findAll({
			where: {
				id: {
					[op.gt]: +next,
				},
			},
			limit: perPage,
		});

		users = JSON.parse(JSON.stringify(users));

		return res.status(200).json({
			message: 'success',
			data: users,
		});
	} catch (error) {
		next(error);
	}
});
