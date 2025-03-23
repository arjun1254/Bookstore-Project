// models/index.js
import { Sequelize } from 'sequelize';
import dbConfig from '../config/db.config.js';
import Book from './book.model.js';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

const db = {};

// Assigning Sequelize instance and models to db object
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.books = Book(sequelize, Sequelize);

export default db;
