/**
 * Name: app/scripts/model/services/recipe/recipe.service.spec.js
 * Author: MashUp
 * Mail: info@mashup-unipd.it
 * Desc: unit test to the service that manage recipe request to back-end
 *
 * Modify
 * Version  Date        Author          Desc
 * ==========================================================
 * 0.0.1    2015-05-15  Tesser Paolo    code module
 * -----------------------------------------------------------
 *
 */


describe('Service: recipeService', function() {
	'use strict';

	var factory = undefined;
	var dataManagerService = undefined;
	var deferred = undefined;
	var idRecipeCorrect = 'Test';
	// var idRecipeIncorrect = '';

	///////////////

	beforeEach(function () {

		// tells Angular and Jasmine that before each test is ran it should load the specified module
		angular.mock.module('app'); // insert because it's use to inject service like localStorage
		angular.mock.module('app.recipe.services.module');

		angular.mock.inject(function(_recipeService_, _dataManagerService_, _$q_){
			factory = _recipeService_;
			dataManagerService = _dataManagerService_;
			deferred = _$q_.defer();

			spyOn(dataManagerService, 'getRestCall').and.returnValue(deferred.promise);

		});

	});

	///////////////

	it('should have recipeService factory', function(){
		// TODO
	});

	it('should getRecipesList is defined and calls dataManagerService', function(){
		// defined
		expect(factory.getRecipesList()).toBeDefined();

		// and calls dataManagerService
		factory.getRecipesList();
		expect(dataManagerService.getRestCall).toHaveBeenCalled();

	});

	it('should getRecipesList return a promise', function(){
		var promise = factory.getRecipesList();
		expect(promise.then()).toBeDefined();
	});


	it('should getMetricsList is defined and calls dataManagerService', function(){
		// defined
		expect(factory.getMetricsList(idRecipeCorrect)).toBeDefined();

		// and calls dataManagerService
		factory.getMetricsList(idRecipeCorrect);
		expect(dataManagerService.getRestCall).toHaveBeenCalled();

	});

	it('should getMetricsList return a promise', function(){
		var promise = factory.getMetricsList(idRecipeCorrect);
		expect(promise.then()).toBeDefined();
	});


	it('should getMetricsType is defined', function(){
		expect(factory.getMetricType()).toBeDefined();
	});

	it('should getMetricsType return a JSON array with a determinate format', function(){
		var metricType = factory.getMetricType();
		metricType.forEach(function(element){
			expect(element.key).toBeDefined();
			expect(element.value).toBeDefined();
		});

	});


	it('should getMetricsTypeNode is defined', function(){
		expect(factory.getMetricTypeNode()).toBeDefined();
	});

	it('should getMetricsTypeNode return a JSON array with a determinate format and element (FB)', function(){
		var typeFacebook = [
			{
				key: 'event',
				value: 'Event'
			},
			{
				key: 'page',
				value: 'Page'
			}
		];

		var metricType = factory.getMetricTypeNode('facebook');
		expect(metricType).toEqual(typeFacebook);

	});

	it('should getMetricsTypeNode return a JSON array with a determinate format and element (TW)', function(){
		var typeTwitter = [
			{
				key: 'hashtag',
				value: 'Hashtag'
			},
			{
				key: 'page',
				value: 'Page'
			}
		];

		var metricType = factory.getMetricTypeNode('twitter');
		expect(metricType).toEqual(typeTwitter);

	});

	it('should getMetricsTypeNode return a JSON array with a determinate format and element (IG)', function(){
		var typeInstagram = [
			{
				key: 'hashtag',
				value: 'Hashtag'
			},
			{
				key: 'page',
				value: 'Page'
			}
		];

		var metricType = factory.getMetricTypeNode('instagram');
		expect(metricType).toEqual(typeInstagram);

	});

	it('should createRecipeRequest is defined and calls dataManagerService', function(){
		// TODO [opzionale]
	});

	it('should createRecipeRequest return a promise', function(){
		// TODO [opzionale]
	});



});