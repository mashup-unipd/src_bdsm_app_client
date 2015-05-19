/**
 * Name: app/scripts/controllers/public/api_docs/api-docs.ctrl.spec.js
 * Author: MashUp
 * Mail: info@mashup-unipd.it
 * Desc: unit test to the controller that manage the api docs page
 *
 * Modify
 * Version  Date        Author          Desc
 * ==========================================================
 * 0.0.1    2015-05-09  Tesser Paolo    code test
 * -----------------------------------------------------------
 *
 */


describe('Controller: ApiDocsCtrl', function() {
	'use strict';

	var $controller;

	beforeEach(function () {

		angular.mock.module('app');

		angular.mock.inject(function (_$controller_) {

			$controller = _$controller_('ApiDocsCtrl');

		});
	});

	it('should have a ApiDocsCtrl controller', function () {
		expect($controller).toBeDefined();
	});


});