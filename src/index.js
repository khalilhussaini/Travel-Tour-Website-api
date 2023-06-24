/*
the correct code 
import express from 'express';
import "./config/Database.js";
import userRoute from './controller/user-route.js';
import postRoute from './controller/post-route.js';
import commentRoute from './controller/comment-route.js';
import mongoose from 'mongoose';
import bookings  from './controller/bookingController.js';  
import cors from 'cors';
import morgan from "morgan";
import errorHandler from './middleware/errorHandler.js';
const tourController = require('./controllers/tourController'); 

const app = express();
 
mongoose
  .connect('mongodb://localhost/travel', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to the database'))
  .catch((error) => console.error('Database connection error:', error));   

// middleware 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

// API
app.use("/api/v1/users", userRoute);
app.use("/api/v1/posts", postRoute);
app.use("/api/v1/comments", commentRoute);
 app.post('/api/v1/bookings', bookings); // Use the named export  

app.use(errorHandler);

export default app;
 */


import express from 'express';
import './config/Database.js';
import userRoute from './controller/user-route.js';
import postRoute from './controller/post-route.js';
import commentRoute from './controller/comment-route.js';
/* import bookingRoute from './controller/booking-route.js';  */
/* import reviewRoute from './controller/review-route.js'; */
import cors from 'cors';
import morgan from 'morgan';
import errorHandler from './middleware/errorHandler.js';
import dotenv from 'dotenv';


dotenv.config();

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
/* app.use('/api/v1/bookings', bookingRoute); */
/* app.use('/api/v1/reviews', reviewRoute);  */

app.use(errorHandler);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;



/* import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import errorHandler from './middleware/errorHandler.js';
import userRoute from './controller/user-route.js';
import postRoute from './controller/post-route.js';
import commentRoute from './controller/comment-route.js';
import bookingTourRoute from './controller/bookingTour-route.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.post('/api/tours/search', (req, res) => {
    // Implement search logic here based on the received search criteria in the request body
    // Return the search results as a response
    // You can use a database or any other data source to fetch the relevant tours
  });
  
  app.post('/api/tours/book', (req, res) => {
    // Implement tour booking logic here based on the received booking details in the request body
    // Process the booking, save it to the database, and return a success response
    // You can use a database or any other data storage mechanism to store the booking information
  });

// Database connection
mongoose
  .connect('mongodb://localhost/travel', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to the database'))
  .catch((error) => console.error('Database connection error:', error));

// Routes
app.use('/api/v1/users', userRoute);
app.use('/api/v1/posts', postRoute);
app.use('/api/v1/comments', commentRoute);
app.use('/api/v1/bookings', bookingTourRoute);

// Error handling middleware
app.use(errorHandler);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
}); */
