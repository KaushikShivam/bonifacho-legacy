const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const path = require('path');

const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/AppError');
// import routers
const artworkRouter = require('./routes/artworkRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// middlewares
// Logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Rate limiter
const limiter = rateLimit({
  max: 100, // maximum requests
  windowMs: 60 * 60 * 1000, // in how many hours?
  message: 'Too many requests from this IP. Please try again in an hour'
});

// Helmet package for headers
app.use(helmet());

// Only limiting our api
app.use('/api', limiter);

// Data sanitization against NoSql query injection
// will look at request body, params and query string and filter out all of the dollar signs and dots
app.use(mongoSanitize());
// Data sanitization against cross site scripting attacks
app.use(xss());

// body parser
app.use(express.json({ limit: '10kb' }));

//Prevent parameter pollution
app.use(hpp());

// mounting the routes
app.use('/api/v1/artworks', artworkRouter);
app.use('/api/v1/users', userRouter);

// SERVER static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

// Handle unhandled rejections
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handling middleware
app.use(globalErrorHandler);

module.exports = app;
