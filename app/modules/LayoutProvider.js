/// <reference path="../../typings/mongoose/mongoose.d.ts" />


var Layout = require('../models/layout.js'),
	mongoose = require('mongoose');


module.exports = (function() {
	
	function getLayout(id, callback) {
		
		var onFinished = function() {return};
		
		if (typeof(callback) == 'function') {
			onFinished = callback;
		}
		
		
		Layout.findOne({ _id: id }, function(err, document) {
			if (!err) {
				onFinished(err, document);
			} else {
				onFinished(err, null);
			}
		});
		
		
	}
	
	
	
	function saveLayout(title, code, callback) {
		
		
		var id = new mongoose.Types.ObjectId();
		
		
		var newLayout = new Layout({
			_id: id,
			title: title,
			code: code
		});
		newLayout.save(function(err) {
			if (!err) {
				if (typeof(callback) == 'function') {
					callback(err, id);
				} else {
					callback(err, null);
				}
			}
		});
	}
	
	
	
	
	return {
		getLayout: getLayout,
		saveLayout: saveLayout
	};
})();
