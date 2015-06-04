/**
 * Name: app/scripts/model/services/user/user.admin.service.spec.js
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


describe('Service: userAdminService', function() {
	'use strict';

	var factory = undefined;
	var dataManagerService = undefined;
	var deferred = undefined;

	beforeEach(function(){

		// tells Angular and Jasmine that before each test is ran it should load the specified module
		angular.mock.module('app'); // insert because it's use to inject service like localStorage
		angular.mock.module('app.user.services.module');

		angular.mock.inject(function(_userAdminService_, _dataManagerService_, _$q_){
			factory = _userAdminService_;
			dataManagerService = _dataManagerService_;
			deferred = _$q_.defer();

			spyOn(dataManagerService, 'getRestCall').and.returnValue(deferred.promise);

		});

	});

	////////////

	it('should have userAdminService factory', function(){
		// TODO
	});

	it('should getListOfUsers is defined and calls dataManagerService', function(){
		// defined
		expect(factory.getListOfUsers()).toBeDefined();

		// and calls dataManagerService
		factory.getListOfUsers();
		expect(dataManagerService.getRestCall).toHaveBeenCalled();

	});

	it('should getListOfUsers return a promise', function(){
		var promise = factory.getListOfUsers();
		expect(promise.then()).toBeDefined();
	});

	it('should editUserPermissions is defined and calls dataManagerService', function(){
		// TODO
	});

	it('should editUserPermissions return a promise', function(){
		// TODO: like 'it' above
	});


	it('should deleteUserAccount is defined and calls dataManagerService', function(){
		// TODO
	});

	it('should deleteUserAccount return a promise', function(){
		// TODO: like before 'it' above
	});

});