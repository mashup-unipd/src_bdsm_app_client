/**
 * Name: test/e2e/login.po.js
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



	// getter
	this.get = function(){
		browser.get('https://mashup-unipd.github.io');
	};

	this.getLoginBtn = function(){
		return loginBtn;
	};

	// Setter
	this.setEmail = function(name){
		return emailInput.sendKeys(name);
	};

	this.setPassword = function(name){
		return passwordInput.sendKeys(name);
	};



	this.loginClick = function(){
		return loginBtn.click();
	};

	this.showLoginError = function(){
		return loginError.getText();
	};


};

module.exports = AngularLoginPage;