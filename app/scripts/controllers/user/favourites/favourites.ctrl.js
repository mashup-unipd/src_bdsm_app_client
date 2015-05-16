(function() {
    'use strict';

/**
 * @ngdoc function
 * @name app.controller:FavouritesCtrl
 * @description
 * # FavouritesCtrl
 * Controller of the app
 */
    var FavouritesCtrl = function($timeout){
    
        var vm=this;


    vm.line = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        series: ['Series A', 'Series B'],
        data: [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ],
        onClick: function (points, evt) {
            console.log(points, evt);
        }
    };

    vm.bar = {
        labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        series: ['Series A', 'Series B'],

        data: [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ]

    };

    vm.donut = {
        labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
        data: [300, 500, 100]
    };

    vm.radar = {
        labels:["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],

        data:[
            [65, 59, 90, 81, 56, 55, 40],
            [28, 48, 40, 19, 96, 27, 100]
        ]
    };

    vm.pie = {
        labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
        data : [300, 500, 100]
    };

    vm.polar = {
        labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
        data : [300, 500, 100, 40, 120]
    };

    vm.dynamic = {
        labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
        data : [300, 500, 100, 40, 120],
        type : 'PolarArea',

        toggle : function ()
        {
            this.type = this.type === 'PolarArea' ?
                'Pie' : 'PolarArea';
        }
    };
    
    }

    FavouritesCtrl.$inject = ['$timeout'];

    angular.module('app')
        .controller('FavouritesCtrl', FavouritesCtrl);


})();