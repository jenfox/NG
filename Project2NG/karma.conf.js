// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
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
    autoWatch: true,
<<<<<<< HEAD
    browsers: ['Chrome', 'PhantomJS'],
	//modified to allow running on Jenkins
=======
    browsers: ['ChromeHeadless'],
    
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--disable-translate',
          '--headless',
          '--disable-gpu',
          '--disable-extensions',
          '--remote-debugging-port=9222',
        ],
      }
    },
    

	  //modified to allow running on Jenkins
>>>>>>> 6c9c6adcae17fff4d646f991484b3fd6221781cc
    singleRun: true,							//was false
	junitReporter: {
    outputDir: "karma-results",
    outputFile: 'karma-results.xml'
    }	//line added
  });
};
