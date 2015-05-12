exports.config = {
    // The address of a running selenium server.
    /* [repo] disabled because I want protractor to start the server for me and not manually */
    // seleniumAddress: 'http://localhost:4444/wd/hub',

    // The location of the selenium standalone server .jar file, relative
    // to the location of this config. If no other method of starting selenium
    // is found, this will default to
    // node_modules/protractor/selenium/selenium-server...
    // seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.41.0.jar',

    // The port to start the selenium server on, or null if the server should
    // find its own unused port.
    // seleniumPort: 4444,

    // Spec patterns are relative to the location of this config.
    specs: [
        '../test/e2e/*.e2e.js'
    ],

    maxSession: 1,

    multiCapabilities: [{
        'browserName': 'firefox'
    }, {
        'browserName': 'chrome'
    }],


    // A base URL for your application under test. Calls to protractor.get()
    // with relative paths will be prepended with this. 'http://localhost:8000'
    baseUrl: 'http://localhost:9001', /* [repo] default test port with Yeoman */

    frameworks: ['jasmine'],

    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: false,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 1000000000
    }
};
