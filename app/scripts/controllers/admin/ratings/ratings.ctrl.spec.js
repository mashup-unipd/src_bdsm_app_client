/**
 * Name: app/scripts/controllers/admin/ratings/ratings.ctrl.spec.js
 * Author: MashUp
 * Mail: info@mashup-unipd.it
 * Desc: unit test to the controller that manage the ratings page
 *
 * Modify
 * Version  Date        Author          Desc
 * ==========================================================
 * 0.0.1    2015-05-15  Tesser Paolo    code module
 * -----------------------------------------------------------
 *
 */


describe('Controller: RatingsCtrl', function() {
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


	it('should have a RatingsCtrl controller', function () {
		expect($controller('RatingsCtrl')).toBeDefined();
	});


});