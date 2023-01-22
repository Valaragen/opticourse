import express from 'express';
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const port = process.env['API_PORT'];

app.get('/api', (req, res) => {
  res.send('Hello, World!' + port);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
