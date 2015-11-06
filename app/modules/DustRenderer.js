var dust = require('dustjs-linkedin');




module.exports = (function() {
	
	function render(code, callback) {
		// var compiledCode = dust.compile(code, 'render');
		dust.renderSource(code, { title: 'Test 3' }, function(err, output) {
			if (!err) {
				if (typeof(callback) == 'function') {
					callback(output);
				}
			} else {
				if (typeof(callback) == 'function') {
					callback(null);
				}
			}
		});
	}
	
	
	return {
		render: render
	};
})();