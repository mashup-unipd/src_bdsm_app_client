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


        var getViews = function(conf, cat, type, val, viewType){

            var graphs;
            var confrontViews;
            var singleViews;
            var defaultView;

            if (viewType !== undefined || viewType !== null){
                defaultView = viewType;
            }

            confrontViews = {
                facebookPage02 : function(call){
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
                    var likes=[[],[],[]];
                    var talk=[[],[],[]];
                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element){
                            lab[index].splice(0,0,element.date_create.substring(0,10));
                            likes[index].splice(0,0,element.likes);
                            talk[index].splice(0,0,element.talking_about);
                        });
                    });
                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
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
                        desc: 'Likes and talking abouts of the pages '+val +' over the last week'
                    }
                },
                facebookPage03 : function(call){
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
                    var likes=[[],[],[]];
                    var talk=[[],[],[]];
                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element,myIndex){
                            if (myIndex%3 == 0) {
                                lab[index].splice(0, 0, element.date_create.substring(0, 10));
                            }else{
                                lab[index].splice(0, 0, "");
                            }
                            likes[index].splice(0,0,element.likes);
                            talk[index].splice(0,0,element.talking_about);
                        });
                    });

                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
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
                        desc: 'Likes and talking abouts of the pages '+ val + ' over the last month'
                    }
                },
                facebookPage04 : function(call){
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
                    var likes=[[],[],[]];
                    var talk=[[],[],[]];
                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element,myIndex){
                            if (myIndex%10 == 0) {
                                lab[index].splice(0, 0, element.date_create.substring(0, 10));
                            }else{
                                lab[index].splice(0, 0, "");
                            }
                            likes[index].splice(0,0,element.likes);
                            talk[index].splice(0,0,element.talking_about);
                        });
                    });

                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
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
                        desc: 'Likes and talking abouts of the pages '+ val + ' over the last year'
                    }
                },
                facebookPage05 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'bar',
                            source: 'media'
                        }
                    }
                    var values;
                    if (call[2]!== undefined){
                        values = [call[0].slice(0,7),call[1].slice(0,7),call[2].slice(0,7)]
                    } else {
                        values = [call[0].slice(0,7),call[1].slice(0,7)]}
                    var lab=[[],[],[]];
                    var averageComments=[[],[],[]];
                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element){
                            lab[index].splice(0,0,element.date_create.substring(0,10));
                            var posts=element.posts;
                            var comments= element.admin_comments + element.comments;
                            averageComments[index].splice(0,0, (comments/posts))
                        });
                    });
                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
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
                        desc: 'Average comments on each post of the pages '+ val + ' over the last week'
                    }
                },
                facebookPage06 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'bar',
                            source: 'media'
                        }
                    }
                    var values;
                    if (call[2]!== undefined){
                        values = [call[0].slice(0,31),call[1].slice(0,31),call[2].slice(0,31)]
                    } else {
                        values = [call[0].slice(0,31),call[1].slice(0,31)]}
                    var lab=[[],[],[]];
                    var averageComments=[[],[],[]];
                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element,myIndex){
                            if (myIndex%3 == 0) {
                                lab[index].splice(0, 0, element.date_create.substring(0, 10));
                            }else{
                                lab[index].splice(0, 0, "");
                            }
                            var posts=element.posts;
                            var comments= element.admin_comments + element.comments;
                            averageComments[index].splice(0,0, (comments/posts))
                        });
                    });

                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
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
                        desc: 'Average comments on each post of the pages '+ val + ' over the last month'
                    }
                },
                facebookPage07 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'bar',
                            source: 'media'
                        }
                    }
                    var values;
                    if (call[2]!== undefined){
                        values = [call[0].slice(0,365),call[1].slice(0,365),call[2].slice(0,365)]
                    } else {
                        values = [call[0].slice(0,365),call[1].slice(0,365)]}
                    var lab=[[],[],[]];
                    var averageComments=[[],[],[]];
                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element,myIndex){
                            if (myIndex%10 == 0) {
                                lab[index].splice(0, 0, element.date_create.substring(0, 10));
                            }else{
                                lab[index].splice(0, 0, "");
                            }
                            var posts=element.posts;
                            var comments= element.admin_comments + element.comments;
                            averageComments[index].splice(0,0, (comments/posts))
                        });
                    });

                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
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
                        desc: 'Average comments on each post of the pages '+ val + ' over the last year'
                    }
                },

                facebookEvent01 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'pie',
                            source: 'trend'
                        }
                    }
                    var values;
                    if (call[2]!== undefined){
                        values = [call[0][0], call[1][0], call[2][0]]
                    } else {
                        values = [call[0][0], call[1][0], {maybe: '', declined: '', attending: ''}] }
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
                        desc: 'People who marked "join", "maybe" or "decline" for the events '+ val
                    }
                },
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
                        desc: 'Tweets containing the hashtags ' +val + ' over the last week'
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
                        desc: 'Tweets containing the hashtags ' +val + ' over the last month'
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
                        desc: 'Tweets containing the hashtags ' +val + ' over the last year'
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
                        desc: val + '\'s tweets and followers over the last year'
                    }
                },
                instagramHashtag01 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,7);
                    var lab=[];
                    var photos=[];
                    var videos=[];
                    values.forEach(function(element){
                        lab.splice(0,0,element.date_create.substring(0,10));
                        photos.splice(0,0,element.photos_count);
                        videos.splice(0,0,element.videos_count);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Photos",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: photos
                                },
                                {
                                    label: "Videos",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: videos
                                }
                            ]
                        },
                        desc: 'Photos and videos containing the hashtag ' +val + ' over the last week'
                    }
                },
                instagramHashtag02 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,31);
                    var lab=[];
                    var photos=[];
                    var videos=[];
                    var index=0;
                    values.forEach(function(element){
                        if (index%3 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        photos.splice(0,0,element.photos_count);
                        videos.splice(0,0,element.videos_count);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Photos",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: photos
                                },
                                {
                                    label: "Videos",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: videos
                                }
                            ]
                        },
                        desc: 'Photos and videos containing the hashtag ' +val + ' tweets and followers over the last month'
                    }
                },
                instagramHashtag03 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,365);
                    var lab=[];
                    var photos=[];
                    var videos=[];
                    var index= 0;
                    values.forEach(function(element){
                        if (index%10 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        photos.splice(0,0,element.photos_count);
                        videos.splice(0,0,element.videos_count);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Photos",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: photos
                                },
                                {
                                    label: "Videos",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: videos
                                }
                            ]
                        },
                        desc: 'Photos and videos containing the hashtag ' +val + ' over the last year'
                    }
                },
                instagramHashtag04 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,7);
                    var lab=[];
                    var likes=[];
                    var comments=[];
                    values.forEach(function(element){
                        lab.splice(0,0,element.date_create.substring(0,10));
                        likes.splice(0,0,element.likes);
                        comments.splice(0,0,element.comments);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Likes",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: likes
                                },
                                {
                                    label: "Comments",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: comments
                                }
                            ]
                        },
                        desc: 'Likes and comments of the posts containing the hashtag ' +val + ' over the last week'
                    }
                },
                instagramHashtag05 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,31);
                    var lab=[];
                    var likes=[];
                    var comments=[];
                    var index=0;
                    values.forEach(function(element){
                        if (index%3 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        likes.splice(0,0,element.likes);
                        comments.splice(0,0,element.comments);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Likes",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: likes
                                },
                                {
                                    label: "Comments",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: comments
                                }
                            ]
                        },
                        desc: 'Likes and comments of the posts containing the hashtag ' +val + ' tweets and followers over the last month'
                    }
                },
                instagramHashtag06 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,365);
                    var lab=[];
                    var likes=[];
                    var comments=[];
                    var index= 0;
                    values.forEach(function(element){
                        if (index%10 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        likes.splice(0,0,element.likes);
                        comments.splice(0,0,element.comments);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Likes",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: likes
                                },
                                {
                                    label: "Comments",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: comments
                                }
                            ]
                        },
                        desc: 'Likes and comments of the posts containing the hashtag ' +val + ' over the last year'
                    }
                },
                instagramUser00 : function(call){
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
                                    label: "Posts",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: [call[0][0].media]
                                },
                                {
                                    label: "Followers",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: [call[0][0].followed_by]
                                }
                            ]
                        },
                        desc: val+'\'s posts and followers'
                    }
                },
                instagramUser01 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'trend'
                        }
                    }
                    var values = call[0].slice(0,7);
                    var lab=[];
                    var photos=[];
                    var follows=[];
                    values.forEach(function(element){
                        lab.splice(0,0,element.date_create.substring(0,10));
                        photos.splice(0,0,element.media);
                        follows.splice(0,0,element.followed_by);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Posts",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: photos
                                },
                                {
                                    label: "Followers",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: follows
                                }
                            ]
                        },
                        desc: val + '\'s posts and followers over the last week'
                    }
                },
                instagramUser02 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'trend'
                        }
                    }
                    var values = call[0].slice(0,31);
                    var lab=[];
                    var photos=[];
                    var follows=[];
                    var index=0;
                    values.forEach(function(element){
                        if (index%3 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        photos.splice(0,0,element.media);
                        follows.splice(0,0,element.followed_by);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Posts",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: photos
                                },
                                {
                                    label: "Followers",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: follows
                                }
                            ]
                        },
                        desc: val + '\'s posts and followers over the last month'
                    }
                },
                instagramUser03 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'trend'
                        }
                    }
                    var values = call[0].slice(0,365);
                    var lab=[];
                    var photos=[];
                    var follows=[];
                    var index= 0;
                    values.forEach(function(element){
                        if (index%10 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        photos.splice(0,0,element.media);
                        follows.splice(0,0,element.followed_by);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Posts",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: photos
                                },
                                {
                                    label: "Followers",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: follows
                                }
                            ]
                        },
                        desc: val + '\'s posts and followers over the last year'
                    }
                },
                instagramUser04 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,7);
                    var lab=[];
                    var likes=[];
                    var comments=[];
                    values.forEach(function(element){
                        lab.splice(0,0,element.date_create.substring(0,10));
                        likes.splice(0,0,element.likes);
                        comments.splice(0,0,element.comments);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Likes",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: likes
                                },
                                {
                                    label: "Comments",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: comments
                                }
                            ]
                        },
                        desc: val +'\'s likes and comments over the last week'
                    }
                },
                instagramUser05 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,31);
                    var lab=[];
                    var likes=[];
                    var comments=[];
                    var index=0;
                    values.forEach(function(element){
                        if (index%3 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        likes.splice(0,0,element.likes);
                        comments.splice(0,0,element.comments);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Likes",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: likes
                                },
                                {
                                    label: "Comments",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: comments
                                }
                            ]
                        },
                        desc: val +'\'s likes and comments over the last month'
                    }
                },
                instagramUser06 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,365);
                    var lab=[];
                    var likes=[];
                    var comments=[];
                    var index= 0;
                    values.forEach(function(element){
                        if (index%10 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        likes.splice(0,0,element.likes);
                        comments.splice(0,0,element.comments);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Likes",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: likes
                                },
                                {
                                    label: "Comments",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: comments
                                }
                            ]
                        },
                        desc: val +'\'s likes and comments over the last year'
                    }
                },
                instagramUser07 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,7);
                    var lab=[];
                    var likes=[];
                    var comments=[];
                    values.forEach(function(element){
                        lab.splice(0,0,element.date_create.substring(0,10));
                        likes.splice(0,0,element.likes/(element.media/3));
                        comments.splice(0,0,element.comments/(element.media/3));
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Likes",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: likes
                                },
                                {
                                    label: "Comments",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: comments
                                }
                            ]
                        },
                        desc: val +'\'s likes and comments divided by the average daily posts over the last week'
                    }
                },
                instagramUser08 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,31);
                    var lab=[];
                    var likes=[];
                    var comments=[];
                    var index=0;
                    values.forEach(function(element){
                        if (index%3 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        likes.splice(0,0,element.likes/(element.media/3));
                        comments.splice(0,0,element.comments/(element.media/3));
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Likes",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: likes
                                },
                                {
                                    label: "Comments",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: comments
                                }
                            ]
                        },
                        desc: val +'\'s likes and comments divided by the average daily posts over the last month'
                    }
                },
                instagramUser09 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,365);
                    var lab=[];
                    var likes=[];
                    var comments=[];
                    var index= 0;
                    values.forEach(function(element){
                        if (index%10 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        likes.splice(0,0,element.likes/(element.media/3));
                        comments.splice(0,0,element.comments/(element.media/3));
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Likes",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: likes
                                },
                                {
                                    label: "Comments",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: comments
                                }
                            ]
                        },
                        desc: val +'\'s likes and comments divided by the average daily posts over the last year'
                    }
                },
                instagramUser10 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'bar',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,7);
                    var lab=[];
                    var posts=[];
                    values.forEach(function(element){
                        lab.splice(0,0,element.date_create.substring(0,10));
                        posts.splice(0,0,element.media/3);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Average daily posts",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: posts
                                }
                            ]
                        },
                        desc: val +'\'s average daily posts over the last week'
                    }
                },
                instagramUser11 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'bar',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,31);
                    var lab=[];
                    var posts=[];
                    var index=0;
                    values.forEach(function(element){
                        if (index%3 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        posts.splice(0,0,element.media/3);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Average daily posts",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: posts
                                }
                            ]
                        },
                        desc: val +'\'s average daily posts over the last month'
                    }
                },
                instagramUser12 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'bar',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,365);
                    var lab=[];
                    var posts=[];
                    var index= 0;
                    values.forEach(function(element){
                        if (index%10 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        posts.splice(0,0,element.media/3);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Average daily posts",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: posts
                                }
                            ]
                        },
                        desc: val +'\'s average daily posts over the last year'
                    }
                }
            };

//      VIEWS da metrica SINGOLA _____________________________________________________________________________

            singleViews = {
                facebookPage01 : function(call){
                    if (call=="outside"){
                    return {
                        kind: 'pie',
                        source: 'media'
                    }
                    }
                    var admin= call[0][0].admin_comments;
                    var comm= call[0][0].comments;
                    if (admin + comm == 0){ comm = 1 }
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
                        desc: 'Comments on the page '+ val + ' over the last three days'
                    }
                },
                facebookPage02 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'trend'
                        }
                    }
                    var values = call[0].slice(0,7);
                    var lab=[];
                    var likes=[];
                    var talk=[];
                    values.forEach(function(element){
                        lab.splice(0,0,element.date_create.substring(0,10));
                        likes.splice(0,0,element.likes);
                        talk.splice(0,0,element.talking_about);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
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
                        desc: 'Likes and talking abouts of the page '+ val + ' over the last week'
                    }
                },
                facebookPage03 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'trend'
                        }
                    }
                    var values = call[0].slice(0,31);
                    var lab=[];
                    var likes=[];
                    var talk=[];
                    var index=0;
                    values.forEach(function(element){
                        if (index%3 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }                        likes.splice(0,0,element.likes);
                        talk.splice(0,0,element.talking_about);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
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
                        desc: 'Likes and talking abouts of the page '+ val + ' over the last month'
                    }
                },
                facebookPage04 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'trend'
                        }
                    }
                    var values = call[0].slice(0,365);
                    var lab=[];
                    var likes=[];
                    var talk=[];
                    var index= 0;
                    values.forEach(function(element){
                        if (index%10 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }                        likes.splice(0,0,element.likes);
                        talk.splice(0,0,element.talking_about);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
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
                        desc: 'Likes and talking abouts of the page '+ val + ' over the last year'
                    }
                },
                facebookPage05 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'bar',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,7);
                    var lab=[];
                    var averageComments=[];
                    values.forEach(function(element){
                        lab.splice(0,0,element.date_create.substring(0,10));
                        var posts=element.posts;
                        var comments= element.admin_comments + element.comments;
                        averageComments.splice(0,0, (comments/posts) );
                    });

                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Average comments",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    data: averageComments
                                }
                            ]
                        },
                        desc: 'Average comments on each post of the page '+ val + ' over the last week'
                    }
                },
                facebookPage06 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'bar',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,31);
                    var lab=[];
                    var averageComments=[];
                    var index=0;
                    values.forEach(function(element){
                        if (index%3 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }                        var posts=element.posts;
                        var comments= element.admin_comments + element.comments;
                        averageComments.splice(0,0, (comments/posts) );
                    });

                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Average comments",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    data: averageComments
                                }
                            ]
                        },
                        desc: 'Average comments on each post of the page '+ val + ' over the last month'
                    }
                },
                facebookPage07 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'bar',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,365);
                    var lab=[];
                    var averageComments=[];
                    var index=0;
                    values.forEach(function(element){
                        if (index%10 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        var posts=element.posts;
                        var comments= element.admin_comments + element.comments;
                        averageComments.splice(0,0, (comments/posts) );
                    });

                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Average comments",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    data: averageComments
                                }
                            ]
                        },
                        desc: 'Average comments on each post of the page '+ val + ' over the last year'
                    }
                },
                facebookEvent01 : function(call){
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
                },
                facebookEvent02 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'pie',
                            source: 'media'
                        }
                    }
                    var admin= call[0][0].admin_comments;
                    var comm= call[0][0].comments;
                    if (admin + comm == 0){ comm = 1 }
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
                        desc: 'Comments on the event '+ val + ' over the last three days'
                    }
                },
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
                },
                instagramHashtag01 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,7);
                    var lab=[];
                    var photos=[];
                    var videos=[];
                    values.forEach(function(element){
                        lab.splice(0,0,element.date_create.substring(0,10));
                        photos.splice(0,0,element.photos_count);
                        videos.splice(0,0,element.videos_count);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Photos",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: photos
                                },
                                {
                                    label: "Videos",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: videos
                                }
                            ]
                        },
                        desc: 'Photos and videos containing the hashtag ' +val + ' over the last week'
                    }
                },
                instagramHashtag02 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,31);
                    var lab=[];
                    var photos=[];
                    var videos=[];
                    var index=0;
                    values.forEach(function(element){
                        if (index%3 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        photos.splice(0,0,element.photos_count);
                        videos.splice(0,0,element.videos_count);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Photos",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: photos
                                },
                                {
                                    label: "Videos",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: videos
                                }
                            ]
                        },
                        desc: 'Photos and videos containing the hashtag ' +val + ' tweets and followers over the last month'
                    }
                },
                instagramHashtag03 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,365);
                    var lab=[];
                    var photos=[];
                    var videos=[];
                    var index= 0;
                    values.forEach(function(element){
                        if (index%10 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        photos.splice(0,0,element.photos_count);
                        videos.splice(0,0,element.videos_count);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Photos",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: photos
                                },
                                {
                                    label: "Videos",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: videos
                                }
                            ]
                        },
                        desc: 'Photos and videos containing the hashtag ' +val + ' over the last year'
                    }
                },
                instagramHashtag04 : function(call){
                if (call=="outside"){
                    return {
                        kind: 'line',
                        source: 'media'
                    }
                }
                var values = call[0].slice(0,7);
                var lab=[];
                var likes=[];
                var comments=[];
                values.forEach(function(element){
                    lab.splice(0,0,element.date_create.substring(0,10));
                    likes.splice(0,0,element.likes);
                    comments.splice(0,0,element.comments);
                });
                return {
                    dataSet: {
                        labels : lab,
                        datasets : [
                            {
                                label: "Likes",
                                fillColor: "rgba(220,220,220,0.2)",
                                strokeColor: "rgba(220,220,220,1)",
                                pointColor: "rgba(220,220,220,1)",
                                data: likes
                            },
                            {
                                label: "Comments",
                                fillColor: "rgba(151,187,205,0.2)",
                                strokeColor: "rgba(151,187,205,1)",
                                pointColor: "rgba(151,187,205,1)",
                                data: comments
                            }
                        ]
                    },
                    desc: 'Likes and comments of the posts containing the hashtag ' +val + ' over the last week'
                }
            },
            instagramHashtag05 : function(call){
                if (call=="outside"){
                    return {
                        kind: 'line',
                        source: 'media'
                    }
                }
                var values = call[0].slice(0,31);
                var lab=[];
                var likes=[];
                var comments=[];
                var index=0;
                values.forEach(function(element){
                    if (index%3 == 0) {
                        lab.splice(0, 0, element.date_create.substring(0, 10));
                        index++;
                    }else{
                        lab.splice(0, 0, "");
                        index++;
                    }
                    likes.splice(0,0,element.likes);
                    comments.splice(0,0,element.comments);
                });
                return {
                    dataSet: {
                        labels : lab,
                        datasets : [
                            {
                                label: "Likes",
                                fillColor: "rgba(220,220,220,0.2)",
                                strokeColor: "rgba(220,220,220,1)",
                                pointColor: "rgba(220,220,220,1)",
                                data: likes
                            },
                            {
                                label: "Comments",
                                fillColor: "rgba(151,187,205,0.2)",
                                strokeColor: "rgba(151,187,205,1)",
                                pointColor: "rgba(151,187,205,1)",
                                data: comments
                            }
                        ]
                    },
                    desc: 'Likes and comments of the posts containing the hashtag ' +val + ' tweets and followers over the last month'
                }
            },
            instagramHashtag06 : function(call){
                if (call=="outside"){
                    return {
                        kind: 'line',
                        source: 'media'
                    }
                }
                var values = call[0].slice(0,365);
                var lab=[];
                var likes=[];
                var comments=[];
                var index= 0;
                values.forEach(function(element){
                    if (index%10 == 0) {
                        lab.splice(0, 0, element.date_create.substring(0, 10));
                        index++;
                    }else{
                        lab.splice(0, 0, "");
                        index++;
                    }
                    likes.splice(0,0,element.likes);
                    comments.splice(0,0,element.comments);
                });
                return {
                    dataSet: {
                        labels : lab,
                        datasets : [
                            {
                                label: "Likes",
                                fillColor: "rgba(220,220,220,0.2)",
                                strokeColor: "rgba(220,220,220,1)",
                                pointColor: "rgba(220,220,220,1)",
                                data: likes
                            },
                            {
                                label: "Comments",
                                fillColor: "rgba(151,187,205,0.2)",
                                strokeColor: "rgba(151,187,205,1)",
                                pointColor: "rgba(151,187,205,1)",
                                data: comments
                            }
                        ]
                    },
                    desc: 'Likes and comments of the posts containing the hashtag ' +val + ' over the last year'
                }
            },
                instagramUser00 : function(call){
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
                                    label: "Posts",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: [call[0][0].media]
                                },
                                {
                                    label: "Followers",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: [call[0][0].followed_by]
                                }
                            ]
                        },
                        desc: val+'\'s posts and followers'
                    }
                },
                instagramUser01 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'trend'
                        }
                    }
                    var values = call[0].slice(0,7);
                    var lab=[];
                    var photos=[];
                    var follows=[];
                    values.forEach(function(element){
                        lab.splice(0,0,element.date_create.substring(0,10));
                        photos.splice(0,0,element.media);
                        follows.splice(0,0,element.followed_by);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Posts",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: photos
                                },
                                {
                                    label: "Followers",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: follows
                                }
                            ]
                        },
                        desc: val + '\'s posts and followers over the last week'
                    }
                },
                instagramUser02 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'trend'
                        }
                    }
                    var values = call[0].slice(0,31);
                    var lab=[];
                    var photos=[];
                    var follows=[];
                    var index=0;
                    values.forEach(function(element){
                        if (index%3 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        photos.splice(0,0,element.media);
                        follows.splice(0,0,element.followed_by);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Posts",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: photos
                                },
                                {
                                    label: "Followers",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: follows
                                }
                            ]
                        },
                        desc: val + '\'s posts and followers over the last month'
                    }
                },
                instagramUser03 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'trend'
                        }
                    }
                    var values = call[0].slice(0,365);
                    var lab=[];
                    var photos=[];
                    var follows=[];
                    var index= 0;
                    values.forEach(function(element){
                        if (index%10 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        photos.splice(0,0,element.media);
                        follows.splice(0,0,element.followed_by);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Posts",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: photos
                                },
                                {
                                    label: "Followers",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: follows
                                }
                            ]
                        },
                        desc: val + '\'s posts and followers over the last year'
                    }
                },
                instagramUser04 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,7);
                    var lab=[];
                    var likes=[];
                    var comments=[];
                    values.forEach(function(element){
                        lab.splice(0,0,element.date_create.substring(0,10));
                        likes.splice(0,0,element.likes);
                        comments.splice(0,0,element.comments);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Likes",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: likes
                                },
                                {
                                    label: "Comments",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: comments
                                }
                            ]
                        },
                        desc: val +'\'s likes and comments over the last week'
                    }
                },
                instagramUser05 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,31);
                    var lab=[];
                    var likes=[];
                    var comments=[];
                    var index=0;
                    values.forEach(function(element){
                        if (index%3 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        likes.splice(0,0,element.likes);
                        comments.splice(0,0,element.comments);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Likes",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: likes
                                },
                                {
                                    label: "Comments",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: comments
                                }
                            ]
                        },
                        desc: val +'\'s likes and comments over the last month'
                    }
                },
                instagramUser06 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,365);
                    var lab=[];
                    var likes=[];
                    var comments=[];
                    var index= 0;
                    values.forEach(function(element){
                        if (index%10 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        likes.splice(0,0,element.likes);
                        comments.splice(0,0,element.comments);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Likes",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: likes
                                },
                                {
                                    label: "Comments",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: comments
                                }
                            ]
                        },
                        desc: val +'\'s likes and comments over the last year'
                    }
                },
                instagramUser07 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,7);
                    var lab=[];
                    var likes=[];
                    var comments=[];
                    values.forEach(function(element){
                        lab.splice(0,0,element.date_create.substring(0,10));
                        likes.splice(0,0,element.likes/(element.media/3));
                        comments.splice(0,0,element.comments/(element.media/3));
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Likes",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: likes
                                },
                                {
                                    label: "Comments",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: comments
                                }
                            ]
                        },
                        desc: val +'\'s likes and comments divided by the average daily posts over the last week'
                    }
                },
                instagramUser08 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,31);
                    var lab=[];
                    var likes=[];
                    var comments=[];
                    var index=0;
                    values.forEach(function(element){
                        if (index%3 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        likes.splice(0,0,element.likes/(element.media/3));
                        comments.splice(0,0,element.comments/(element.media/3));
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Likes",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: likes
                                },
                                {
                                    label: "Comments",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: comments
                                }
                            ]
                        },
                        desc: val +'\'s likes and comments divided by the average daily posts over the last month'
                    }
                },
                instagramUser09 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'line',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,365);
                    var lab=[];
                    var likes=[];
                    var comments=[];
                    var index= 0;
                    values.forEach(function(element){
                        if (index%10 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        likes.splice(0,0,element.likes/(element.media/3));
                        comments.splice(0,0,element.comments/(element.media/3));
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Likes",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: likes
                                },
                                {
                                    label: "Comments",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: comments
                                }
                            ]
                        },
                        desc: val +'\'s likes and comments divided by the average daily posts over the last year'
                    }
                },
                instagramUser10 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'bar',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,7);
                    var lab=[];
                    var posts=[];
                    values.forEach(function(element){
                        lab.splice(0,0,element.date_create.substring(0,10));
                        posts.splice(0,0,element.media/3);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Average daily posts",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: posts
                                }
                            ]
                        },
                        desc: val +'\'s average daily posts over the last week'
                    }
                },
                instagramUser11 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'bar',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,31);
                    var lab=[];
                    var posts=[];
                    var index=0;
                    values.forEach(function(element){
                        if (index%3 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        posts.splice(0,0,element.media/3);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Average daily posts",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: posts
                                }
                            ]
                        },
                        desc: val +'\'s average daily posts over the last month'
                    }
                },
                instagramUser12 : function(call){
                    if (call=="outside"){
                        return {
                            kind: 'bar',
                            source: 'media'
                        }
                    }
                    var values = call[0].slice(0,365);
                    var lab=[];
                    var posts=[];
                    var index= 0;
                    values.forEach(function(element){
                        if (index%10 == 0) {
                            lab.splice(0, 0, element.date_create.substring(0, 10));
                            index++;
                        }else{
                            lab.splice(0, 0, "");
                            index++;
                        }
                        posts.splice(0,0,element.media/3);
                    });
                    return {
                        dataSet: {
                            labels : lab,
                            datasets : [
                                {
                                    label: "Average daily posts",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: posts
                                }
                            ]
                        },
                        desc: val +'\'s average daily posts over the last year'
                    }
                }
            };

            if (conf) {
        //  ------ WIEWS DI CONFRONTO -----------------//
                switch (cat.toLowerCase()) {
                    case 'facebook':
                        if (type == 'page') {
                            graphs = [
                                confrontViews.facebookPage02,
                                confrontViews.facebookPage03,
                                confrontViews.facebookPage04,
                                confrontViews.facebookPage05,
                                confrontViews.facebookPage06,
                                confrontViews.facebookPage07
                            ];
                        } else {
                            graphs = [confrontViews.facebookEvent01];
                        }
                        break;
                    case 'twitter':
                        if (type == 'hashtag') {
                            graphs = [
                                confrontViews.twitterHashtag01,
                                confrontViews.twitterHashtag02,
                                confrontViews.twitterHashtag03
                            ];
                        } else {
                            graphs = [
                                confrontViews.twitterPage02,
                                confrontViews.twitterPage03,
                                confrontViews.twitterPage04,
                                confrontViews.twitterPage05
                            ];
                        }
                        break;
                    case 'instagram':
                        if (type == 'hashtag') {
                            graphs = [confrontViews.instagramHashtag01];
                        } else {
                            graphs = [confrontViews.instagramUser01];
                        }
                        break;
                    default :
                        graphs = [confrontViews.defaultView]
                }
        //  ------ WIEWS GENERATE DA METRICA SINGOLA --//
            }else{
                switch (cat.toLowerCase()) {
                    case 'facebook':
                        if (type == 'page') {
                            graphs = [
                                singleViews.facebookPage01,
                                singleViews.facebookPage02,
                                singleViews.facebookPage03,
                                singleViews.facebookPage04,
                                singleViews.facebookPage05,
                                singleViews.facebookPage06,
                                singleViews.facebookPage07
                            ];
                        } else {
                            graphs = [
                                singleViews.facebookEvent01,
                                singleViews.facebookEvent02
                            ];
                        }
                        break;
                    case 'twitter':
                        if (type == 'hashtag') {
                            graphs = [
                                singleViews.twitterHashtag01,
                                singleViews.twitterHashtag02,
                                singleViews.twitterHashtag03,
                                singleViews.twitterHashtag04
                            ];
                        } else {
                            graphs = [
                                singleViews.twitterPage01,
                                singleViews.twitterPage02,
                                singleViews.twitterPage03,
                                singleViews.twitterPage04,
                                singleViews.twitterPage05
                            ];
                        }
                        break;
                    case 'instagram':
                        if (type == 'hashtag') {
                            graphs = [
                                singleViews.instagramHashtag01,
                                singleViews.instagramHashtag02,
                                singleViews.instagramHashtag03,
                                singleViews.instagramHashtag04,
                                singleViews.instagramHashtag05,
                                singleViews.instagramHashtag06
                            ];
                        } else {
                            graphs = [
                                singleViews.instagramUser00,
                                singleViews.instagramUser01,
                                singleViews.instagramUser02,
                                singleViews.instagramUser03,
                                singleViews.instagramUser04,
                                singleViews.instagramUser05,
                                singleViews.instagramUser06,
                                singleViews.instagramUser07,
                                singleViews.instagramUser08,
                                singleViews.instagramUser09,
                                singleViews.instagramUser10,
                                singleViews.instagramUser11,
                                singleViews.instagramUser12
                            ];
                        }
                        break;
                    default :
                        graphs = [singleViews.defaultView];
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