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

var AngularLoginPage = function(){

	var emailInput = element(by.model('lc.credentials.email'));
	var passwordInput = element(by.model('lc.credentials.pwd'));

	var loginError = element(by.css('.text-danger'));

	var loginBtn = element(by.css('.btn'));


	this.get = function(){
		browser.get('http://mashup-unipd.github.io');
	};

	this.setEmail = function(name){
		emailInput.sendKeys(name);
	};

	this.setPassword = function(name){
		passwordInput.sendKeys(name);
	};

	this.loginClick = function(){
		loginBtn.click();
	};

	this.showLoginError = function(){
		return loginError.getText();
	};


};

module.exports = AngularLoginPage;