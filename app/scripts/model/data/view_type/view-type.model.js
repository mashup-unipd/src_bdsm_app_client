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


    function viewTypeModel() {


        var getViews = function(conf, cat, type, val){

            //TODO is to be defined a good notation to describe what should be done to generate the graph
            var graphs;
            if (conf) {
        //  ------ WIEWS DI CONFRONTO -----------------//
                switch (cat.toLowerCase()) {
                    case 'facebook':
                        if (type == 'page') {
                            graphs = [
                                {
                                    kind: 'line',
                                    time: 'weekly',
                                    data: ['likes', 'talking-about'],
                                    desc: 'Likes and Talking About the page '+ val +' over time (weekly)'
                                },
                                {
                                    kind: 'bar',
                                    time: 'weekly',
                                    data: ['average-comments'],
                                    desc: 'Average comments per post on the page '+val+' over time (weekly)'
                                }
                                // TODO: add all the other views
                            ]
                        } else {
                            graphs = [
                                {
                                    kind: 'pie',
                                    time: 'now',
                                    data: ['join', 'maybe', 'decline'],
                                    desc: 'People who marked "join", "maybe" or "decline" for the event '+ val
                                }
                                // TODO: add all the other views
                            ]
                        }
                        break;
                    case 'twitter':
                        if (type == 'hashtag') {
                            graphs = [
                                {
                                    kind: 'line',
                                    time: 'weekly',
                                    data: ['tweets'],
                                    desc: 'Number of tweets having the hashtag '+ val +' over time (weekly)'
                                },
                                {
                                    kind: 'radar',
                                    time: 'hours',
                                    data: ['tweets'],
                                    desc: 'Posting time of tweets having the hashtag '+ val
                                }
                                // TODO: add all the other views
                            ]
                        } else {
                            graphs = [
                                {
                                    kind: 'line',
                                    time: 'weekly',
                                    data: ['tweets', 'followers'],
                                    desc: 'Tweets and Followers of the user '+ val +' over time (weekly)'
                                },
                                {
                                    kind: 'pie',
                                    time: 'now',
                                    data: ['tweets', 'preferred', 'retweets'],
                                    desc: 'Tweets, preferred and retweets of the user '+ val
                                }
                                // TODO: add all the other views
                            ]
                        }
                        break;
                    case 'instagram':
                        if (type == 'hashtag') {
                            graphs = [
                                {
                                    kind: 'line',
                                    time: 'weekly',
                                    data: ['posts', 'users'],
                                    desc: 'Posts and users using the hashtag '+ val +' over time (weekly)'
                                },
                                {
                                    kind: 'line',
                                    time: 'weekly',
                                    data: ['likes', 'comments'],
                                    desc: 'Likes and comments received by post having the hashtag '+ val +' over time (weekly)'
                                }
                                // TODO: add all the other views
                            ]
                        } else {
                            graphs = [
                                {
                                    kind: 'bar',
                                    time: 'posts',
                                    data: ['likes', 'comments'],
                                    desc: 'Likes and comments received by each post of the user '+ val
                                },
                                {
                                    kind: 'line',
                                    time: 'weekly',
                                    data: ['followers', 'posts'],
                                    desc: 'Followers and posts of the user '+ val +' over time (weekly)'
                                }
                                // TODO: add all the other views
                            ]
                        }
                        break;
                    default :
                        graphs = []
                }
        //  ------ WIEWS GENERATE DA METRICA SINGOLA --//
            }else{
                switch (cat) {
                    case 'facebook':
                        if (type == 'page') {
                            graphs = [function(call){
                                if (call=="outside"){
                                    return {
                                        kind: 'pie',
                                        source: 'media'
                                    }
                                }
                                return {

                                    dataSet: [
                                        {
                                            value: call[0][0].admin_comments,
                                            color: "#F7464A",
                                            label: "Page comments"
                                        },
                                        {
                                            value: call[0][0].comments,
                                            color: "#46BFBD",
                                            label: "Other people comments"
                                        }
                                    ],
                                    desc: 'Comments on the page '+ val + ' over the last three days'
                                }
                            }
                            ];
                        } else {
                            graphs = [function(call){
                                if (call=="outside"){
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
                                    desc: 'People who marked "join", "maybe" or "decline" for the event '+ val
                                }
                            }
                            ];
                            // TODO: add all the other views
                        }
                        break;
                    case 'twitter':
                        if (type == 'hashtag') {
                            graphs = [function(call){
                                if (call=="outside"){
                                    return {
                                        kind: 'pie',
                                        source: 'media'
                                    }
                                }
                                return {

                                    dataSet: [
                                        {
                                            value: 12,
                                            color: "#F7464A",
                                            label: "Foo"
                                        },
                                        {
                                            value: 14,
                                            color: "#46BFBD",
                                            label: "Foo"
                                        },
                                        {
                                            value: 15,
                                            color: "#FDB45C",
                                            label: "Foo"
                                        }
                                    ],
                                    desc: 'Foo Graph'
                                }
                            }
                            ];
                        } else {
                            graphs = [function(call){
                                if (call=="outside"){
                                    return {
                                        kind: 'pie',
                                        source: 'trend'
                                    }
                                }
                                return {

                                    dataSet: [
                                        {
                                            value: call[0][0].tweets_count,
                                            color: "#F7464A",
                                            label: "Tweets"
                                        },
                                        {
                                            value: call[0][0].followers_count,
                                            color: "#46BFBD",
                                            label: "Followers"
                                        },
                                        {
                                            value: call[0][0].favourites_count,
                                            color: "#FDB45C",
                                            label: "Favourites"
                                        }
                                    ],
                                    desc: 'Number of '+val+'\'s tweets, followers and favourites'
                                }
                            }
                            ];
                        }
                        break;
                    case 'instagram':
                        if (type == 'hashtag') {
                            graphs = [function(call){
                                if (call=="outside"){
                                    return {
                                        kind: 'pie',
                                        source: 'media'
                                    }
                                }
                                return {

                                    dataSet: [
                                        {
                                            value: 12,
                                            color: "#F7464A",
                                            label: "Foo"
                                        },
                                        {
                                            value: 14,
                                            color: "#46BFBD",
                                            label: "Foo"
                                        },
                                        {
                                            value: 15,
                                            color: "#FDB45C",
                                            label: "Foo"
                                        }
                                    ],
                                    desc: 'Foo Graph'
                                }
                            }
                            ];
                        } else {
                            graphs = [function(call){
                                if (call=="outside"){
                                    return {
                                        kind: 'pie',
                                        source: 'trend'
                                    }
                                }
                                return {

                                    dataSet: [
                                        {
                                            value: 12,
                                            color: "#F7464A",
                                            label: "Foo"
                                        },
                                        {
                                            value: 14,
                                            color: "#46BFBD",
                                            label: "Foo"
                                        },
                                        {
                                            value: 15,
                                            color: "#FDB45C",
                                            label: "Foo"
                                        }
                                    ],
                                    desc: 'Foo Graph'
                                }
                            }
                            ];
                        }
                        break;
                    default :
                        graphs = []
                }
            }
            return graphs;
        };

        return getViews;

    }

    viewTypeModel.$inject = [];

    angular
        .module('app.type.view.data.module')
        .service('viewTypeModel', viewTypeModel);

})();