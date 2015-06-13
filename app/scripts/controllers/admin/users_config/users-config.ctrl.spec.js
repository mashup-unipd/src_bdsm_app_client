/**
 * Name: app/scripts/controllers/admin/user_config/user-config.ctrl.spec.js
 * Author: MashUp
 * Mail: info@mashup-unipd.it
 * Desc: unit test to the controller that manage the recipe config page
 *
 * Modify
 * Version  Date        Author          Desc
 * ==========================================================
 * 0.0.1    2015-05-15  Tesser Paolo    code module
 * -----------------------------------------------------------
 *
 */


describe('Controller: UsersConfigCtrl', function() {
	'use strict';

	var $rootScope = undefined;
	var $controller = undefined;
	var scope = undefined;
	var authService = undefined;

	beforeEach(function () {
		angular.mock.module('app');
	});

	beforeEach(function(){
		angular.mock.inject(function (_$rootScope_, _$controller_, _authService_) {
			// stub values returned from getAcccountInformation method in authService
			var credentials = {
				username: 'mashup',
				email: 'info@mashup-unipd.it'
			};

			$rootScope = _$rootScope_;
			$controller = _$controller_;
			scope = $rootScope.$new();
			authService = _authService_;

			// spy method of the authService and assign a determinated value to return
			spyOn(authService, 'getAccountInformation').and.returnValue(credentials);

		});

	});

	beforeEach(function(){
		$controller('UsersConfigCtrl as sc', {
			$scope: scope,
			authService: authService
		});
	});

	it('should have a UsersConfigCtrl controller', function () {
		expect($controller('UsersConfigCtrl')).toBeDefined();
	});


});