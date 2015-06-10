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

    it('should check if redirect works with a correct input ', function() {
			var angularLoginPage = new AngularLoginPage();
			/*
			angularLoginPage.get();
			angularLoginPage.setEmail('info@mashup-unipd.it');
			angularLoginPage.setPassword('gruppoSWE2014');
			*/
    });
});