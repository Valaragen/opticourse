import {Column, Model, Table, Unique } from 'sequelize-typescript';
import sequelize from '../config/sequelize';
import { DataTypes } from 'sequelize';

@Table
class Article extends Model {
  @Column
  @Unique
  name!: string;

  @Column
  description!: string;
}

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

export default Article;
