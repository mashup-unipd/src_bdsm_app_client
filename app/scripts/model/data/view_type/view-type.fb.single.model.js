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


    function viewTypeFbSingleModel() {


        var getViews = function(val, viewType){


            var singleViews = {

                facebookPage01: function (call) {
                    if (call == "outside") {
                        return {
                            kind: 'pie',
                            source: 'media'
                        }
                    }
                    var admin = call[0][0].admin_comments;
                    var comm = call[0][0].comments;
                    if (admin + comm == 0) {
                        comm = 1
                    }
                    return {
                        dataSet: [
                            {
                                value: admin,
                                color: "#F7464A",
                                label: "Page comments"
                            },
                            {
                                value: comm,
                                color: "#46BFBD",
                                label: "Other people comments"
                            }
                        ],
                        desc: 'Comments on the page ' + val + ' over the last three days'
                    }
                },
                facebookPage02: function (call) {
                    if (call == "outside") {
                        return {
                            kind: 'line',
                            source: 'trend'
                        }
                    }
                    var values = call[0].slice(0, 7);
                    var lab = [];
                    var likes = [];
                    var talk = [];
                    values.forEach(function (element) {
                        lab.splice(0, 0, element.date_create.substring(0, 10));
                        likes.splice(0, 0, element.likes);
                        talk.splice(0, 0, element.talking_about);
                    });
                    return {
                        dataSet: {
                            labels: lab,
                            datasets: [
                                {
                                    label: "Likes",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: likes
                                },
                                {
                                    label: "Talking Abouts",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: talk
                                }
                            ]
                        },
                        desc: 'Likes and talking abouts of the page ' + val + ' over the last week'
                    }
                },
                facebookPage03: function (call) {
                    if (call == "outside") {
                        return {
                            kind: 'line',
                            source: 'trend'
                        }
                    }
                    var values = call[0].slice(0, 31);
                    var lab = [];
                    var likes = [];
                    var talk = [];
                    var index = 0;
                    values.forEach(function (element) {
                        if (index % 3 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        } else {
                            lab.splice(0, 0, "");
                            index++;
                        }
                        likes.splice(0, 0, element.likes);
                        talk.splice(0, 0, element.talking_about);
                    });
                    return {
                        dataSet: {
                            labels: lab,
                            datasets: [
                                {
                                    label: "Likes",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: likes
                                },
                                {
                                    label: "Talking Abouts",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: talk
                                }
                            ]
                        },
                        desc: 'Likes and talking abouts of the page ' + val + ' over the last month'
                    }
                },
                facebookPage04: function (call) {
                    if (call == "outside") {
                        return {
                            kind: 'line',
                            source: 'trend'
                        }
                    }
                    var values = call[0].slice(0, 365);
                    var lab = [];
                    var likes = [];
                    var talk = [];
                    var index = 0;
                    values.forEach(function (element) {
                        if (index % 10 === 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        } else {
                            lab.splice(0, 0, "");
                            index++;
                        }
                        likes.splice(0, 0, element.likes);
                        talk.splice(0, 0, element.talking_about);
                    });
                    return {
                        dataSet: {
                            labels: lab,
                            datasets: [
                                {
                                    label: "Likes",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: likes
                                },
                                {
                                    label: "Talking Abouts",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: talk
                                }
                            ]
                        },
                        desc: 'Likes and talking abouts of the page ' + val + ' over the last year'
                    }
                },
                facebookPage05: function (call) {
                    if (call == "outside") {
                        return {
                            kind: 'bar',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0, 7);
                    var lab = [];
                    var averageComments = [];
                    values.forEach(function (element) {
                        lab.splice(0, 0, element.date_create.substring(0, 10));
                        var posts = element.posts;
                        var comments = element.admin_comments + element.comments;
                        averageComments.splice(0, 0, (comments / posts));
                    });

                    return {
                        dataSet: {
                            labels: lab,
                            datasets: [
                                {
                                    label: "Average comments",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    data: averageComments
                                }
                            ]
                        },
                        desc: 'Average comments on each post of the page ' + val + ' over the last week'
                    }
                },
                facebookPage06: function (call) {
                    if (call == "outside") {
                        return {
                            kind: 'bar',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0, 31);
                    var lab = [];
                    var averageComments = [];
                    var index = 0;
                    values.forEach(function (element) {
                        if (index % 3 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        } else {
                            lab.splice(0, 0, "");
                            index++;
                        }
                        var posts = element.posts;
                        var comments = element.admin_comments + element.comments;
                        averageComments.splice(0, 0, (comments / posts));
                    });

                    return {
                        dataSet: {
                            labels: lab,
                            datasets: [
                                {
                                    label: "Average comments",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    data: averageComments
                                }
                            ]
                        },
                        desc: 'Average comments on each post of the page ' + val + ' over the last month'
                    }
                },
                facebookPage07: function (call) {
                    if (call == "outside") {
                        return {
                            kind: 'bar',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0, 365);
                    var lab = [];
                    var averageComments = [];
                    var index = 0;
                    values.forEach(function (element) {
                        if (index % 10 === 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        } else {
                            lab.splice(0, 0, "");
                            index++;
                        }
                        var posts = element.posts;
                        var comments = element.admin_comments + element.comments;
                        averageComments.splice(0, 0, (comments / posts));
                    });

                    return {
                        dataSet: {
                            labels: lab,
                            datasets: [
                                {
                                    label: "Average comments",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    data: averageComments
                                }
                            ]
                        },
                        desc: 'Average comments on each post of the page ' + val + ' over the last year'
                    }
                },
                facebookEvent01: function (call) {
                    if (call == "outside") {
                        return {
                            kind: 'pie',
                            source: 'trend'
                        }
                    }
                    return {

                        dataSet: [
                            {
                                value: call[0][0].attending,
                                color: "#F7464A",
                                label: "Attending"
                            },
                            {
                                value: call[0][0].maybe,
                                color: "#46BFBD",
                                label: "Maybe"
                            },
                            {
                                value: call[0][0].declined,
                                color: "#FDB45C",
                                label: "Declined"
                            }
                        ],
                        desc: 'People who marked "join", "maybe" or "decline" for the event ' + val
                    }
                },
                facebookEvent02: function (call) {
                    if (call == "outside") {
                        return {
                            kind: 'pie',
                            source: 'media'
                        }
                    }
                    var admin = call[0][0].admin_comments;
                    var comm = call[0][0].comments;
                    if (admin + comm == 0) {
                        comm = 1
                    }
                    return {
                        dataSet: [
                            {
                                value: admin,
                                color: "#F7464A",
                                label: "Author of the event comments"
                            },
                            {
                                value: comm,
                                color: "#46BFBD",
                                label: "Other people comments"
                            }
                        ],
                        desc: 'Comments on the event ' + val + ' over the last three days'
                    }
                }
            };


            return singleViews[viewType];
        };

        return getViews;

    }

    viewTypeFbSingleModel().$inject = [];

    angular
        .module('app.type.view.data.module')
        .service('viewTypeFbSingleModel', viewTypeFbSingleModel);

})();