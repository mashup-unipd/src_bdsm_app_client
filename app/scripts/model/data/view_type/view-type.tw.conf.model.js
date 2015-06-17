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


    function viewTypeTwConfModel() {


        var getViews = function(val, viewType){

            var confrontViews = {

                twitterHashtag01 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values;
                    if (call[2]!== undefined){
                        values = [call[0].slice(0,7),call[1].slice(0,7),call[2].slice(0,7)]
                    } else {
                        values = [call[0].slice(0,7),call[1].slice(0,7)]}
                    var lab=[[],[],[]];
                    var twitts=[[],[],[]];

                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element){
                            lab[index].splice(0,0,element.date_create.substring(0,10));
                            twitts[index].splice(0,0, element.tweets_count)
                        });
                    });
                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
                                {
                                    label: val[0] + " Tweets",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: twitts[0]
                                },
                                {
                                    label: val[1] + " Tweets",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: twitts[1]
                                },
                                {
                                    label: val[2] + " Tweets",
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: twitts[2]
                                }
                            ]
                        },
                        type: 'twitterHashtag01',
                         desc:  'Tweets containing the hashtags ' +val + ' over the last week'
                    }
                },
                twitterHashtag02 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values;
                    if (call[2]!== undefined){
                        values = [call[0].slice(0,31),call[1].slice(0,31),call[2].slice(0,31)]
                    } else {
                        values = [call[0].slice(0,31),call[1].slice(0,31)]}
                    var lab=[[],[],[]];
                    var twitts=[[],[],[]];
                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element,myIndex){
                            if (myIndex%3 == 0) {
                                lab[index].splice(0, 0, element.date_create.substring(0, 10));
                            }else{
                                lab[index].splice(0, 0, "");
                            }
                            twitts[index].splice(0,0, element.tweets_count)
                        });
                    });
                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
                                {
                                    label: val[0] + " Tweets",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: twitts[0]
                                },
                                {
                                    label: val[1] + " Tweets",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: twitts[1]
                                },
                                {
                                    label: val[2] + " Tweets",
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: twitts[2]
                                }
                            ]
                        },
                        type: 'twitterHashtag02',
                         desc:  'Tweets containing the hashtags ' +val + ' over the last month'
                    }
                },
                twitterHashtag03 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values;
                    if (call[2]!== undefined){
                        values = [call[0].slice(0,365),call[1].slice(0,365),call[2].slice(0,365)]
                    } else {
                        values = [call[0].slice(0,365),call[1].slice(0,365)]}
                    var lab=[[],[],[]];
                    var twitts=[[],[],[]];
                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element,myIndex){
                            if (myIndex%10 == 0) {
                                lab[index].splice(0, 0, element.date_create.substring(0, 10));
                            }else{
                                lab[index].splice(0, 0, "");
                            }
                            twitts[index].splice(0,0, element.tweets_count)
                        });
                    });
                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
                                {
                                    label: val[0] + " Tweets",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: twitts[0]
                                },
                                {
                                    label: val[1] + " Tweets",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: twitts[1]
                                },
                                {
                                    label: val[2] + " Tweets",
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: twitts[2]
                                }
                            ]
                        },
                        type: 'twitterHashtag03',
                         desc:  'Tweets containing the hashtags ' +val + ' over the last year'
                    }
                },
                twitterPage02 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'bar',
                            source: 'trend'
                        }
                    }
                    var values;
                    var lab;
                    if (call[2]!== undefined){
                        values = [call[0][0], call[1][0], call[2][0]];
                        lab=[val[0],val[1],val[2]]
                    } else {
                        values = [call[0][0], call[1][0], {tweets_count: '', followers_count: ''}];
                        lab=[val[0],val[1]]
                    }
                    return {


                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Tweets",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: [values[0].tweets_count,values[1].tweets_count,values[2].tweets_count]
                                },
                                {
                                    label: "Followers",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: [values[0].followers_count,values[1].followers_count,values[2].followers_count]
                                }
                            ]
                        },
                        type: 'twitterPage02',
                         desc:  val+'\'s tweets and followers'
                    }
                },
                twitterPage03 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'trend'
                        }
                    }
                    var values;
                    if (call[2]!== undefined){
                        values = [call[0].slice(0,7),call[1].slice(0,7),call[2].slice(0,7)]
                    } else {
                        values = [call[0].slice(0,7),call[1].slice(0,7)]}
                    var lab=[[],[],[]];
                    var twitts=[[],[],[]];
                    var folls=[[],[],[]];

                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element){
                            lab[index].splice(0,0,element.date_create.substring(0,10));
                            twitts[index].splice(0,0, element.tweets_count);
                            folls[index].splice(0,0, element.followers_count)
                        });
                    });
                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
                                {
                                    label: val[0] + "\'s Tweets",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: twitts[0]
                                },
                                {
                                    label: val[0] + "\'s Followers",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: folls[0]
                                },
                                {
                                    label: val[1] + "\'s Tweets",
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: twitts[1]
                                },
                                {
                                    label: val[1] + "\'s Followers",
                                    fillColor: "rgba(121,107,185,0.2)",
                                    strokeColor: "rgba(121,107,185,1)",
                                    pointColor: "rgba(121,107,185,1)",
                                    data: folls[1]
                                },
                                {
                                    label: val[2] + "\'s Tweets",
                                    fillColor: "rgba(180,220,180,0.2)",
                                    strokeColor: "rgba(180,220,180,1)",
                                    pointColor: "rgba(180,220,180,1)",
                                    data: twitts[2]
                                },
                                {
                                    label: val[2] + "\'s Followers",
                                    fillColor: "rgba(111,157,205,0.2)",
                                    strokeColor: "rgba(111,157,205,1)",
                                    pointColor: "rgba(111,157,205,1)",
                                    data: folls[2]
                                }
                            ]
                        },
                        type: 'twitterPage03',
                         desc:  val + '\'s tweets and followers over the last week'
                    }
                },
                twitterPage04 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'trend'
                        }
                    }
                    var values;
                    if (call[2]!== undefined){
                        values = [call[0].slice(0,31),call[1].slice(0,31),call[2].slice(0,31)]
                    } else {
                        values = [call[0].slice(0,31),call[1].slice(0,31)]}
                    var lab=[[],[],[]];
                    var twitts=[[],[],[]];
                    var folls=[[],[],[]];
                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element,myIndex){
                            if (myIndex%3 == 0) {
                                lab[index].splice(0, 0, element.date_create.substring(0, 10));
                            }else{
                                lab[index].splice(0, 0, "");
                            }
                            twitts[index].splice(0,0, element.tweets_count);
                            folls[index].splice(0,0, element.followers_count)
                        });
                    });
                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
                                {
                                    label: val[0] + "\'s Tweets",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: twitts[0]
                                },
                                {
                                    label: val[0] + "\'s Followers",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: folls[0]
                                },
                                {
                                    label: val[1] + "\'s Tweets",
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: twitts[1]
                                },
                                {
                                    label: val[1] + "\'s Followers",
                                    fillColor: "rgba(121,107,185,0.2)",
                                    strokeColor: "rgba(121,107,185,1)",
                                    pointColor: "rgba(121,107,185,1)",
                                    data: folls[1]
                                },
                                {
                                    label: val[2] + "\'s Tweets",
                                    fillColor: "rgba(180,220,180,0.2)",
                                    strokeColor: "rgba(180,220,180,1)",
                                    pointColor: "rgba(180,220,180,1)",
                                    data: twitts[2]
                                },
                                {
                                    label: val[2] + "\'s Followers",
                                    fillColor: "rgba(111,157,205,0.2)",
                                    strokeColor: "rgba(111,157,205,1)",
                                    pointColor: "rgba(111,157,205,1)",
                                    data: folls[2]
                                }
                            ]
                        },
                        type: 'twitterPage04',
                         desc:  val + '\'s tweets and followers over the last month'
                    }
                },
                twitterPage05 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'trend'
                        }
                    }
                    var values;
                    if (call[2]!== undefined){
                        values = [call[0].slice(0,365),call[1].slice(0,365),call[2].slice(0,365)]
                    } else {
                        values = [call[0].slice(0,365),call[1].slice(0,365)]}
                    var lab=[[],[],[]];
                    var twitts=[[],[],[]];
                    var folls=[[],[],[]];
                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element,myIndex){
                            if (myIndex%10 == 0) {
                                lab[index].splice(0, 0, element.date_create.substring(0, 10));
                            }else{
                                lab[index].splice(0, 0, "");
                            }
                            twitts[index].splice(0,0, element.tweets_count);
                            folls[index].splice(0,0, element.followers_count)
                        });
                    });
                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
                                {
                                    label: val[0] + "\'s Tweets",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: twitts[0]
                                },
                                {
                                    label: val[0] + "\'s Followers",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: folls[0]
                                },
                                {
                                    label: val[1] + "\'s Tweets",
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: twitts[1]
                                },
                                {
                                    label: val[1] + "\'s Followers",
                                    fillColor: "rgba(121,107,185,0.2)",
                                    strokeColor: "rgba(121,107,185,1)",
                                    pointColor: "rgba(121,107,185,1)",
                                    data: folls[1]
                                },
                                {
                                    label: val[2] + "\'s Tweets",
                                    fillColor: "rgba(180,220,180,0.2)",
                                    strokeColor: "rgba(180,220,180,1)",
                                    pointColor: "rgba(180,220,180,1)",
                                    data: twitts[2]
                                },
                                {
                                    label: val[2] + "\'s Followers",
                                    fillColor: "rgba(111,157,205,0.2)",
                                    strokeColor: "rgba(111,157,205,1)",
                                    pointColor: "rgba(111,157,205,1)",
                                    data: folls[2]
                                }
                            ]
                        },
                        type: 'twitterPage05',
                         desc:  val + '\'s tweets and followers over the last year'
                    }
                }
            };

            return confrontViews[viewType];
        };

        return getViews;

    }

    viewTypeTwConfModel.$inject = [];

    angular
        .module('app.type.view.data.module')
        .service('viewTypeTwConfModel', viewTypeTwConfModel);

})();