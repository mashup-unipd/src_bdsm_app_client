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
     * 0.0.2    2015-05-19  Carnovalini Filippo    ulteriore codifica
     * -----------------------------------------------------------
     *
     */

    /**
     * @ngdoc function
     * @name app.controller:CompareCtrl
     * @description
     * # CompareCtrl
     * Controller of the app
     */

    var CompareCtrl = function (recipeService, $stateParams) {

        var vm = this;

        vm.titleRecipe = $stateParams.title;
        vm.metricsType = getMetricTypes();

        vm.oneInserted = false;
        vm.maxReached = false;
        vm.notEnough= true;

        vm.type='';  //  category chosen in the combobox
        vm.types = [];

        vm.metric=''; //  metric chosen in the combobox
        vm.metrics=[];

        vm.tempMetrics = []; // array that contains a set of object that figure a metric
        vm.updateTypeMetric = updateTypeMetric;
        vm.updateMetrics = updateMetrics;
        vm.addMetric = addMetric;

        // array of the categories for a combobox field in the template view
        vm.categories = [
            {
                key: 'facebook',
                value: 'Facebook'
            },
            {
                key: 'twitter',
                value: 'Twitter'
            },
            {
                key: 'instagram',
                value: 'Instagram'
            }
        ];

        ////////////////

        /**
         * TODO
         * @returns {*}
         */
        function getMetricTypes(){
            return recipeService.getMetricType();
        }

        /**
         * TODO
         * @param typeCategory
         * @returns {*}
         */


        // array of types of the possible node in a metric's category
        var typeFacebook = [
            {
                key: 'event',
                value: 'Event'
            },
            {
                key: 'page',
                value: 'Page'
            }
        ];

        var typeTwitter = [
            {
                key: 'hashtag',
                value: 'Hashtag'
            },
            {
                key: 'page',
                value: 'Page'
            }
        ];
        var typeInstagram = [
            {
                key: 'hashtag',
                value: 'Hashtag'
            },
            {
                key: 'page',
                value: 'Page'
            }
        ];


        /**
         * This function create a local object with the value of a metric
         * and insert it in a temporary array that stores all locals metric object
         * @param cat : category of the metric
         * @param typeCat : type of the category
         * @param val : value of the category
         */
        function addMetric(cat, typeCat, val){

            var metric = {
                category: cat,
                typeCategory: typeCat,
                value: val
            };

            vm.tempMetrics.push(metric);

            // once one metric is inserted, the user can't change the category or the type anymore
            vm.oneInserted = true;
            if(vm.tempMetrics.length == 2) {vm.notEnough = false;}
            if(vm.tempMetrics.length == 3) {vm.maxReached = true;}
        }

        /**
         * This function update the option field for type of metric in the insert recipe form,
         * @param category : object that contains a key and a value, and we want the key for choose what array choose
         */
        function updateTypeMetric( category ){

            vm.type = category.key.key;

            switch (vm.type){
                case 'facebook': vm.types = typeFacebook; break;
                case 'twitter': vm.types = typeTwitter; break;
                case 'instagram': vm.types = typeInstagram; break;
                default : vm.types = []
            }

        }

        function updateMetrics( category,type ){

            vm.metrics=recipeService.getMetricsListType(42,category,type.key.key);


        }

    };

    CompareCtrl.$inject = ['recipeService', '$stateParams'];

    angular.module('app').controller('CompareCtrl', CompareCtrl);

})();
