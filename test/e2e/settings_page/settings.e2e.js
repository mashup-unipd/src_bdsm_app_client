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
var AngularSettingsPage = require('./settings.po.js');
var AngularLoginPage = require('../login_page/login.po.js');

describe('Settings interaction', function() {

	var angularSettingsPage;
	var angularLoginPage;

	beforeEach(function(){
		angularSettingsPage = new AngularSettingsPage();
		angularLoginPage = new AngularLoginPage();

		angularLoginPage.get();
		angularLoginPage.setEmail('info@mashup-unipd.it');
		angularLoginPage.setPassword('GruppoSWE2014');

		angularLoginPage.loginClick()
			.then(function(){
				expect(browser.getLocationAbsUrl()).toBe('/recipe');
			});

	});

	it('should check if redirect works with a correct input ', function() {



		// TODO

	});
});