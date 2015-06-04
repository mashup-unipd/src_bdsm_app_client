/**
 * Name: app/scripts/model/services/user/user.service.spec.js
 * Author: MashUp
 * Mail: info@mashup-unipd.it
 * Desc: unit test to the service that manage user request to back-end
 *
 * Modify
 * Version  Date        Author          Desc
 * ==========================================================
 * 0.0.1    2015-05-15  Tesser Paolo    code module
 * -----------------------------------------------------------
 *
 */


describe('Service: userService', function() {
	'use strict';

	var factory = undefined;
	var dataManagerService = undefined;
	var deferred = undefined;

	beforeEach(function(){

		// tells Angular and Jasmine that before each test is ran it should load the specified module
		angular.mock.module('app'); // insert because it's use to inject service like localStorage
		angular.mock.module('app.user.services.module');

		angular.mock.inject(function(_userService_, _dataManagerService_, _$q_){
			factory = _userService_;
			dataManagerService = _dataManagerService_;
			deferred = _$q_.defer();

			spyOn(dataManagerService, 'getRestCall').and.returnValue(deferred.promise);

		});

	});

	////////////

	it('should have userService factory', function(){
		// TODO
	});

	it('should getFavourites is defined and calls dataManagerService', function(){
		// TODO
	});

	it('should getFavourites return a promise', function(){
		// TODO
	});

	it('should addFavourites is defined and calls dataManagerService', function(){
		// TODO
	});

	it('should addFavourites return a promise', function(){
		// TODO: like 'it' above
	});


	it('should getAccessToken is defined and calls dataManagerService', function(){
		// TODO
	});

	it('should deleteAccessToken return a promise', function(){
		// TODO: like before 'it' above
	});

	it('should getAccessToken is defined and calls dataManagerService', function(){
		// TODO
	});

	it('should deleteAccessToken return a promise', function(){
		// TODO: like before 'it' above
	});

});