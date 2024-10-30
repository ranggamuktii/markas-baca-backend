import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';

dotenv.config();
const app = express();
const port = process.env.PORT;

connectDB();
app.use(express.json());

app.listen(port, () => console.log(`Server running on port ${port}...`));
