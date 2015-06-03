/**
 * Name: app/scripts/controllers/user/token_config/token-config.ctrl.spec.js
 * Author: MashUp
 * Mail: info@mashup-unipd.it
 * Desc: unit test to the controller that manage token config page
 *
 * Modify
 * Version  Date        Author          Desc
 * ==========================================================
 * 0.0.1    2015-05-15  Tesser Paolo    code module
 * -----------------------------------------------------------
 *
 */


describe('Controller: TokenConfigCtrl', function() {
	'use strict';

	var $controller = undefined;
	var $rootScope = undefined;
	var deferred = undefined;
	var scope = undefined;
	var authService = undefined
	var userService = undefined;
	var ApiDocsModel = undefined;

	///////////////

	beforeEach(function () {
		angular.mock.module('app');
	});

	beforeEach(function(){
		angular.mock.inject(function (_$controller_, _$rootScope_, _$q_, _ApiDocsModel_, _authService_, _userService_) {

			// stub values returned from getAcccountInformation method in authService
			var credentials = {
				username: 'mashup',
				email: 'info@mashup-unipd.it'
			};

			// stub values returned from getRest method in ApiDocsModel
			var rest = [
				{
					req: "recipes",
					type: 'GET',
					desc: 'Get the list of the available recipes'
				},
				{
					req: "recipes/{recipe_id}/metrics",
					type: 'GET',
					desc: 'Get the list of a recipe\'s metrics'
				}
			];

			ApiDocsModel = _ApiDocsModel_;
			spyOn(ApiDocsModel, 'getRest').and.returnValue(rest);

			authService = _authService_;
			// spy method of the authService and assign a determinated value to return
			spyOn(authService, 'getAccountInformation').and.returnValue(credentials);


			$controller = _$controller_;
			$rootScope = _$rootScope_;
			scope = $rootScope.$new();

			deferred = _$q_.defer();
			userService = _userService_;

		});
	});

	beforeEach(function(){
		$controller('TokenConfigCtrl as sc', {
			$scope: scope,
			authService: authService,
			userService: userService,
			ApiDocsModel: ApiDocsModel
		});
	});

	///////////////

	it('should have a TokenConfigCtrl controller', function () {
		expect($controller('TokenConfigCtrl')).toBeDefined();
	});

	it('should length of the public API\'s list is not empty', function(){
		var lenList = scope.sc.restServices.length;
		expect(lenList).toBe(2);

	});

	it('should objects in the list have a determinate format if return value it\'s correct', function(){
		var restListObj = scope.sc.restServices;

		restListObj.forEach(function(element){
			expect(element.req).toBeDefined();
			expect(element.type).toBeDefined();
			expect(element.desc).toBeDefined();
		});

	});

	it('should accessToken attribute must be length like describe in Analisi dei Requisiti document', function(){
		// TODO
	});

	it('should accessToken attribute must be empty after a successful delete operation', function(){
		// TODO
	});

	it('should accessToken attribute mustn\'t be empty if token has been generated', function(){
		// TODO
	});

});