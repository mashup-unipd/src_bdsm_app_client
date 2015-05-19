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

	var $controller;

	beforeEach(function () {
		angular.mock.module('app');
	});

	beforeEach(function(){
		angular.mock.inject(function (_$controller_) {
			$controller = _$controller_;
		});
	});


	it('should have a UsersConfigCtrl controller', function () {
		expect($controller('UsersConfigCtrl')).toBeDefined();
	});


});