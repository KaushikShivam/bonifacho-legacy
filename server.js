const mongoose = require('mongoose');
require('dotenv').config({ path: './config.env' });
const app = require('./server/app');

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connected'));

const server = app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});

process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION');
  server.close(() => {
    process.exit(1);
  });
});
