/**
 * Name: test/e2e/user-view.e2e.js
 * Author: MashUp
 * Mail: info@mashup-unipd.it
 *
 * Modify
 * Version  Date        Author          Desc
 * ==========================================================
 * 0.0.1    2015-06-10  Tesser Paolo    code module
 * -----------------------------------------------------------
 *
 */

// the keyword require returns an object, which references the value of module.exports for a given file
var AngularUsersPages = require('./user-view.po.js');
var AngularLoginPage = require('../login_page/login.po.js');

describe('Users view', function() {

	var angularUsersPage;
	var angularLoginPage;

	beforeEach(function(){
		angularUsersPage = new AngularUsersPages();
		angularLoginPage = new AngularLoginPage();

		angularLoginPage.get();
		angularLoginPage.setEmail('tesser.paolo@mashup-unipd.it');
		angularLoginPage.setPassword('paolo92');

		angularLoginPage.loginClick()
			.then(function(){
				expect(browser.getLocationAbsUrl()).toBe('/recipe');
			});

	});

	it('should check if menu is show correctly', function() {



		// TODO

	});
});