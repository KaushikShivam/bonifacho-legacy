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

module.exports = app;
