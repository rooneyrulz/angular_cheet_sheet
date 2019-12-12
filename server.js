const express = require('express');
const { createServer } = require('http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const logger = require('morgan');

// const dbConnection = require('./config/db');

dotenv.config({ path: './.env' });

const app = express();
const server = createServer(app);

// CONNECTING TO MONGODB
mongoose.Promise = global.Promise;


if (process.env.NODE_ENV === 'development') app.use(logger('dev'));

app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

// app.use((req, res, next) => {
//   res.header()
// });

app.use('/api', require('./routes'));
app.use('/api/posts', require('./routes/post'));
app.use('/api/users', require('./routes/auth'));

async function init () {
  try {
    const con = await mongoose.connect(
      'mongodb://ruzny:ruzny123@ds253368.mlab.com:53368/angular_cheat_sheet', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
      }
    );
    if (con) console.log('connecting to mongodb!');
  } catch (error) {
    throw error.message;
  }
};

init();

server.listen(process.env.PORT || 5000, () =>
  console.log(`server running on port ${process.env.PORT || 5000}!`)
);
