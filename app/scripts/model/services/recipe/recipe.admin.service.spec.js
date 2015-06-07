/**
 * Name: app/scripts/model/services/recipe/recipe.admin.service.spec.js
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


describe('Service: recipeAdminService', function() {
	'use strict';

	var factory = undefined;
	var deferred = undefined;
	var dataManagerService = undefined;

	var metricsCorrect = [
		{
			id: 'TheColorRunItalia',
			category: 'facebook',
			category_type: 'page'
		},
		{
			id: 'TheColorRunItalia2',
			category: 'facebook',
			category_type: 'page'
		}
	];

	var recipeCorrect = {
		'title': 'Title',
		'desc': 'This is a desc of a recipe',
		'admin_id': '352324643657457',
		'metrics': metricsCorrect
	};

	///////////////

	beforeEach(function () {

		angular.mock.module('app');
		angular.mock.module('app.recipe.services.module');

		angular.mock.inject(function (_recipeAdminService_, _dataManagerService_, _$q_) {
			factory = _recipeAdminService_;
			dataManagerService = _dataManagerService_;
			deferred = _$q_.defer();

			spyOn(dataManagerService, 'getRestCall').and.returnValue(deferred.promise);
			spyOn(dataManagerService, 'postRestCall').and.returnValue(deferred.promise);
			spyOn(dataManagerService, 'deleteRestCall').and.returnValue(deferred.promise);

		});

	});

	///////////////

	it('should have recipeAdminService factory', function(){
		// TODO
	});

	it('should getRecipesListAll is defined and calls dataManagerService', function(){
		// TODO [opzionale]

	});

	it('should getRecipesListAll return a promise', function(){
		// TODO [opzionale]
	});

	it('should getListOfRecipesRequest is defined and calls dataManagerService', function(){
		// TODO [opzionale]

	});

	it('should getListOfRecipesRequest return a promise', function(){
		// TODO [opzionale]
	});

	it('should createRecipe is defined and calls dataManagerService', function(){
		// defined
		expect(factory.createRecipe(recipeCorrect)).toBeDefined();

		// and calls dataManagerService
		factory.createRecipe(recipeCorrect);
		expect(dataManagerService.postRestCall).toHaveBeenCalled();

	});

	it('should createRecipe return a promise', function(){
		var promise = factory.createRecipe(recipeCorrect);
		expect(promise.then()).toBeDefined();
	});

	it('should deleteRecipe is defined and calls dataManagerService', function(){
		// TODO
	});

	it('should deleteRecipe return a promise', function(){
		// TODO
	});

	it('should discardRecipeRequest is defined and calls dataManagerService', function(){
		// TODO [opzionale]

	});

	it('should discardRecipeRequest return a promise', function(){
		// TODO [opzionale]
	});

	it('should approveRecipeRequest is defined and calls dataManagerService', function(){
		// TODO [opzionale]

	});

	it('should approveRecipeRequest return a promise', function(){
		// TODO [opzionale]
	});

});