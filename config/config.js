var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'lexcms'
    },
    port: process.env.port || 3000,
    db: 'mongodb://admin:admin@ds049084.mongolab.com:49084/lexcms'
  },

  test: {
    root: rootPath,
    app: {
      name: 'lexcms'
    },
    port: process.env.port || 3000,
    db: 'mongodb://admin:admin@ds049084.mongolab.com:49084/lexcms'
  },

  production: {
    root: rootPath,
    app: {
      name: 'lexcms'
    },
    port: process.env.port || 3000,
    db: 'mongodb://admin:admin@ds049084.mongolab.com:49084/lexcms'
  }
};

module.exports = config[env];
