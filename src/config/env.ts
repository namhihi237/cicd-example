import dotenv from 'dotenv';
import { Options } from 'sequelize/types';
dotenv.config();

interface IEnvironment {
	url: string | Options;
	port: number;
	db: {
		host: string;
		port: number;
		user: string;
		password: string;
		database: string;
		url: string;
		dialect: string;
	};
}

export default {
	port: process.env.PORT || 3000,
	db: {
		host: process.env.DB_HOST || 'localhost',
		port: process.env.DB_PORT || 3306,
		user: process.env.DB_USER || 'root',
		password: process.env.DB_PASSWORD || '',
		database: process.env.DB_DATABASE || 'test',
		url: process.env.DB_URL || '',
		dialect: process.env.DB_DIALECT || 'mysql',
	},
} as IEnvironment;
