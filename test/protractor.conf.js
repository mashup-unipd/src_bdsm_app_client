exports.config = {
    // The address of a running selenium server.
    /* [repo] disabled because I want protractor to start the server for me and not manually */
    // seleniumAddress: 'http://localhost:4444/wd/hub',

    // basePath: '../',

    // Spec patterns are relative to the location of this config.
    specs: [
        '../test/e2e/*.e2e.js'
    ],


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
