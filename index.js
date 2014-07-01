exports.init = function init(spoke, next) {
	// titanium.repo.update
	// titanium.package.sdk
	// titanium.build.platform
	// titanium.test.branch
	// titanium.test.release

	next(null, {});
};

exports.run = function run(next) {
	next();
};