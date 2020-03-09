const express = require('express');
const morgan = require('morgan');

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
  const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  err.statusCode = 404;
  err.status = 'fail';

  next(err);
});

// Global error handling middleware
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500; // 500 is the standard. Internal server error
  err.status = err.status || 'error'; // error is when we have errors starting from 5, it's fail when it comes from 400
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  });
});

module.exports = app;
