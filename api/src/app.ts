import express, { Application } from 'express';
import dotenv from 'dotenv';
import sequelize from './config/sequelize';
import articleRoutes from './routes/articles';

dotenv.config();

const app: Application = express();

// enable CORS for all origins
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Expose-Headers', 'x-total-count');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type,authorization');

  next();
});

// synchronise sequelize with the database
sequelize.sync().then(() => {
  console.log('Database & tables created!');
});

// Routes
app.use('/api/articles', articleRoutes);

const port = process.env['API_PORT'];
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
