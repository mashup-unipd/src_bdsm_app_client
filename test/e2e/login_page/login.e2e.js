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
var AngularLoginPage = require('./login.po.js');



describe('Login interaction', function() {

		var angularLoginPage;

		beforeEach(function(){
			angularLoginPage = new AngularLoginPage();
		});

    it('should check if redirect works with a correct input', function() {

			angularLoginPage.get();

			expect(browser.getLocationAbsUrl()).toBe('/login');

			angularLoginPage.setEmail('info@mashup-unipd.it');
			angularLoginPage.setPassword('GruppoSWE2014')
				.then(function(){
					// console.log(angularLoginPage.getLoginBtn());
					// expect(true).elementToBeClickable(angularLoginPage.getLoginBtn());
					expect(angularLoginPage.getLoginBtn().isEnabled()).toBe(true);
				});


			angularLoginPage.loginClick()
				.then(function(){
					expect(browser.getLocationAbsUrl()).toBe('/recipe');
				});



    });

	it('should check if redirect works with a incorrect input due by email', function() {

		angularLoginPage.get();

		angularLoginPage.setEmail('infowrong@mashup-unipd.it');
		angularLoginPage.setPassword('GruppoSWE2014')
			.then(function(){
				expect(angularLoginPage.getLoginBtn().isEnabled()).toBe(true);
			});

		angularLoginPage.loginClick()
			.then(function(){
				expect(browser.getLocationAbsUrl()).toBe('/login');
			});

		expect(angularLoginPage.showLoginError()).toBe('Fail login operation.');

	});

	it('should check if redirect works with a incorrect input due by password', function() {

		angularLoginPage.get();

		angularLoginPage.setEmail('infowrong@mashup-unipd.it');
		angularLoginPage.setPassword('GruppoSWE2014wrong')
			.then(function(){
				expect(angularLoginPage.getLoginBtn().isEnabled()).toBe(true);
			});

		angularLoginPage.loginClick()
			.then(function(){
				expect(browser.getLocationAbsUrl()).toBe('/login');
			});

		expect(angularLoginPage.showLoginError()).toBe('Fail login operation.');

	});

	it('should check if redirect works with a incorrect input due by empty password and email', function() {

		angularLoginPage.get();

		angularLoginPage.setEmail('');
		angularLoginPage.setPassword('')
			.then(function(){
				expect(angularLoginPage.getLoginBtn().isEnabled()).toBe(false);
			});

	});



});