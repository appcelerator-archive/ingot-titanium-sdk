module.exports = function (job, callback) {
	var results = {
		success: true,
		tests: [
			{ name: 'foo', passed: true, time: 234 },
			{ name: 'bar', passed: true, time: 456 }
		]
	};
	callback(null, results);
};