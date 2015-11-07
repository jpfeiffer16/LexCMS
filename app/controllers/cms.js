var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  LayoutProvider = require('../modules/LayoutProvider.js'),
  DustRenderer = require('../modules/DustRenderer.js');
  

module.exports = function(app) {
  app.use('/', router);
};

