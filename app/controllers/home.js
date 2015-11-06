var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  LayoutProvider = require('../modules/LayoutProvider.js');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Layout Tester'
  });
});

router.post('/', function (req, res, next) {
  var title = req.body.title,
      code = req.body.code;
      
  LayoutProvider.saveLayout(title, code, function(err, id) {
    if (!err) {
      res.render('success', { id: id.toString() });
    } else {
      res.render('fail', null);
    }
  });
});
