// routes/book.routes.js
import { Router } from 'express';
import * as bookController from '../controllers/book.controller.js';

const router = Router();

// Create a new book
router.post('/', bookController.create);

// Get all books
router.get('/', bookController.findAll);

// Get a book by ID
router.get('/:id', bookController.findOne);

// Update a book by ID
router.put('/:id', bookController.update);

// Delete a book by ID
router.delete('/:id', bookController.deleteBook);

export default router;
