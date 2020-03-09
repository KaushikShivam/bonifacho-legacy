const express = require('express');
const morgan = require('morgan');

const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./../utils/AppError');
// import routers
const artworkRouter = require('./routes/artworkRoutes');

const app = express();

// middlewares
// Logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// body parser
app.use(express.json({ limit: '10kb' }));

// mounting the routes
app.use('/api/v1/artworks', artworkRouter);

// Handle unhandled rejections
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handling middleware
app.use(globalErrorHandler);

module.exports = app;
