(function(){
    'use strict';

    /**
     * Name: app/scripts/model/data/view_type/view-type.model.js
     * Author: Filippo Carnovalini
     * Mail. info@mashup-unipd.it
     *
     * Modify
     * Version  Date        Author                  Desc
     * ==========================================================
     * 0.0.1    2015-05-10  Carnovalini Filippo     code module
     * -----------------------------------------------------------
     *
     */


    function viewTypeFbConfModel() {


        var getViews = function(val, viewType){

            var confrontViews = {
                facebookPage02: function (call) {
                    if (call == "outside") {
                        return {
                            kind: 'line',
                            source: 'trend'
                        }
                    }
                    var values;
                    if (call[2] !== undefined) {
                        values = [call[0].slice(0, 7), call[1].slice(0, 7), call[2].slice(0, 7)]
                    } else {
                        values = [call[0].slice(0, 7), call[1].slice(0, 7)]
                    }
                    var lab = [[], [], []];
                    var likes = [[], [], []];
                    var talk = [[], [], []];
                    values.forEach(function (elementArray, index) {
                        elementArray.forEach(function (element) {
                            lab[index].splice(0, 0, element.date_create.substring(0, 10));
                            likes[index].splice(0, 0, element.likes);
                            talk[index].splice(0, 0, element.talking_about);
                        });
                    });
                    return {
                        dataSet: {
                            labels: lab[0],
                            datasets: [
                                {
                                    label: val[0] + '\'s Likes',
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: likes[0]
                                },
                                {
                                    label: val[0] + '\'s Talking Abouts',
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: talk[0]
                                },
                                {
                                    label: val[1] + '\'s Likes',
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: likes[1]
                                },
                                {
                                    label: val[1] + '\'s Talking Abouts',
                                    fillColor: "rgba(121,107,185,0.2)",
                                    strokeColor: "rgba(121,107,185,1)",
                                    pointColor: "rgba(121,107,185,1)",
                                    data: talk[1]
                                },
                                {
                                    label: val[2] + '\'s Likes',
                                    fillColor: "rgba(180,220,180,0.2)",
                                    strokeColor: "rgba(180,220,180,1)",
                                    pointColor: "rgba(180,220,180,1)",
                                    data: likes[2]
                                },
                                {
                                    label: val[2] + '\'s Talking Abouts',
                                    fillColor: "rgba(111,157,205,0.2)",
                                    strokeColor: "rgba(111,157,205,1)",
                                    pointColor: "rgba(111,157,205,1)",
                                    data: talk[2]
                                }
                            ]
                        },
                        type: 'facebookPage02',
                        desc: 'Likes and talking abouts of the pages ' + val + ' over the last week'
                    }
                },
                facebookPage03: function (call) {
                    if (call == "outside") {
                        return {
                            kind: 'line',
                            source: 'trend'
                        }
                    }
                    var values;
                    if (call[2] !== undefined) {
                        values = [call[0].slice(0, 31), call[1].slice(0, 31), call[2].slice(0, 31)]
                    } else {
                        values = [call[0].slice(0, 31), call[1].slice(0, 31)]
                    }
                    var lab = [[], [], []];
                    var likes = [[], [], []];
                    var talk = [[], [], []];
                    values.forEach(function (elementArray, index) {
                        elementArray.forEach(function (element, myIndex) {
                            if (myIndex % 3 == 0) {
                                lab[index].splice(0, 0, element.date_create.substring(0, 10));
                            } else {
                                lab[index].splice(0, 0, "");
                            }
                            likes[index].splice(0, 0, element.likes);
                            talk[index].splice(0, 0, element.talking_about);
                        });
                    });

                    return {
                        dataSet: {
                            labels: lab[0],
                            datasets: [
                                {
                                    label: val[0] + '\'s Likes',
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: likes[0]
                                },
                                {
                                    label: val[0] + '\'s Talking Abouts',
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: talk[0]
                                },
                                {
                                    label: val[1] + '\'s Likes',
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: likes[1]
                                },
                                {
                                    label: val[1] + '\'s Talking Abouts',
                                    fillColor: "rgba(121,107,185,0.2)",
                                    strokeColor: "rgba(121,107,185,1)",
                                    pointColor: "rgba(121,107,185,1)",
                                    data: talk[1]
                                },
                                {
                                    label: val[2] + '\'s Likes',
                                    fillColor: "rgba(180,220,180,0.2)",
                                    strokeColor: "rgba(180,220,180,1)",
                                    pointColor: "rgba(180,220,180,1)",
                                    data: likes[2]
                                },
                                {
                                    label: val[2] + '\'s Talking Abouts',
                                    fillColor: "rgba(111,157,205,0.2)",
                                    strokeColor: "rgba(111,157,205,1)",
                                    pointColor: "rgba(111,157,205,1)",
                                    data: talk[2]
                                }
                            ]
                        },
                        type: 'facebookPage03',
                        desc: 'Likes and talking abouts of the pages ' + val + ' over the last month'
                    }
                },
                facebookPage04: function (call) {
                    if (call == "outside") {
                        return {
                            kind: 'line',
                            source: 'trend'
                        }
                    }
                    var values;
                    if (call[2] !== undefined) {
                        values = [call[0].slice(0, 365), call[1].slice(0, 365), call[2].slice(0, 365)]
                    } else {
                        values = [call[0].slice(0, 365), call[1].slice(0, 365)]
                    }
                    var lab = [[], [], []];
                    var likes = [[], [], []];
                    var talk = [[], [], []];
                    values.forEach(function (elementArray, index) {
                        elementArray.forEach(function (element, myIndex) {
                            if (myIndex % 10 == 0) {
                                lab[index].splice(0, 0, element.date_create.substring(0, 10));
                            } else {
                                lab[index].splice(0, 0, "");
                            }
                            likes[index].splice(0, 0, element.likes);
                            talk[index].splice(0, 0, element.talking_about);
                        });
                    });

                    return {
                        dataSet: {
                            labels: lab[0],
                            datasets: [
                                {
                                    label: val[0] + '\'s Likes',
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: likes[0]
                                },
                                {
                                    label: val[0] + '\'s Talking Abouts',
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: talk[0]
                                },
                                {
                                    label: val[1] + '\'s Likes',
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: likes[1]
                                },
                                {
                                    label: val[1] + '\'s Talking Abouts',
                                    fillColor: "rgba(121,107,185,0.2)",
                                    strokeColor: "rgba(121,107,185,1)",
                                    pointColor: "rgba(121,107,185,1)",
                                    data: talk[1]
                                },
                                {
                                    label: val[2] + '\'s Likes',
                                    fillColor: "rgba(180,220,180,0.2)",
                                    strokeColor: "rgba(180,220,180,1)",
                                    pointColor: "rgba(180,220,180,1)",
                                    data: likes[2]
                                },
                                {
                                    label: val[2] + '\'s Talking Abouts',
                                    fillColor: "rgba(111,157,205,0.2)",
                                    strokeColor: "rgba(111,157,205,1)",
                                    pointColor: "rgba(111,157,205,1)",
                                    data: talk[2]
                                }
                            ]
                        },
                        type: 'facebookPage04',
                        desc: 'Likes and talking abouts of the pages ' + val + ' over the last year'
                    }
                },
                facebookPage05: function (call) {
                    if (call == "outside") {
                        return {
                            kind: 'bar',
                            source: 'media'
                        }
                    }
                    var values;
                    if (call[2] !== undefined) {
                        values = [call[0].slice(0, 7), call[1].slice(0, 7), call[2].slice(0, 7)]
                    } else {
                        values = [call[0].slice(0, 7), call[1].slice(0, 7)]
                    }
                    var lab = [[], [], []];
                    var averageComments = [[], [], []];
                    values.forEach(function (elementArray, index) {
                        elementArray.forEach(function (element) {
                            lab[index].splice(0, 0, element.date_create.substring(0, 10));
                            var posts = element.posts;
                            var comments = element.admin_comments + element.comments;
                            averageComments[index].splice(0, 0, (comments / posts))
                        });
                    });
                    return {
                        dataSet: {
                            labels: lab[0],
                            datasets: [
                                {
                                    label: val[0] + '\'s Average Comments',
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: averageComments[0]
                                },
                                {
                                    label: val[1] + '\'s Average Comments',
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: averageComments[1]
                                },
                                {
                                    label: val[2] + '\'s Average Comments',
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: averageComments[2]
                                }
                            ]
                        },
                        type: 'facebookPage05',
                        desc: 'Average comments on each post of the pages ' + val + ' over the last week'
                    }
                },
                facebookPage06: function (call) {
                    if (call == "outside") {
                        return {
                            kind: 'bar',
                            source: 'media'
                        }
                    }
                    var values;
                    if (call[2] !== undefined) {
                        values = [call[0].slice(0, 31), call[1].slice(0, 31), call[2].slice(0, 31)]
                    } else {
                        values = [call[0].slice(0, 31), call[1].slice(0, 31)]
                    }
                    var lab = [[], [], []];
                    var averageComments = [[], [], []];
                    values.forEach(function (elementArray, index) {
                        elementArray.forEach(function (element, myIndex) {
                            if (myIndex % 3 == 0) {
                                lab[index].splice(0, 0, element.date_create.substring(0, 10));
                            } else {
                                lab[index].splice(0, 0, "");
                            }
                            var posts = element.posts;
                            var comments = element.admin_comments + element.comments;
                            averageComments[index].splice(0, 0, (comments / posts))
                        });
                    });

                    return {
                        dataSet: {
                            labels: lab[0],
                            datasets: [
                                {
                                    label: val[0] + '\'s Average Comments',
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: averageComments[0]
                                },
                                {
                                    label: val[1] + '\'s Average Comments',
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: averageComments[1]
                                },
                                {
                                    label: val[2] + '\'s Average Comments',
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: averageComments[2]
                                }
                            ]
                        },
                        type: 'facebookPage06',
                         desc: 'Average comments on each post of the pages ' + val + ' over the last month'
                    }
                },
                facebookPage07: function (call) {
                    if (call == "outside") {
                        return {
                            kind: 'bar',
                            source: 'media'
                        }
                    }
                    var values;
                    if (call[2] !== undefined) {
                        values = [call[0].slice(0, 365), call[1].slice(0, 365), call[2].slice(0, 365)]
                    } else {
                        values = [call[0].slice(0, 365), call[1].slice(0, 365)]
                    }
                    var lab = [[], [], []];
                    var averageComments = [[], [], []];
                    values.forEach(function (elementArray, index) {
                        elementArray.forEach(function (element, myIndex) {
                            if (myIndex % 10 == 0) {
                                lab[index].splice(0, 0, element.date_create.substring(0, 10));
                            } else {
                                lab[index].splice(0, 0, "");
                            }
                            var posts = element.posts;
                            var comments = element.admin_comments + element.comments;
                            averageComments[index].splice(0, 0, (comments / posts))
                        });
                    });

                    return {
                        dataSet: {
                            labels: lab[0],
                            datasets: [
                                {
                                    label: val[0] + '\'s Average Comments',
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: averageComments[0]
                                },
                                {
                                    label: val[1] + '\'s Average Comments',
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: averageComments[1]
                                },
                                {
                                    label: val[2] + '\'s Average Comments',
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: averageComments[2]
                                }
                            ]
                        },
                        type: 'facebookPage07',
                         desc: 'Average comments on each post of the pages ' + val + ' over the last year'
                    }
                },

                facebookEvent01: function (call) {
                    if (call == "outside") {
                        return {
                            kind: 'pie',
                            source: 'trend'
                        }
                    }
                    var values;
                    if (call[2] !== undefined) {
                        values = [call[0][0], call[1][0], call[2][0]]
                    } else {
                        values = [call[0][0], call[1][0], {maybe: '', declined: '', attending: ''}]
                    }
                    return {

                        dataSet: [
                            {
                                value: values[0].attending,
                                color: "#F7464A",
                                label: val[0] + "\'s Attending"
                            },
                            {
                                value: values[0].maybe,
                                color: "#46BFBD",
                                label: val[0] + "\'s Maybe"
                            },
                            {
                                value: values[0].declined,
                                color: "#FDB45C",
                                label: val[0] + "\'s Declined"
                            },
                            {
                                value: values[1].attending,
                                color: "#07464A",
                                label: val[1] + "\'s Attending"
                            },
                            {
                                value: values[1].maybe,
                                color: "#06BFBD",
                                label: val[1] + "\'s Maybe"
                            },
                            {
                                value: values[1].declined,
                                color: "#0DB45C",
                                label: val[1] + "\'s Declined"
                            },
                            {
                                value: values[2].attending,
                                color: "#F7460A",
                                label: val[2] + "\'s Attending"
                            },
                            {
                                value: values[2].maybe,
                                color: "#46BF0D",
                                label: val[2] + "\'s Maybe"
                            },
                            {
                                value: values[2].declined,
                                color: "#FDB41C",
                                label: val[2] + "\'s Declined"
                            }

                        ],
                        type: 'facebookEvent01',
                         desc: 'People who marked "join", "maybe" or "decline" for the events ' + val
                    }
                }
            };

            return confrontViews[viewType];
        };

        return getViews;

    }

    viewTypeFbConfModel.$inject = [];

    angular
        .module('app.type.view.data.module')
        .service('viewTypeFbConfModel', viewTypeFbConfModel);

})();