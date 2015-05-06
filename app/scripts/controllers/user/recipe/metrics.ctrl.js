(function () {
    'use strict';

    /**
     * Name: metrics.ctrl.js
     * Author: Tesser Paolo
     * Mail. p.tesser921@gmail.com
     *
     * Modify
     * Version  Date        Author          Desc
     * ==========================================================
     * 0.0.1    2015-04-18  Tesser Paolo    creazione modulo
     * -----------------------------------------------------------
     *
     */

    /**
     * @ngdoc function
     * @name nameModule.controller:MetricsCtrl
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
