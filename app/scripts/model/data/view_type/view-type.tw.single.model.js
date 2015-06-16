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


    function viewTypeTwSingleModel() {


        var getViews = function(val, viewType){

            var singleViews = {
                twitterHashtag01 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,7);
                    var lab=[];
                    var twitts=[];
                    values.forEach(function(element){
                        lab.splice(0,0,element.date_create.substring(0,10));
                        twitts.splice(0,0,element.tweets_count);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Tweets",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: twitts
                                }
                            ]
                        },
                        desc: 'Tweets containing the hashtag ' +val + ' over the last week'
                    }
                },
                twitterHashtag02 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,31);
                    var lab=[];
                    var twitts=[];
                    var index=0;
                    values.forEach(function(element){
                        if (index%3 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        twitts.splice(0,0,element.tweets_count);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Tweets",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: twitts
                                }
                            ]
                        },
                        desc: 'Tweets containing the hashtag ' +val + ' over the last month'
                    }
                },
                twitterHashtag03 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,365);
                    var lab=[];
                    var twitts=[];
                    var index= 0;
                    values.forEach(function(element){
                        if (index%10 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        twitts.splice(0,0,element.tweets_count);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Tweets",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: twitts
                                }
                            ]
                        },
                        desc: 'Tweets containing the hashtag ' +val + ' over the last year'
                    }
                },
                twitterHashtag04 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'pie',
                            source: 'media'
                        }
                    }
                    var values= angular.fromJson(call[0][0].source_devices);
                    var result=[];
                    var colors = ["#F7464A","#46BFBD","#FDB45C","#CDEB8B","#B02B2C","#6BBA70","#356AA0","#F9F7ED","#B02B2C","#C3D9FF"];
                    var index= 0;
                    angular.forEach(values,function(element,key){
                        result.push({
                            value: element,
                            color: colors[index%10],
                            label: key
                        });
                        index++;
                    });
                    return {
                        dataSet: result,
                        desc: 'Platform used for the Tweets containing the hashtag ' +val + ' over the last three days'
                    }
                },
                twitterPage01 : function(call){
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
                },
                twitterPage02 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'bar',
                            source: 'trend'
                        }
                    }
                    return {

                        dataSet: {
                            labels : [""],
                            datasets : [
                                {
                                    label: "Tweets",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: [call[0][0].tweets_count]
                                },
                                {
                                    label: "Followers",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: [call[0][0].followers_count]
                                }
                            ]
                        },
                        desc: val+'\'s tweets and followers'
                    }
                },
                twitterPage03 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'trend'
                        }
                    }
                    var values = call[0].slice(0,7);
                    var lab=[];
                    var twitts=[];
                    var folls=[];
                    values.forEach(function(element){
                        lab.splice(0,0,element.date_create.substring(0,10));
                        twitts.splice(0,0,element.tweets_count);
                        folls.splice(0,0,element.followers_count);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Tweets",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: twitts
                                },
                                {
                                    label: "Followers",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: folls
                                }
                            ]
                        },
                        desc: val + '\'s tweets and followers over the last week'
                    }
                },
                twitterPage04 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'trend'
                        }
                    }
                    var values = call[0].slice(0,31);
                    var lab=[];
                    var twitts=[];
                    var folls=[];
                    var index=0;
                    values.forEach(function(element){
                        if (index%3 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        twitts.splice(0,0,element.tweets_count);
                        folls.splice(0,0,element.followers_count);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Tweets",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: twitts
                                },
                                {
                                    label: "Followers",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: folls
                                }
                            ]
                        },
                        desc: val + '\'s tweets and followers over the last month'
                    }
                },
                twitterPage05 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'trend'
                        }
                    }
                    var values = call[0].slice(0,365);
                    var lab=[];
                    var twitts=[];
                    var folls=[];
                    var index= 0;
                    values.forEach(function(element){
                        if (index%10 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        twitts.splice(0,0,element.tweets_count);
                        folls.splice(0,0,element.followers_count);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Tweets",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: twitts
                                },
                                {
                                    label: "Followers",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: folls
                                }
                            ]
                        },
                        desc: val + '\'s tweets and followers over the last year'
                    }
                }
            };

            return singleViews[viewType];
        };

        return getViews;

    }

    viewTypeTwSingleModel().$inject = [];

    angular
        .module('app.type.view.data.module')
        .service('viewTypeTwSingleModel', viewTypeTwSingleModel);

})();