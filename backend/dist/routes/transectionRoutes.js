"use strict";

var express = require('express');
var _require = require('../controllers/transectionController'),
  addTransection = _require.addTransection,
  getAllTransection = _require.getAllTransection,
  editTransection = _require.editTransection,
  deleteTransection = _require.deleteTransection;

// router object
var router = express.Router();

// routes

// add transection Post method
router.post('/add-transection', addTransection);

// get all transecctions
router.post('/get-transection', getAllTransection);

// edit transection Post method
router.post('/edit-transection', editTransection);

// delete transection Post method
router.post("/delete-transection", deleteTransection);
module.exports = router;