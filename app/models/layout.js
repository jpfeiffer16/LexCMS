/// <reference path="../../typings/mongoose/mongoose.d.ts" />
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var LayoutShcema = new Schema({
  _id: Schema.ObjectId,
  title: String,
  code: String
});

LayoutShcema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

module.exports = mongoose.model('Layout', LayoutShcema);

