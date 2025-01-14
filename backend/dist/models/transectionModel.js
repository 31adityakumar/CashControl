"use strict";

var mongoose = require("mongoose");
var transectionSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: [true, "amount is required"]
  },
  type: {
    type: String,
    required: [true, "type is required"]
  },
  category: {
    type: String,
    required: [true, "category is required"]
  },
  description: {
    type: String,
    required: [true, "description is required"]
  },
  date: {
    type: Date,
    required: [true, "date is required"]
  }
}, {
  timestamps: true
});
var transectionModel = mongoose.model("transection", transectionSchema);
module.exports = transectionModel;