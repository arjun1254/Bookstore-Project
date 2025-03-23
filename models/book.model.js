// models/book.model.js
export default (sequelize, Sequelize) => {
    class Book extends Sequelize.Model {}
  
    Book.init(
      {
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        author: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        genre: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        price: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        publishedYear: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Book', // Model name in the database
      }
    );
  
    return Book;
  };
  