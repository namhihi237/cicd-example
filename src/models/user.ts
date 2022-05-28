import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '.';

export interface UserAttributes {
	id: number;
	name: string;
}

// declare id is optional
export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

const UserDefinition = {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
};

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
	public id!: number;
	public name!: string;
}

//Initialization
User.init(UserDefinition, {
	sequelize,
	tableName: 'users', // name table in mysql
	underscored: true, // use underscore instead camelCase
	timestamps: false, // disable createAt and updateAt
});
