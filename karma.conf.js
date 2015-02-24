module.exports = function(config){
	config.set({
		autoWatch: true,
		browsers:['PhantomJS'],
		frameworks: ['jasmine'],
		basePath: '.',
		files: [
			//File Set List here 
			// angular Mock and other libraries
			'app/**/*.js',
			'test/**/*.js'
		]
	});
};