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

	var $rootScope = undefined;
	var $controller = undefined;
	var scope = undefined;
	var ApiDocsModel = undefined;

	beforeEach(function () {

		// angular.mock.module('app.api-docs.data.module');
		angular.mock.module('app');


		angular.mock.inject(function (_$rootScope_, _$controller_, _ApiDocsModel_) {


			ApiDocsModel = _ApiDocsModel_;

			$rootScope = _$rootScope_;
			$controller = _$controller_;
			scope = $rootScope.$new();

		});
	});

	beforeEach(function(){
		$controller('ApiDocsCtrl as adc', {
			$scope: scope,
			ApiDocsModel: ApiDocsModel
		});
	});


	it('should have a ApiDocsCtrl controller', function () {
		expect($controller('ApiDocsCtrl')).toBeDefined();
	});

	it('should length of the public API\'s list is ', function(){
		// TODO
	});

	it('should objects in the list have a determinate format', function(){
		// TODO
	});

});