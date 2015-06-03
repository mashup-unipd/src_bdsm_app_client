/**
 * Name: app/scripts/controllers/public/login/login.ctrl.spec.js
 * Author: MashUp
 * Mail: info@mashup-unipd.it
 * Desc: unit test to the controller that manage the authentication
 *
 * Modify
 * Version  Date        Author          Desc
 * ==========================================================
 * 0.0.1    2015-05-15  Tesser Paolo    code module
 * -----------------------------------------------------------
 * 0.0.2		2015-05-30	Tesser Paolo		insert check promise
 * -----------------------------------------------------------
 *
 *
 */


describe('Controller: LoginCtrl', function() {
	'use strict';

	var $rootScope = undefined;
	var $controller = undefined;
	var scope = undefined;
	var authService = undefined;
	var deferred = undefined;

	//////////////

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
			spyOn(authService, 'login').and.returnValue(deferred.promise);

		});
	});

	beforeEach(function(){
		$controller('LoginCtrl as sc', {
			$scope: scope
		});
	});

	//////////////

	it('should have a LoginCtrl controller', function () {
		expect($controller('LoginCtrl')).toBeDefined();
	});

	it('should correct login set true and change credential\'s fields in empty', function(){
		var cred = {
			email: 'info@mashup-unipd.it',
			pwd: 'test'
		};

		var resp = {
			email: 'info@mashup-unipd.it',
			username: 'mashup',
			oauth_token: '42355325325353252352',
			permission: 'admin'
		};

		scope.sc.credentials = cred;
		scope.sc.login(cred);

		expect(authService.login).toHaveBeenCalledWith(cred);

		deferred.resolve(resp);

		// This makes sure that all callbacks of promises will be called
		$rootScope.$digest();

		expect(scope.sc.loginError).toBeFalsy();

		expect(scope.sc.credentials.email).toEqual('');
		expect(scope.sc.credentials.pwd).toEqual('');

	});

	it ('should incorrect login set false and not change credential\'s fields', function(){
		var cred = {
			email: 'info@mashup-unipd.it',
			pwd: 'test'
		};

		// nothing returned if user credentials are incorrect
		var resp = {

		};

		scope.sc.credentials = cred;
		scope.sc.login(cred);

		deferred.resolve(resp);

		// This makes sure that all callbacks of promises will be called
		$rootScope.$digest();

		expect(scope.sc.loginError).toBeTruthy();

		expect(scope.sc.credentials.email).toEqual('info@mashup-unipd.it');
		expect(scope.sc.credentials.pwd).toEqual('test');

	});

});