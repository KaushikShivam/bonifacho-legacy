const mongoose = require('mongoose');
require('dotenv').config({ path: './config.env' });
const app = require('./app');

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connected'));

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});