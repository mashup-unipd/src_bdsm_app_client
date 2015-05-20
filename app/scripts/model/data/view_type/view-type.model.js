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


        var getViews = function(cat, type, val){
            //TODO using the val parameter aggregation could be done in part here.
            //TODO in general, is to be defined a good notation to describe what should be done to generate the graph
            var graphs;

            switch(cat){
                case 'facebook': if(type=='page'){graphs= [
                    {
                        kind: 'line',
                        time: 'weekly',
                        data: ['likes','talking-about'],
                        desc: 'Likes and Talking About over time (weekly)'
                    },
                    {
                        kind: 'bar',
                        time: 'weekly',
                        data: ['average-comments'],
                        desc: 'Average comments per post over time (weekly)'
                    }
                    // TODO: add all the other views
                ]
                }else {graphs= [
                    {
                        kind: 'pie',
                        time: 'now',
                        data: ['join','maybe','decline'],
                        desc: 'People who marked "join", "maybe" or "decline" for this event'
                    }
                    // TODO: add all the other views
                ]
                }break;
                case 'twitter': if(type=='hashtag'){graphs= [
                    {
                        kind: 'line',
                        time: 'weekly',
                        data: ['tweets'],
                        desc: 'Number of tweets having the specified hashtag over time (weekly)'
                    },
                    {
                        kind: 'radar',
                        time: 'hours',
                        data: ['tweets'],
                        desc: 'Posting time of tweets having the specified hashtag'
                    }
                    // TODO: add all the other views
                ]
                }else {graphs= [
                    {
                        kind: 'line',
                        time: 'weekly',
                        data: ['tweets','followers'],
                        desc: 'Tweets and Followers over time (weekly)'
                    },
                    {
                        kind: 'pie',
                        time: 'now',
                        data: ['tweets','preferred','retweets'],
                        desc: 'Tweets, preferred and retweets'
                    }
                    // TODO: add all the other views
                ]
                }break;
                case 'instagram': if(type=='hashtag'){graphs= [
                    {
                        kind: 'line',
                        time: 'weekly',
                        data: ['posts','users'],
                        desc: 'Posts and users using the specified hashtag over time (weekly)'
                    },
                    {
                        kind: 'line',
                        time: 'weekly',
                        data: ['likes','comments'],
                        desc: 'Likes and comments received by post having the specified hashtag over time (weekly)'
                    }
                    // TODO: add all the other views
                ]
                }else {graphs= [
                    {
                        kind: 'bar',
                        time: 'posts',
                        data: ['likes','comments'],
                        desc: 'Likes and comments received by each post'
                    },
                    {
                        kind: 'line',
                        time: 'weekly',
                        data: ['followers','posts'],
                        desc: 'Followers and posts over time (weekly)'
                    }
                    // TODO: add all the other views
                ]
                }break;
                default : graphs = []

            }
        };

        return getViews;

    }

    viewTypeModel.$inject = [];

    angular
        .module('app.type.view.data.module')
        .service('viewTypeModel', viewTypeModel);

})();