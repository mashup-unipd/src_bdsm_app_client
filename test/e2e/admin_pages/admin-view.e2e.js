/**
 * Name: test/e2e/admin-view.e2e.js
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
var AngularAdminPages = require('./admin-view.po.js');
var AngularLoginPage = require('../login_page/login.po.js');

describe('Admin view', function() {

	var angularAdminPages;
	var angularLoginPage;

	beforeEach(function(){
		angularAdminPages = new AngularAdminPages();
		angularLoginPage = new AngularLoginPage();

		angularLoginPage.get();
		angularLoginPage.setEmail('info@mashup-unipd.it');
		angularLoginPage.setPassword('GruppoSWE2014');

		angularLoginPage.loginClick()
			.then(function(){
				expect(browser.getLocationAbsUrl()).toBe('/recipe');
			});

	});

	it('should check if menu is show correctly', function() {

		// TODO

	});
});