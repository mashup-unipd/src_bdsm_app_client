/**
 * Name: app/scripts/controllers/public/login/login.ctrl.spec.js
 * Author: MashUp
 * Mail: info@mashup-unipd.it
 * Desc: unit test to the controller that manage the authentication
 *
 * Modify
 * Version  Date        Author          Desc
 * ==========================================================
 * 0.0.1    2015-04-04  Tesser Paolo    code module
 * -----------------------------------------------------------
 *
 */


describe('Controller: LoginCtrl', function() {
    'use strict';

    var $controller;

    beforeEach(function () {

        angular.mock.module('app');

        angular.mock.inject(function (_$controller_) {

            $controller = _$controller_('LoginCtrl');

        });
    });

    it('should have a LoginCtrl controller', function () {
        expect($controller).toBeDefined();
    });

    it('should login function redirect to home', function(){
        /* TODO */
    });

});