/**
 * Name: app/scripts/controllers/user/recipe/recipe.ctrl.spec.js
 * Author: MashUp
 * Mail: info@mashup-unipd.it
 * Desc: unit test to the controller that manage the recipe page
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


describe('Controller: RecipeCtrl', function() {
	'use strict';
	var $controller = undefined;
	var $rootScope = undefined;
	var scope = undefined;
	var recipeService = undefined;
	var authService = undefined;
	var deferred = undefined;

	////////////////

	beforeEach(function () {
		angular.mock.module('app.recipe.services.module');
		angular.mock.module('app');
	});

	beforeEach(function(){
		angular.mock.inject(function (_$controller_, _$rootScope_,_$q_, _recipeService_, _authService_) {
			$controller = _$controller_;
			$rootScope = _$rootScope_;
			scope = $rootScope.$new();
			deferred = _$q_.defer();
			recipeService = _recipeService_;
			authService = _authService_;

			spyOn(recipeService, 'getRecipesList').and.returnValue(deferred.promise);
			spyOn(authService, 'isAdmin').and.returnValue(true);
			spyOn(scope, '$on');

		});
	});

	beforeEach(function(){
		$controller('RecipeCtrl as sc', {
			$scope: scope,
			recipeService: recipeService,
			authService: authService
		});
	});

	////////////////

	it('should have a RecipeCtrl controller', function () {
		// expect($controller('RecipeCtrl')).toBeDefined();
	});

	it('should getListOfRecipes is defined and calls recipeService', function(){
		// defined
		expect(scope.sc.getListOfRecipes).toBeDefined();

		// and calls recipeService
		scope.sc.getListOfRecipes();
		expect(recipeService.getRecipesList).toHaveBeenCalled();

	});

	it('should getListOfRecipes set listRecipes correctly if promise is resolved', function(){
		var recipes = {
			items: [
				{
					desc: 'Test description',
					id: '4809889046069248',
					title: 'Test title'
				},
				{
					desc: 'Test description 2',
					id: '4809889046069249',
					title: 'Test title 2'
				}
			]
		};

		deferred.resolve(recipes);

		// This makes sure that all callbacks of promises will be called
		$rootScope.$digest();

		scope.sc.getListOfRecipes();

		expect(scope.sc.listRecipes.length).toBe(2);

	});

	it('should getListOfRecipes set listRecipes empty if promise is resolved but there aren\'t recipes', function(){
		var recipes = {
			items: []
		};

		deferred.resolve(recipes);

		// This makes sure that all callbacks of promises will be called
		$rootScope.$digest();

		scope.sc.getListOfRecipes();

		expect(scope.sc.listRecipes.length).toBe(0);

	});

	it('should isAdmin must be true if user is an admin', function(){
		expect(scope.sc.isAdmin).toBe(true);
	})

});