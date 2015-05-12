(function () {
    'use strict';

    /**
     * Name: app/scripts/controller/token_config/token-config.ctrl.js
     * Author: MashUp
     * Mail. info@mashup-unipd.it
     *
     * Modify
     * Version  Date        Author          Desc
     * ==========================================================
     * 0.0.1    2015-05-08  Tesser Paolo    codifica modulo
     * -----------------------------------------------------------
     *
     */

    /**
     * @ngdoc function
     * @name app.controller:TokenConfigCtrl
     * @description
     * # TokenConfigCtrl
     * Controller of the app
     */

    var TokenConfigCtrl = function () {

        var vm = this;

        vm.access_token = '';

    };

    TokenConfigCtrl.$inject = [];

    angular.module('app').controller('TokenConfigCtrl', TokenConfigCtrl);

})();
