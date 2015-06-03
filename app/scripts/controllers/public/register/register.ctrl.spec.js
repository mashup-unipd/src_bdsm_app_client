/**
 * Name: app/scripts/controllers/public/register/register.ctrl.spec.js
 * Author: MashUp
 * Mail: info@mashup-unipd.it
 * Desc: unit test to the controller that manage the registration
 *
 * Modify
 * Version	Date        Author          Desc
 * ==========================================================
 * 0.0.1	2015-04-05  Tesser Paolo    code test
 * -----------------------------------------------------------
 * 0.0.2	2015-05-30	Tesser Paolo		test register function with a authService mock
 * -----------------------------------------------------------
 *
 */


describe('Controller: RegisterCtrl', function() {
	'use strict';

	var $rootScope = undefined;
	var $controller = undefined;
	var scope = undefined;
	var authService = undefined;
	var deferred = undefined;

	beforeEach(function () {
		angular.mock.module('app');
	});

	beforeEach(function(){
		angular.mock.inject(function (_$rootScope_, _$controller_, _authService_, _$q_) {
			$rootScope = _$rootScope_;
			$controller = _$controller_;
			scope = $rootScope.$new();

			deferred = _$q_.defer();
			authService = _authService_;
			spyOn(authService, 'register').and.returnValue(deferred.promise);

		});
	});

	beforeEach(function(){
		$controller('RegisterCtrl as sc', {
			$scope: scope
		});
	});


	it('should have a RegisterCtrl controller', function () {
		expect($controller('RegisterCtrl')).toBeDefined();
	});

	it('should new password and confirm new password match', function(){

		var validPwd = {
			pwd: 'test',
			confirmPwd: 'test'
		};

		var valid = scope.sc.checkMatchPwd(validPwd.pwd, validPwd.confirmPwd);

		expect(valid).toBeTruthy();
		expect(scope.sc.matchPwd).toBeFalsy();


	});

	it('should new password and confirm new password doesn\'t match', function(){

		var invalidPwd = {
			pwd: 'test',
			confirmPwd: 'testfail'
		};

		var invalid = scope.sc.checkMatchPwd(invalidPwd.pwd, invalidPwd.confirmPwd);

		expect(invalid).toBeFalsy();
		expect(scope.sc.matchPwd).toBeTruthy();

	});


	it('should correct register set true and change credential\'s fields in empty', function(){
		var cred = {
			username: 'mashup',
			email: 'info@mashup-unipd.it',
			pwd: 'test',
			pwd_repeat: 'test'
		};

		scope.sc.credentials = cred;

		scope.sc.register(cred);

		expect(authService.register).toHaveBeenCalledWith(cred);

		deferred.resolve();

		// This makes sure that all callbacks of promises will be called
		$rootScope.$digest();

		expect(scope.sc.registerSuccess).toBeTruthy();
		expect(scope.sc.matchPwd).toBeFalsy();

		expect(scope.sc.credentials.username).toEqual('');
		expect(scope.sc.credentials.email).toEqual('');
		expect(scope.sc.credentials.pwd).toEqual('');
		expect(scope.sc.credentials.pwd_repeat).toEqual('');

	});

	it ('should incorrect register set false and not change credential\'s fields', function(){
		var cred = {
			username: 'mashup',
			email: 'info@mashup-unipd.it',
			pwd: 'test',
			pwd_repeat: 'testtest'
		};

		scope.sc.credentials = cred;

		scope.sc.register(cred);

		deferred.resolve();

		// This makes sure that all callbacks of promises will be called
		$rootScope.$digest();

		expect(scope.sc.registerSuccess).toBeFalsy();
		expect(scope.sc.matchPwd).toBeTruthy();

		expect(scope.sc.credentials.username).toEqual('mashup');
		expect(scope.sc.credentials.email).toEqual('info@mashup-unipd.it');
		expect(scope.sc.credentials.pwd).toEqual('test');
		expect(scope.sc.credentials.pwd_repeat).toEqual('testtest');

	});

});