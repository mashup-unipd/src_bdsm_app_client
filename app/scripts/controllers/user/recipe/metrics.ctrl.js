(function () {
    'use strict';

    /**
     * Name: app/scripts/controllers/recipe/metrics.ctrl.js
     * Author: MashUp
     * Mail. info@mashup-unipd.it
     *
     * Modify
     * Version  Date        Author          Desc
     * ==========================================================
     * 0.0.1    2015-05-04  Tesser Paolo    codifica modulo
     * -----------------------------------------------------------
     *
     */

    /**
     * @ngdoc function
     * @name app.controller:MetricsCtrl
     * @description
     * # MetricsCtrl
     * Controller of the app
     */

    var MetricsCtrl = function () {

        var vm = this;
        vm.metricsType = ['Facebook', 'Twitter', 'Instagram'];

        vm.metricsFb = [
            {
                name: 'NikeOfficial'
            },
            {
                name: 'NikeStore'
            }
        ];
    };

    MetricsCtrl.$inject = [];

    angular.module('app').controller('MetricsCtrl', MetricsCtrl);

})();
