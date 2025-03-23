// controllers/book.controller.js
import db from '../models/index.js';
const { books: Book } = db;

// Create a new book
export const create = async (req, res) => {
  try {
    const { title, author, genre, price, publishedYear } = req.body;
    const newBook = await Book.create({
      title,
      author,
      genre,
      price,
      publishedYear,
    });
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Get all books
export const findAll = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Get a single book by ID
export const findOne = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).send({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Update a book by ID
export const update = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).send({ message: 'Book not found' });
    }

    const { title, author, genre, price, publishedYear } = req.body;
    book.title = title || book.title;
    book.author = author || book.author;
    book.genre = genre || book.genre;
    book.price = price || book.price;
    book.publishedYear = publishedYear || book.publishedYear;

    await book.save();
    res.status(200).json(book);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Delete a book by ID
export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).send({ message: 'Book not found' });
    }

    await book.destroy();
    res.status(200).send({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
