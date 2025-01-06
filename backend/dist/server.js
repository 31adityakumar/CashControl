"use strict";

var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
require('dotenv').config();
var connectDb = require('./config/connectDb');
// const path = require('path');

// database call
connectDb();
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// using routes
app.use('/api/v1/users', require('./routes/userRoute'));
app.use('/api/v1/transections', require('./routes/transectionRoutes'));

// port
var PORT = process.env.PORT || 8000;

// Listen server
app.listen(PORT, function () {
  console.log("Server running on PORT : ".concat(PORT));
});