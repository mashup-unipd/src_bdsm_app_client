/**
 * Name: app/scripts/controllers/user/recipe/metrics.ctrl.spec.js
 * Author: MashUp
 * Mail: info@mashup-unipd.it
 * Desc: unit test to the controller that manage the metrics page
 *
 * Modify
 * Version  Date        Author          Desc
 * ==========================================================
 * 0.0.1    2015-05-15  Tesser Paolo    code module
 * -----------------------------------------------------------
 * 0.0.2		2015-06-03	Tesser Paolo		add test with real promise implement
 * -----------------------------------------------------------
 *
 */


describe('Controller: MetricsCtrl', function() {
	'use strict';

	var $controller = undefined;
	var $rootScope = undefined;
	var scope = undefined;
	var recipeService = undefined;
	var deferred = undefined;
	var stateparams = {};
	var title = undefined;

	////////////////

	beforeEach(function () {
		angular.mock.module('app.recipe.services.module');
		angular.mock.module('app');
	});

	beforeEach(function(){
		angular.mock.inject(function (_$controller_, _$rootScope_, _$q_, _recipeService_) {
			$controller = _$controller_;
			$rootScope = _$rootScope_;
			scope = $rootScope.$new();
			deferred = _$q_.defer();
			recipeService = _recipeService_;

		stateparams = {
			title: 'TestTitle'
		};



		});
	});

	beforeEach(function(){
		$controller('MetricsCtrl as sc', {
			$scope: scope,
			$stateParams: stateparams,
			recipeService: recipeService
		});
	});

	////////////////

	it('should have a MetricsCtrl controller', function () {
		expect($controller('MetricsCtrl')).toBeDefined();
	});

	it('should getMetricTypes is defined and calls recipeService', function(){
		// defined
		// expect(scope.sc.getMetricTypes).toBeDefined();

		// and calls recipeService
		// scope.sc.getMetricTypes();
		// expect(recipeService.getMetricTypes).toHaveBeenCalled();

	});








});