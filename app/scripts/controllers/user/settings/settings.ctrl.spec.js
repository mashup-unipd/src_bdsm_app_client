/**
 * Name: app/scripts/controllers/user/settings/settings.ctrl.spec.js
 * Author: MashUp
 * Mail: info@mashup-unipd.it
 * Desc: unit test to the controller that manage the settings page
 *
 * Modify
 * Version  Date        Author          Desc
 * ==========================================================
 * 0.0.1    2015-05-15  Tesser Paolo    code module
 * -----------------------------------------------------------
 *
 */


describe('Controller: SettingsCtrl', function() {
	'use strict';

	var $rootScope = undefined;
	var $controller = undefined;
	var scope = undefined;

	var authService = undefined;



	beforeEach(function () {

		angular.mock.module('app.auth.services.module');
		angular.mock.module('app');

	});



	beforeEach(function(){
		angular.mock.inject(function (_$rootScope_, _$controller_, _authService_) {

			// stub values returned from getAcccountInformation method in authService
			var credentials = {
				username: 'mashup',
				email: 'info@mashup-unipd.it'
			};

			authService = _authService_;
			// spy method of the authService and assign a determinated value to return
			spyOn(authService, 'getAccountInformation').and.returnValue(credentials);

			$rootScope = _$rootScope_;
			$controller = _$controller_;
			scope = $rootScope.$new();

		});
	});

	beforeEach(function(){
		$controller('SettingsCtrl as sc', {
			$scope: scope,
			authService: authService
		});
	});

	it('should have a SettingsCtrl controller', function () {
		expect($controller('SettingsCtrl')).toBeDefined();
	});


	it('should new password and confirm new password match', function(){

		var validPwd = {
			pwd: 'test',
			confirmPwd: 'test'
		};

		var valid = scope.sc.matchNewPassword(validPwd.pwd, validPwd.confirmPwd);

		expect(valid).toBeTruthy();

	});

	it('should new password and confirm new password doesn\'t match', function(){

		var invalidPwd = {
			pwd: 'test',
			confirmPwd: 'testfail'
		};

		var invalid = scope.sc.matchNewPassword(invalidPwd.pwd, invalidPwd.confirmPwd);

		expect(invalid).toBeFalsy();

	});

});