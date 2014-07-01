exports.init = function init(spoke, next) {
	spoke.registerJobHandler('titanium.repo.update', require('./lib/repo-update'));
	spoke.registerJobHandler('titanium.package.sdk', require('./lib/package-sdk'));
	spoke.registerJobHandler('titanium.build.platform', require('./lib/build-platform'));
	spoke.registerJobHandler('titanium.test.branch', require('./lib/test-branch'));
	spoke.registerJobHandler('titanium.test.release', require('./lib/test-release'));
	next(null, {
		/* titanium sdk specific capabilities */
	});
};