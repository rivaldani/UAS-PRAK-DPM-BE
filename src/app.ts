import express from 'express';
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import schoolRoutes from './routes/schoolRoutes';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/schools', schoolRoutes);

export default app;
