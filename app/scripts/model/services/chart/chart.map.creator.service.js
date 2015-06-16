(function(){

    'use strict';

    /**
     * Name: app/scripts/model/services/chart/chart.line.creator.service.js
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

    function mapChartCreatorService(chartCreatorService){

        var map = Object.create(chartCreatorService);

        map.dataFormat= function(data){

            return  '';


        };


        return map;

        ///////////////
    }

    mapChartCreatorService.$inject = ['chartCreatorService'];

    angular
        .module('app.chart.creator.services.module')
        .factory('mapChartCreatorService', mapChartCreatorService)


})();