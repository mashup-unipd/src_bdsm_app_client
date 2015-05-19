/**
 * Name: app/scripts/controllers/public/register/register.ctrl.spec.js
 * Author: MashUp
 * Mail: info@mashup-unipd.it
 * Desc: unit test to the controller that manage the registration
 *
 * Modify
 * Version  Date        Author          Desc
 * ==========================================================
 * 0.0.1    2015-04-05  Tesser Paolo    code module
 * -----------------------------------------------------------
 *
 */


describe('Controller: RegisterCtrl', function() {
	'use strict';

	var $controller;

	beforeEach(function () {

		angular.mock.module('app');

		angular.mock.inject(function (_$controller_) {
			$controller = _$controller_('RegisterCtrl');
		});
	});



	it('should have a RegisterCtrl controller', function () {
		expect($controller).toBeDefined();
	});

	it('should new password and confirm new password match', function(){
		/* TODO */
	});

});