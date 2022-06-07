import fs from 'fs';
import path from 'path';
const basename = path.dirname(__filename);
import { Sequelize, Op } from 'sequelize';
const env = process.env.NODE_ENV || 'development';
const config = require('../config/database.cjs')[env];
class Database {
	private _models: any;
	private _sequelize: Sequelize;

	constructor() {
		this._models = {};
		this._sequelize = config.url
			? new Sequelize(config.url, config)
			: new Sequelize(config.database, config.username, config.password, config);

		fs.readdirSync(__dirname)
			.filter((file: string) => {
				return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.ts';
			})
			.forEach((file: string) => {
				const model = require(path.join(__dirname, file));

				this._models[Object.keys(model)[0]] = model[Object.keys(model)[0]];
			});

		Object.keys(this._models).forEach((modelName) => {
			if (this._models[modelName]) {
				this._models[modelName].associate(this._models);
			}
		});
	}

	getModels(): any {
		return this._models;
	}

	getSequelize(): Sequelize {
		return this._sequelize;
	}
}

const database = new Database();

export const models = database.getModels();
export const sequelize = database.getSequelize();
export const op = Op;
