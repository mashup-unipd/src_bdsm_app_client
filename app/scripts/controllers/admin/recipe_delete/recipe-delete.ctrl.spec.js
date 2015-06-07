/**
 * Name: app/scripts/controllers/admin/recipe_delete/recipe-delete.ctrl.spec.js
 * Author: MashUp
 * Mail: info@mashup-unipd.it
 * Desc: unit test to the controller that manage the recipe page
 *
 * Modify
 * Version  Date        Author          Desc
 * ==========================================================
 * 0.0.1    2015-06-03  Tesser Paolo    code module
 * -----------------------------------------------------------
 *
 */


describe('Controller: RecipeDeleteCtrl', function() {
	'use strict';

	var $controller = undefined;
	var $rootScope = undefined;
	var scope = undefined;
	var recipeAdminService = undefined;
	var deferred = undefined;

	////////////////

	beforeEach(function () {
		angular.mock.module('app.recipe.services.module');
		angular.mock.module('app');
	});

	beforeEach(function(){
		angular.mock.inject(function (_$controller_, _$rootScope_, _$q_, _recipeAdminService_) {
			$controller = _$controller_;
			$rootScope = _$rootScope_;
			scope = $rootScope.$new();
			deferred = _$q_.defer();
			recipeAdminService = _recipeAdminService_;

			spyOn(recipeAdminService, 'deleteRecipe').and.returnValue(deferred.promise);
			spyOn(scope, '$emit');

		});
	});

	beforeEach(function(){
		$controller('RecipeDeleteCtrl as sc', {
			$scope: scope,
			recipeAdminService: recipeAdminService
		});
	});

	////////////////

	it('should have a RecipeDeleteCtrl controller', function () {
		// expect($controller('RecipeDeleteCtrl')).toBeDefined();
	});

	it('should $emit function must be call with deleteRecipe event', function(){
		var idRecipe = 'Test';
		var index = 1;

		deferred.resolve();

		scope.sc.deleteRecipe(idRecipe, index);

		// This makes sure that all callbacks of promises will be called
		$rootScope.$digest();

		expect(scope.$emit).toHaveBeenCalledWith('deleteRecipe', index);
	});

});