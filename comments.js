// Create web server

import express from 'express';
import { json, urlencoded } from 'body-parser';
import { connect } from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';

import commentRoutes from './routes/comments';

config();
const app = express();
connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/comments', commentRoutes);

app.listen(process.env.PORT, () => {
    console.log('Server started');
});
