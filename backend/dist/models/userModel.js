"use strict";

var mongoose = require('mongoose');

// Schema design
var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required']
  },
  email: {
    type: String,
    required: [true, 'email is required and unique'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'password is required']
  }
}, {
  timestamps: true
});
var userModel = mongoose.model('users', userSchema);
module.exports = userModel;