(function () {
    'use strict';

    /**
     * Name: app/scripts/controller/about/api-docs.ctrl.js
     * Author: Carnovalini  Filippo
     * Mail. facoch42@gmail.com
     *
     * Modify
     * Version  Date        Author          Desc
     * ==========================================================
     * 0.0.1    2015-05-08  Carnovalini Filippo    creazione stub modulo
     * -----------------------------------------------------------
     *
     */

    /**
     * @ngdoc function
     * @name app.controller:AboutCtrl
     * @description
     * # AboutCtrl
     * Controller of the app
     */

    var ApiDocsCtrl = function ($http ,ApiDocsModel) {

        var vm = this;

        vm.restServices = ApiDocsModel;

    };

    ApiDocsCtrl.$inject = ['$http','ApiDocsModel'];

    angular.module('app').controller('ApiDocsCtrl', ApiDocsCtrl);

})();
