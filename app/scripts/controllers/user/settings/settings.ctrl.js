(function () {
    'use strict';

    /**
     * Name: app/scripts/controller/settings/settings.ctrl.js
     * Author: MashUp
     * Mail. info@mashup-unipd.it
     *
     * Modify
     * Version  Date        Author          Desc
     * ==========================================================
     * 0.0.1    2015-05-01  Tesser Paolo    codifica modulo
     * -----------------------------------------------------------
     *
     */

    /**
     * @ngdoc function
     * @name nameModule.controller:SettingsCtrl
     * @description
     * # SettingsCtrl
     * Controller of the app
     */

    var SettingsCtrl = function () {

        var vm = this;

        vm.username = 'mashup';
        vm.email = 'info@mashup-unipd.it';

        vm.saveEdit = saveEdit;

        function saveEdit(){
            console.log('Modifiche salvate');
        }
    };

    SettingsCtrl.$inject = [];

    angular.module('app').controller('SettingsCtrl', SettingsCtrl);

})();
