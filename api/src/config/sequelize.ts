import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import Article from '../models/Article';
import { DataTypes } from 'sequelize';

dotenv.config();

const sequelize = new Sequelize({
  database: process.env['DB_NAME'],
  username: process.env['DB_USER'],
  password: process.env['DB_PASSWORD'],
  host: process.env['DB_HOST'],
  dialect: 'postgres',
  models: [__dirname + '/../models']
});

Article.init(
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(500)
    }
  },
  {
    sequelize,
    modelName: 'Article',
  }
);

export default sequelize;
