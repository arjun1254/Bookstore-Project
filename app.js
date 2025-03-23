// app.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './models/index.js';
import bookRoutes from './routes/book.routes.js';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/books', bookRoutes);

// Sync database
db.sequelize.sync({ force: false }).then(() => {
  console.log('Database synchronized!');
});

// Start server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
