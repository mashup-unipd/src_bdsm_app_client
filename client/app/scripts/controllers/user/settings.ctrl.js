(function () {
    'use strict';

    /**
     * Name: app/scripts/controller/settings.ctrl.js
     * Author: Tesser Paolo
     * Mail. p.tesser921@gmail.com
     *
     * Modify
     * Version  Date        Author          Desc
     * ==========================================================
     * 0.0.1    aaaa-mm-dd  Tesser Paolo    description
     * -----------------------------------------------------------
     *
     */

    /**
     * @ngdoc function
     * @name nameModule.controller:SettingsCtrl
     * @description
     * # SettingsCtrl
     * Controller of the clientApp
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

    angular.module('sbAdminApp').controller('SettingsCtrl', SettingsCtrl);

})();
