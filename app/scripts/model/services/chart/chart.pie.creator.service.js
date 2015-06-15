(function(){

    'use strict';

    /**
     * Name: app/scripts/model/services/chart/chart.pie.creator.service.js
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

    function pieChartCreatorService(chartCreatorService){

        var pie = Object.create(chartCreatorService);

        pie.dataFormat= function(data){

            return '\n<script>\n' +
                'var gIDPLACEHOLDERData = ' + JSON.stringify(data,null,2) +
                ';\n'+
                'var gIDPLACEHOLDERGraph = document.getElementById(\'gIDPLACEHOLDERCanvas\').getContext(\'2d\');\n'+
                'new Chart(gIDPLACEHOLDERGraph).Pie(gIDPLACEHOLDERData, {animation: false});'+
                '</script>';

        };


        return pie;

        ///////////////
    }

    pieChartCreatorService.$inject = ['chartCreatorService'];

    angular
        .module('app.chart.creator.services.module')
        .factory('pieChartCreatorService', pieChartCreatorService)


})();