import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import cors from 'cors';
import morgan from 'morgan';

import errorHandler from './middleware/errorHandler.js';

import './config/Database.js';

import userRoute from './controller/user-route.js';
import postRoute from './controller/post-route.js';
import commentRoute from './controller/comment-route.js';
import bookingRoute from './controller/booking.router.js';


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

 
// Routes
app.use('/api/v1/users', userRoute);
app.use('/api/v1/posts', postRoute);
app.use('/api/v1/comments', commentRoute);
app.use('/api/v1/bookings', bookingRoute);
/* app.use('/api/v1/reviews', reviewRoute);  */

app.use(errorHandler);

export default app;

