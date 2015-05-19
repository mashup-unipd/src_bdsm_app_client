/**
 * Name: app/scripts/controllers/public/register/register.ctrl.spec.js
 * Author: MashUp
 * Mail: info@mashup-unipd.it
 * Desc: unit test to the controller that manage the registration
 *
 * Modify
 * Version  Date        Author          Desc
 * ==========================================================
 * 0.0.1    2015-04-05  Tesser Paolo    code test
 * -----------------------------------------------------------
 *
 */


describe('Controller: RegisterCtrl', function() {
	'use strict';

	var $rootScope;
	var $controller;
	var scope;

	beforeEach(function () {
		angular.mock.module('app');
	});

	beforeEach(function(){
		angular.mock.inject(function (_$rootScope_, _$controller_, _$location_) {
			$rootScope = _$rootScope_;
			$controller = _$controller_;
			// location = _$location_;
			scope = $rootScope.$new()
		});
	});

	beforeEach(function(){
		$controller('RegisterCtrl as rc', {
			$scope: scope
		});
	});


	it('should have a RegisterCtrl controller', function () {
		expect($controller('RegisterCtrl')).toBeDefined();
	});

	it('should new password and confirm new password match', function(){

		var validPwd = {
			pwd: 'test',
			confirmPwd: 'test'
		};

		var valid = scope.rc.checkMatchPwd(validPwd.pwd, validPwd.confirmPwd);

		expect(valid).toBeTruthy();

	});

	it('should new password and confirm new password doesn\'t match', function(){

		var invalidPwd = {
			pwd: 'test',
			confirmPwd: 'testfail'
		};

		var invalid = scope.rc.checkMatchPwd(invalidPwd.pwd, invalidPwd.confirmPwd);

		expect(invalid).toBeFalsy();

	});


	it('should correct register redirect to login page', function(){

		var cred = {
			username: 'MashUp',
			mail: 'info@mashup-unipd.it',
			pwd: 'GruppoSWE2014',
			confirmPwd: 'GruppoSWE2014'
		};

		console.log(cred);

		// scope.rc.register(cred);

		// var path = $location.path;

		// expect(path).toHaveBeenCalledWith('/login');

	});

	it ('should incorrect register stay to register page', function(){
		// TODO: like above test
	});

});