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

        pie.dataFormat= function(){

            return '\n<script>\n' +
                'var gIDPLACEHOLDERData = [' +
            '{'+
                'value: 300,'+
                'color:"#F7464A",'+
               ' label: "Red"'+
            '},'+
            '{'+
            '    value: 50,'+
                'color: "#46BFBD",'+
                'label: "Green"'+
            '},'+
            '{'+
                'value: 100,'+
                'color: "#FDB45C",'+
                'label: "Yellow"'+
            '}];\n'+
                'var gIDPLACEHOLDERGraph = document.getElementById(\'gIDPLACEHOLDERCanvas\').getContext(\'2d\');\n'+
                'new Chart(gIDPLACEHOLDERGraph).Pie(gIDPLACEHOLDERData);'+
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