/**
 * Name: test/e2e/login.e2e.js
 * Author: MashUp
 * Mail: info@mashup-unipd.it
 *
 * Modify
 * Version  Date        Author          Desc
 * ==========================================================
 * 0.0.1    2015-05-10  Tesser Paolo    code module
 * -----------------------------------------------------------
 * 0.0.2    2015-05-30  Tesser Paolo    insert login page like PageObject pattern
 * -----------------------------------------------------------
 *
 */

// the keyword require returns an object, which references the value of module.exports for a given file
var AngularRegisterPage = require('./register.po.js');


describe('Register interaction', function() {

	var angularRegisterPage;

	beforeEach(function(){
		angularRegisterPage = new angularRegisterPage();
	});

	it('should check if show a successful message with a correct input', function() {
		angularRegisterPage.get();
		expect(browser.getLocationAbsUrl()).toBe('/register');

	});

	it('should check if show a failure message with a incorrect input', function() {
		angularRegisterPage.get();
		expect(browser.getLocationAbsUrl()).toBe('/register');

	});


});