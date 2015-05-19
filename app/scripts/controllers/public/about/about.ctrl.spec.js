/**
 * Name: app/scripts/controllers/public/about/about.ctrl.spec.js
 * Author: MashUp
 * Mail: info@mashup-unipd.it
 * Desc: unit test to the controller that manage the about page
 *
 * Modify
 * Version  Date        Author          Desc
 * ==========================================================
 * 0.0.1    2015-05-08  Tesser Paolo    code test
 * -----------------------------------------------------------
 *
 */


describe('Controller: AboutCtrl', function() {
	'use strict';

	var $controller;

	beforeEach(function () {

		angular.mock.module('app');

		angular.mock.inject(function (_$controller_) {

			$controller = _$controller_('AboutCtrl');

		});
	});

	it('should have a AboutCtrl controller', function () {
		expect($controller).toBeDefined();
	});


});