/**
 * Name: test/e2e/recipe.e2e.js
 * Author: MashUp
 * Mail: info@mashup-unipd.it
 *
 * Modify
 * Version  Date        Author          Desc
 * ==========================================================
 * 0.0.1    2015-05-30  Tesser Paolo    code module
 * -----------------------------------------------------------
 *
 */

// the keyword require returns an object, which references the value of module.exports for a given file
var AngularRecipePage = require('./recipe.po.js');
var AngularLoginPage = require('../login_page/login.po.js');

describe('Recipe interaction', function() {

	var angularRecipePage;
	var angularLoginPage;

	beforeEach(function(){
		angularRecipePage = new AngularRecipePage();
		angularLoginPage = new AngularLoginPage();
	});

	it('should check if redirect works with a correct input ', function() {
		angularLoginPage.get();
		angularLoginPage.setEmail('info@mashup-unipd.it');
		angularLoginPage.setPassword('GruppoSWE2014');

		angularLoginPage.loginClick()
			.then(function(){
				expect(browser.getLocationAbsUrl()).toBe('/recipe');
			});


	});
});