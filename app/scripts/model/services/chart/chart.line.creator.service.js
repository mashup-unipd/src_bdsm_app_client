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

    function lineChartCreatorService(chartCreatorService){

        var line = Object.create(chartCreatorService);

        line.dataFormat= function(data){

            return '\n<script>\n' +
                'var gIDPLACEHOLDERData = ' + JSON.stringify(data,null,2) +
                ';\n'+
                'var gIDPLACEHOLDERGraph = document.getElementById(\'gIDPLACEHOLDERCanvas\').getContext(\'2d\');\n'+
                'new Chart(gIDPLACEHOLDERGraph).Line(gIDPLACEHOLDERData, {animation: false});'+
                '</script>';

        };


        return line;

        ///////////////
    }

    lineChartCreatorService.$inject = ['chartCreatorService'];

    angular
        .module('app.chart.creator.services.module')
        .factory('lineChartCreatorService', lineChartCreatorService)


})();