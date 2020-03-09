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

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server`
  });
});

module.exports = app;
