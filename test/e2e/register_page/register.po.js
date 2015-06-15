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

var AngularRegisterPage = function(){

	var usernameInput = element(by.model('rc.credentials.username'));
	var emailInput = element(by.model('rc.credentials.email'));
	var passwordInput = element(by.model('rc.credentials.pwd'));
	var passwordRepeatInput = element(by.model('rc.credentials.pwd_repeat'));


	var registerError = element(by.css('.bg-error'));
	var registerSuccess = element(by.css('.bg-success'));
	var registerBtn = element(by.css('.btn'));


	this.get = function(){
		browser.get('http://mashup-unipd.github.io/register');
	};

	this.setUsername = function(name){
		usernameInput.sendKeys(name);
	};

	this.setEmail = function(name){
		emailInput.sendKeys(name);
	};

	this.setPassword = function(name){
		passwordInput.sendKeys(name);
	};

	this.setPasswordRepeat = function(name){
		passwordRepeatInput.sendKeys(name);
	};

	this.registerClick = function(){
		registerBtn.click();
	};

	this.showRegisterError = function(){
		return registerError.getText();
	};

	this.showRegisterSuccess = function(){
		return registerSuccess.getText();
	};

};

module.exports = AngularRegisterPage;