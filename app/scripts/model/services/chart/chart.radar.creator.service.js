(function(){

    'use strict';

    /**
     * Name: app/scripts/model/services/chart/chart.radar.creator.service.js
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

    function radarChartCreatorService(chartCreatorService){

        var radar = Object.create(chartCreatorService);

        radar.dataFormat= function(){

            return '\n<script>\n' +
                'var gIDPLACEHOLDERData = {' +
                'labels : ["January","February","March","April","May"],\n'+
                'datasets : ['+
                '{fillColor : "rgba(172,194,132,0.4)",\n' +
                'strokeColor : "rgba(172,194,132,1)",\n' +
                'pointColor : "rgba(172,194,132,1)",\n'+
                'data : [104023,106390,106448,107982,108219]}]};\n'+
                'var gIDPLACEHOLDERGraph = document.getElementById(\'gIDPLACEHOLDERCanvas\').getContext(\'2d\');\n'+
                'new Chart(gIDPLACEHOLDERGraph).Radar(gIDPLACEHOLDERData);'+
                '</script>';

        };


        return radar;

        ///////////////
    }

    radarChartCreatorService.$inject = ['chartCreatorService'];

    angular
        .module('app.chart.creator.services.module')
        .factory('radarChartCreatorService', radarChartCreatorService)


})();