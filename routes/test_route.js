const {testController} = require('../controller/test_controller')

const express = require('express');
const route = express.Router();

route.get('/',testController)

module.exports = route;

