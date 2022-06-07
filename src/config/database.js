import dotenv from 'dotenv';
dotenv.config();

const host = process.env.DB_HOST;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD || '';
const database = process.env.DB_NAME;
const url = process.env.DB_URL;

export default {
	development: {
		username,
		password,
		database,
		host,
		port: 3306,
		dialect: 'mysql',
		logging: true,
		url
	},
};
