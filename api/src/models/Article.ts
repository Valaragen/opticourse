import {Column, Model, Table } from 'sequelize-typescript';

@Table
class Article extends Model<Article> {
  @Column
  name!: string;

  @Column
  description!: string;
}

export default Article;
