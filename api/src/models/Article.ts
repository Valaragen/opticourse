import { Column, Model, Table, Unique } from 'sequelize-typescript';

@Table
export default class Article extends Model {
  @Unique
  @Column
  name!: string;

  @Column
  description!: string;
}
