(function(){

    'use strict';

    /**
     * Name: app/scripts/model/services/chart/chart.creator.service.js
     * Author: Filippo Carnovalini
     * Mail. carnovalini.filippo@mashup-unipd.it
     *
     * Modify
     * Version  Date        Author                  Desc
     * ===========================================================
     * 0.0.1    2015-05-20  Carnovalini Filippo     started coding
     * -----------------------------------------------------------
     *
     */

    function chartCreatorService(){

        var factory = {
            chartGeneration: chartGeneration,
            dataFormat: dataFormat

        };

        return factory;

        ///////////////

        function chartGeneration(){



        }

        function dataFormat(){

            // To be implemented in in child classes

        }

    }

    chartCreatorService.$inject = [];

    angular
        .module('app.chart.creator.services.module')
        .factory('chartCreatorService', chartCreatorService);


})();