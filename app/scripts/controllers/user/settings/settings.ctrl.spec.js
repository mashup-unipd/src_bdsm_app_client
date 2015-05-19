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

	var $controller;

	beforeEach(function () {
		angular.mock.module('app');
	});

	beforeEach(function(){
		angular.mock.inject(function (_$controller_) {
			$controller = _$controller_;
		});
	});


	it('should have a SettingsCtrl controller', function () {
		expect($controller('SettingsCtrl')).toBeDefined();
	});


});