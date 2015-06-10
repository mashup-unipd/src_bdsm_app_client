/**
 * Name: app/scripts/controllers/admin/recipe_config/recipe-config.ctrl.spec.js
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


describe('Controller: InsertRecipeCtrl', function() {
	'use strict';

	var $controller = undefined;
	var scope = undefined;
	var $rootScope = undefined;
	var recipeService = undefined;
	var recipeAdminService = undefined;
	var authService = undefined;
	var deferred = undefined;

	var typeMetric = [
		{
			key: 'facebook',
			value: 'Facebook'
		},
		{
			key: 'twitter',
			value: 'Twitter'
		},
		{
			key: 'instagram',
			value: 'Instagram'
		}
	];

	beforeEach(function () {
		angular.mock.module('app');
	});

	beforeEach(function(){
		angular.mock.inject(function (_$controller_, _$rootScope_, _$q_, _recipeService_, _recipeAdminService_, _authService_) {
			$controller = _$controller_;
			$rootScope = _$rootScope_;
			recipeService = _recipeService_;
			recipeAdminService = _recipeAdminService_;
			authService = _authService_;
			scope = $rootScope.$new();
			deferred = _$q_.defer();

			spyOn(recipeService, 'getMetricType').and.returnValue(typeMetric);

		});
	});

	beforeEach(function(){
		$controller('InsertRecipeCtrl as sc', {
			$scope: scope
		});
	});


	it('should have a InsertRecipeCtrl controller', function () {
		expect($controller('InsertRecipeCtrl')).toBeDefined();
	});

	it('should metric array must be length -1 after removeMetric function', function(){
		scope.sc.tempMetrics = [
			{
				id: '#test',
				category: 'twitter',
				category_type: 'hashtag'
			}
		];

		scope.sc.removeMetric(0);
		expect(scope.sc.tempMetrics.length).toBe(0);

	});

	it('should return true if temp metric array has 2 or more element', function(){
		scope.sc.tempMetrics = [
			{
				id: '#test',
				category: 'twitter',
				category_type: 'hashtag'
			},
			{
				id: '#test2',
				category: 'twitter',
				category_type: 'hashtag'
			}
		];

		expect(scope.sc.checkMetricsQuantity()).toBeTruthy();

	});

	it('should return false if temp metric array has less than 2 element', function(){
		scope.sc.tempMetrics = [
			{
				id: '#test',
				category: 'twitter',
				category_type: 'hashtag'
			}
		];

		expect(scope.sc.checkMetricsQuantity()).toBeFalsy();
	});

	it('should categories array must be length 3 and have a determinate format', function(){
		expect(scope.sc.categories.length).toBe(3);

		scope.sc.categories.forEach(function(element){
			expect(element.key).toBeDefined();
			expect(element.value).toBeDefined();
		});

	});

	it('should metrics array must be length +1 after a successful metric insert', function(){
		scope.sc.tempMetrics = [
			{
				id: '#test',
				category: 'twitter',
				category_type: 'hashtag'
			}
		];

		var length = scope.sc.tempMetrics.length;
		scope.sc.addMetric('facebook', 'page', 'TestOfficial');

		expect(scope.sc.tempMetrics.length).toBe(length + 1);

		expect(scope.sc.insertMetricSuccess).toBeTruthy();
		expect(scope.sc.insertMetricEmptyError).toBeFalsy();
		expect(scope.sc.insertMetricDuplicateError).toBeFalsy();
		expect(scope.sc.metricQuantityError).toBeFalsy();
		expect(scope.sc.removeMetricSuccess).toBeFalsy();

	});

	it('should metrics array must be length as previous after a fail insert due to an undefined val', function(){
		scope.sc.tempMetrics = [
			{
				id: '#test',
				category: 'twitter',
				category_type: 'hashtag'
			}
		];

		var length = scope.sc.tempMetrics.length;

		scope.sc.addMetric(undefined, 'page', 'TestOfficial');
		expect(scope.sc.tempMetrics.length).toBe(length);
		expect(scope.sc.insertMetricEmptyError).toBeTruthy();

		scope.sc.addMetric('facebook', undefined, 'TestOfficial');
		expect(scope.sc.tempMetrics.length).toBe(length);
		expect(scope.sc.insertMetricEmptyError).toBeTruthy();


		scope.sc.addMetric('facebook', 'page', undefined);
		expect(scope.sc.tempMetrics.length).toBe(length);
		expect(scope.sc.insertMetricEmptyError).toBeTruthy();

	});

	it('should metrics array must be length as previous after a fail insert due to a duplicate metric', function(){
		scope.sc.tempMetrics = [
			{
				id: '#test',
				category: 'twitter',
				category_type: 'hashtag'
			}
		];

		var length = scope.sc.tempMetrics.length;

		scope.sc.addMetric('twitter', 'hashtag', '#test');
		expect(scope.sc.tempMetrics.length).toBe(length);
		expect(scope.sc.insertMetricDuplicateError).toBeTruthy();
	});

});