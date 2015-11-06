var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  LayoutProvider = require('../modules/LayoutProvider.js'),
  DustRenderer = require('../modules/DustRenderer.js');
  

module.exports = function(app) {
  app.use('/', router);
};



router.get('/render/:id', function(req, res, next) {
  var id = req.params.id;
  
  
  console.log(id);
  
  
  LayoutProvider.getLayout(id, function(err, result) {
    if (!err) {
      var code = result.code;
      DustRenderer.render(code, function(output) {
        if (output != null) {
          res.send(output);
        } else {
          res.status(500).send('Failure');
        }
      })
    } else {
      res.status(500).send('Failure');
    }
  });
  
});