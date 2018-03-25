// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    files: ['test/**/*.js'],
    plugins: [
      require('karma-jasmine'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-chrome-launcher'),
      'karma-junit-reporter',
      require('@angular/cli/plugins/karma')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'kjhtml', 'dots', 'junit'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,

    browsers: ['HeadlessChrome', 'Chrome'],
    
    customLaunchers: {
      HeadlessChrome: {
        base: 'ChromeHeadless',
        flags: [
          '--disable-translate', 
          '--disable-extensions',
          '--disable-gpu',
          '--no-first-run', 
          '--disable-background-networking',
          '--remote-debugging-port=9223'
        ]
      }
    },
  
	  //modified to allow running on Jenkins
    singleRun: true,							//was false
	junitReporter: {
		outputDir: "karma-results",
		outputFile: 'karma-results.xml'
    }	//line added
  });
};
