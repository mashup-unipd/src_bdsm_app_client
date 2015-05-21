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

        function chartGeneration(data,info){

            //to generate always different ids simply uses a timestamp
            var id= Date.now();

            var result='<canvas id="g'+id + 'Canvas"></canvas>';

            //TODO call data Format
            var dataFormatResult = '\n<script>\n' +
            'var g' +id+ 'Data = {' +
                'labels : ["January","February","March","April","May","June"],\n'+
                'datasets : ['+
                    '{fillColor : "rgba(172,194,132,0.4)",\n' +
                    'strokeColor : "rgba(172,194,132,1)",\n' +
                    'pointColor : "rgba(172,194,132,1)",\n'+
                    'data : [203,156,99,251,305,247]}]};\n'+
            'var g'+id +'Graph = document.getElementById(\'g'+id+'Canvas\').getContext(\'2d\');\n'+
            'new Chart(g'+id+'Graph).Line(g'+id+'Data);'+
            '</script>';

            result += dataFormatResult;


            return {
                desc: "Likes on the page over time (montly)",
                data: result
            };

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