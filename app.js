import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/index.js';
import connectDB from './config/mongodb.js';

dotenv.config();
const app = express();
const port = process.env.PORT;

connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/v1', routes);

app.listen(port, () => console.log(`Server running on http://localhost: ${port}`));
