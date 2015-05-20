(function() {
    'use strict';

/**
 * @ngdoc function
 * @name app.controller:FavouritesCtrl
 * @description
 * # FavouritesCtrl
 * Controller of the app
 */
    var FavouritesCtrl = function($timeout,$sce){
    
        var vm=this;

    //Brutta cosa da eliminare prima possibile TODO
    function heredoc (f) {
        return f.toString().match(/\/\*\s*([\s\S]*?)\s*\*\//m)[1];
    };

    vm.txt = heredoc(function(){/*
     <canvas id="buyers" width="600" height="400"></canvas>
     <!-- pie chart canvas element -->
     <canvas id="countries" width="600" height="400"></canvas>
     <!-- bar chart canvas element -->
     <canvas id="income" width="600" height="400"></canvas>
     <script>
     // line chart data
     var buyerData = {
     labels : ["January","February","March","April","May","June"],
     datasets : [
     {
     fillColor : "rgba(172,194,132,0.4)",
     strokeColor : "#ACC26D",
     pointColor : "#fff",
     pointStrokeColor : "#9DB86D",
     data : [203,156,99,251,305,247]
     }
     ]
     }
     // get line chart canvas
     var buyers = document.getElementById('buyers').getContext('2d');
     // draw line chart
     new Chart(buyers).Line(buyerData);
     // pie chart data
     var pieData = [
     {
     value: 20,
     color:"#878BB6"
     },
     {
     value : 40,
     color : "#4ACAB4"
     },
     {
     value : 10,
     color : "#FF8153"
     },
     {
     value : 30,
     color : "#FFEA88"
     }
     ];
     // pie chart options
     var pieOptions = {
     segmentShowStroke : false,
     animateScale : true
     }
     // get pie chart canvas
     var countries= document.getElementById("countries").getContext("2d");
     // draw pie chart
     new Chart(countries).Pie(pieData, pieOptions);
     // bar chart data
     var barData = {
     labels : ["January","February","March","April","May","June"],
     datasets : [
     {
     fillColor : "#48A497",
     strokeColor : "#48A4D1",
     data : [456,479,324,569,702,600]
     },
     {
     fillColor : "rgba(73,188,170,0.4)",
     strokeColor : "rgba(72,174,209,0.4)",
     data : [364,504,605,400,345,320]
     }
     ]
     }
     // get bar chart canvas
     var income = document.getElementById("income").getContext("2d");
     // draw bar chart
     new Chart(income).Bar(barData);
     </script>
     */});

    vm.testGraph=$sce.trustAsHtml(vm.txt);

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

    FavouritesCtrl.$inject = ['$timeout','$sce'];

    angular.module('app')
        .controller('FavouritesCtrl', FavouritesCtrl);


})();