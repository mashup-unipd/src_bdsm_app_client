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

	var $rootScope;
	var $controller;
	var scope;
	var authService;

	beforeEach(function () {
		angular.mock.module('app');
		angular.mock.module('app.auth.services.module');
	});

	beforeEach(function(){
		angular.mock.inject(function (_$rootScope_, _$controller_, _authService_ ) {
			$rootScope = _$rootScope_;
			$controller = _$controller_;
			authService = _authService_;
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



});