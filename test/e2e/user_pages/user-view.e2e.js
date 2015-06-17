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
		angularUsersPage.clickLinkRecipe()
			.then(function(){
				expect(browser.getLocationAbsUrl()).toBe('/recipe');
			});

		angularUsersPage.clickLinkFavourites()
			.then(function(){
				expect(browser.getLocationAbsUrl()).toBe('/favourites');
			});

		angularUsersPage.clickLinkRecipeRequest()
			.then(function(){
				expect(browser.getLocationAbsUrl()).toBe('/recipe-request');
			});

	});

	it('should click links are enable', function(){
		expect(angularUsersPage.getLinkRecipe().elementToBeClickable).toBe(true);
		expect(angularUsersPage.getLinkFavourites().elementToBeClickable).toBe(true);
		expect(angularUsersPage.getLinkRecipeRequest().elementToBeClickable).toBe(true);

	});

});