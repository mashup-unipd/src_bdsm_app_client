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


    function viewTypeIgConfModel() {


        var getViews = function(val, viewType){



            var confrontViews = {
                instagramHashtag01 : function(call){
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
                    var photos=[[],[],[]];
                    var videos=[[],[],[]];
                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element){
                            lab[index].splice(0,0,element.date_create.substring(0,10));
                            photos[index].splice(0,0,element.photos_count);
                            videos[index].splice(0,0,element.videos_count)
                        });
                    });

                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
                                {
                                    label: val[0] + "\'s Photos",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: photos[0]
                                },
                                {
                                    label: val[0] + "\'s Videos",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: videos[0]
                                },
                                {
                                    label: val[1] + "\'s Photos",
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: photos[1]
                                },
                                {
                                    label: val[1] + "\'s Videos",
                                    fillColor: "rgba(121,107,185,0.2)",
                                    strokeColor: "rgba(121,107,185,1)",
                                    pointColor: "rgba(121,107,185,1)",
                                    data: videos[1]
                                },
                                {
                                    label: val[2] + "\'s Photos",
                                    fillColor: "rgba(180,220,180,0.2)",
                                    strokeColor: "rgba(180,220,180,1)",
                                    pointColor: "rgba(180,220,180,1)",
                                    data: photos[2]
                                },
                                {
                                    label: val[2] + "\'s Videos",
                                    fillColor: "rgba(111,157,205,0.2)",
                                    strokeColor: "rgba(111,157,205,1)",
                                    pointColor: "rgba(111,157,205,1)",
                                    data: videos[2]
                                }
                            ]
                        },
                        desc: 'Photos and videos containing the hashtags ' +val + ' over the last week'
                    }
                },
                instagramHashtag02 : function(call){
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
                    var photos=[[],[],[]];
                    var videos=[[],[],[]];
                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element,myIndex){
                            if (myIndex%3 == 0) {
                                lab[index].splice(0, 0, element.date_create.substring(0, 10));
                            }else{
                                lab[index].splice(0, 0, "");
                            }
                            photos[index].splice(0,0,element.photos_count);
                            videos[index].splice(0,0,element.videos_count)
                        });
                    });

                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
                                {
                                    label: val[0] + "\'s Photos",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: photos[0]
                                },
                                {
                                    label: val[0] + "\'s Videos",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: videos[0]
                                },
                                {
                                    label: val[1] + "\'s Photos",
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: photos[1]
                                },
                                {
                                    label: val[1] + "\'s Videos",
                                    fillColor: "rgba(121,107,185,0.2)",
                                    strokeColor: "rgba(121,107,185,1)",
                                    pointColor: "rgba(121,107,185,1)",
                                    data: videos[1]
                                },
                                {
                                    label: val[2] + "\'s Photos",
                                    fillColor: "rgba(180,220,180,0.2)",
                                    strokeColor: "rgba(180,220,180,1)",
                                    pointColor: "rgba(180,220,180,1)",
                                    data: photos[2]
                                },
                                {
                                    label: val[2] + "\'s Videos",
                                    fillColor: "rgba(111,157,205,0.2)",
                                    strokeColor: "rgba(111,157,205,1)",
                                    pointColor: "rgba(111,157,205,1)",
                                    data: videos[2]
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
                    var values;
                    if (call[2]!== undefined){
                        values = [call[0].slice(0,365),call[1].slice(0,365),call[2].slice(0,365)]
                    } else {
                        values = [call[0].slice(0,365),call[1].slice(0,365)]}
                    var lab=[[],[],[]];
                    var photos=[[],[],[]];
                    var videos=[[],[],[]];
                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element,myIndex){
                            if (myIndex%10 == 0) {
                                lab[index].splice(0, 0, element.date_create.substring(0, 10));
                            }else{
                                lab[index].splice(0, 0, "");
                            }
                            photos[index].splice(0,0,element.photos_count);
                            videos[index].splice(0,0,element.videos_count);
                        });
                    });

                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
                                {
                                    label: val[0] + "\'s Photos",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: photos[0]
                                },
                                {
                                    label: val[0] + "\'s Videos",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: videos[0]
                                },
                                {
                                    label: val[1] + "\'s Photos",
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: photos[1]
                                },
                                {
                                    label: val[1] + "\'s Videos",
                                    fillColor: "rgba(121,107,185,0.2)",
                                    strokeColor: "rgba(121,107,185,1)",
                                    pointColor: "rgba(121,107,185,1)",
                                    data: videos[1]
                                },
                                {
                                    label: val[2] + "\'s Photos",
                                    fillColor: "rgba(180,220,180,0.2)",
                                    strokeColor: "rgba(180,220,180,1)",
                                    pointColor: "rgba(180,220,180,1)",
                                    data: photos[2]
                                },
                                {
                                    label: val[2] + "\'s Videos",
                                    fillColor: "rgba(111,157,205,0.2)",
                                    strokeColor: "rgba(111,157,205,1)",
                                    pointColor: "rgba(111,157,205,1)",
                                    data: videos[2]
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
                    var values;
                    if (call[2]!== undefined){
                        values = [call[0].slice(0,7),call[1].slice(0,7),call[2].slice(0,7)]
                    } else {
                        values = [call[0].slice(0,7),call[1].slice(0,7)]}
                    var lab=[[],[],[]];
                    var likes=[[],[],[]];
                    var comments=[[],[],[]];

                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element){
                            lab[index].splice(0,0,element.date_create.substring(0,10));
                            likes[index].splice(0,0,element.likes);
                            comments[index].splice(0,0,element.comments)
                        });
                    });

                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
                                {
                                    label: val[0] + "\'s Likes",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: likes[0]
                                },
                                {
                                    label: val[0] + "\'s Comments",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: comments[0]
                                },
                                {
                                    label: val[1] + "\'s Likes",
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: likes[1]
                                },
                                {
                                    label: val[1] + "\'s Comments",
                                    fillColor: "rgba(121,107,185,0.2)",
                                    strokeColor: "rgba(121,107,185,1)",
                                    pointColor: "rgba(121,107,185,1)",
                                    data: comments[1]
                                },
                                {
                                    label: val[2] + "\'s Likes",
                                    fillColor: "rgba(180,220,180,0.2)",
                                    strokeColor: "rgba(180,220,180,1)",
                                    pointColor: "rgba(180,220,180,1)",
                                    data: likes[2]
                                },
                                {
                                    label: val[2] + "\'s Comments",
                                    fillColor: "rgba(111,157,205,0.2)",
                                    strokeColor: "rgba(111,157,205,1)",
                                    pointColor: "rgba(111,157,205,1)",
                                    data: comments[2]
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
                    var values;
                    if (call[2]!== undefined){
                        values = [call[0].slice(0,31),call[1].slice(0,31),call[2].slice(0,31)]
                    } else {
                        values = [call[0].slice(0,31),call[1].slice(0,31)]}
                    var lab=[[],[],[]];
                    var likes=[[],[],[]];
                    var comments=[[],[],[]];
                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element,myIndex){
                            if (myIndex%3 == 0) {
                                lab[index].splice(0, 0, element.date_create.substring(0, 10));
                            }else{
                                lab[index].splice(0, 0, "");
                            }
                            likes[index].splice(0,0,element.likes);
                            comments[index].splice(0,0,element.comments)
                        });
                    });

                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
                                {
                                    label: val[0] + "\'s Likes",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: likes[0]
                                },
                                {
                                    label: val[0] + "\'s Comments",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: comments[0]
                                },
                                {
                                    label: val[1] + "\'s Likes",
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: likes[1]
                                },
                                {
                                    label: val[1] + "\'s Comments",
                                    fillColor: "rgba(121,107,185,0.2)",
                                    strokeColor: "rgba(121,107,185,1)",
                                    pointColor: "rgba(121,107,185,1)",
                                    data: comments[1]
                                },
                                {
                                    label: val[2] + "\'s Likes",
                                    fillColor: "rgba(180,220,180,0.2)",
                                    strokeColor: "rgba(180,220,180,1)",
                                    pointColor: "rgba(180,220,180,1)",
                                    data: likes[2]
                                },
                                {
                                    label: val[2] + "\'s Comments",
                                    fillColor: "rgba(111,157,205,0.2)",
                                    strokeColor: "rgba(111,157,205,1)",
                                    pointColor: "rgba(111,157,205,1)",
                                    data: comments[2]
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
                    var values;
                    if (call[2]!== undefined){
                        values = [call[0].slice(0,365),call[1].slice(0,365),call[2].slice(0,365)]
                    } else {
                        values = [call[0].slice(0,365),call[1].slice(0,365)]}
                    var lab=[[],[],[]];
                    var comments=[[],[],[]];
                    var likes=[[],[],[]];
                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element,myIndex){
                            if (myIndex%10 == 0) {
                                lab[index].splice(0, 0, element.date_create.substring(0, 10));
                            }else{
                                lab[index].splice(0, 0, "");
                            }
                            likes[index].splice(0,0,element.likes);
                            comments[index].splice(0,0,element.comments)
                        });
                    });
                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
                                {
                                    label: val[0] + "\'s Likes",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: likes[0]
                                },
                                {
                                    label: val[0] + "\'s Comments",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: comments[0]
                                },
                                {
                                    label: val[1] + "\'s Likes",
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: likes[1]
                                },
                                {
                                    label: val[1] + "\'s Comments",
                                    fillColor: "rgba(121,107,185,0.2)",
                                    strokeColor: "rgba(121,107,185,1)",
                                    pointColor: "rgba(121,107,185,1)",
                                    data: comments[1]
                                },
                                {
                                    label: val[2] + "\'s Likes",
                                    fillColor: "rgba(180,220,180,0.2)",
                                    strokeColor: "rgba(180,220,180,1)",
                                    pointColor: "rgba(180,220,180,1)",
                                    data: likes[2]
                                },
                                {
                                    label: val[2] + "\'s Comments",
                                    fillColor: "rgba(111,157,205,0.2)",
                                    strokeColor: "rgba(111,157,205,1)",
                                    pointColor: "rgba(111,157,205,1)",
                                    data: comments[2]
                                }
                            ]
                        },
                        desc: 'Likes and comments of the posts containing the hashtag ' +val + ' over the last year'
                    }
                },
                instagramUser01 : function(call){
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
                    var photos=[[],[],[]];
                    var follows=[[],[],[]];
                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element){
                            lab[index].splice(0,0,element.date_create.substring(0,10));
                            photos[index].splice(0,0,element.media);
                            follows[index].splice(0,0,element.followed_by)
                        });
                    });
                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
                                {
                                    label: val[0] + "\'s Posts",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: photos[0]
                                },
                                {
                                    label: val[0] + "\'s Followers",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: follows[0]
                                },
                                {
                                    label: val[1] + "\'s Posts",
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: photos[1]
                                },
                                {
                                    label: val[1] + "\'s Followers",
                                    fillColor: "rgba(121,107,185,0.2)",
                                    strokeColor: "rgba(121,107,185,1)",
                                    pointColor: "rgba(121,107,185,1)",
                                    data: follows[1]
                                },
                                {
                                    label: val[2] + "\'s Posts",
                                    fillColor: "rgba(180,220,180,0.2)",
                                    strokeColor: "rgba(180,220,180,1)",
                                    pointColor: "rgba(180,220,180,1)",
                                    data: photos[2]
                                },
                                {
                                    label: val[2] + "\'s Followers",
                                    fillColor: "rgba(111,157,205,0.2)",
                                    strokeColor: "rgba(111,157,205,1)",
                                    pointColor: "rgba(111,157,205,1)",
                                    data: follows[2]
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
                    var values;
                    if (call[2]!== undefined){
                        values = [call[0].slice(0,31),call[1].slice(0,31),call[2].slice(0,31)]
                    } else {
                        values = [call[0].slice(0,31),call[1].slice(0,31)]}
                    var lab=[[],[],[]];
                    var photos=[[],[],[]];
                    var follows=[[],[],[]];
                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element,myIndex){
                            if (myIndex%3 == 0) {
                                lab[index].splice(0, 0, element.date_create.substring(0, 10));
                            }else{
                                lab[index].splice(0, 0, "");
                            }
                            photos[index].splice(0,0,element.media);
                            follows[index].splice(0,0,element.followed_by)
                        });
                    });
                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
                                {
                                    label: val[0] + "\'s Posts",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: photos[0]
                                },
                                {
                                    label: val[0] + "\'s Followers",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: follows[0]
                                },
                                {
                                    label: val[1] + "\'s Posts",
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: photos[1]
                                },
                                {
                                    label: val[1] + "\'s Followers",
                                    fillColor: "rgba(121,107,185,0.2)",
                                    strokeColor: "rgba(121,107,185,1)",
                                    pointColor: "rgba(121,107,185,1)",
                                    data: follows[1]
                                },
                                {
                                    label: val[2] + "\'s Posts",
                                    fillColor: "rgba(180,220,180,0.2)",
                                    strokeColor: "rgba(180,220,180,1)",
                                    pointColor: "rgba(180,220,180,1)",
                                    data: photos[2]
                                },
                                {
                                    label: val[2] + "\'s Followers",
                                    fillColor: "rgba(111,157,205,0.2)",
                                    strokeColor: "rgba(111,157,205,1)",
                                    pointColor: "rgba(111,157,205,1)",
                                    data: follows[2]
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
                    var values;
                    if (call[2]!== undefined){
                        values = [call[0].slice(0,365),call[1].slice(0,365),call[2].slice(0,365)]
                    } else {
                        values = [call[0].slice(0,365),call[1].slice(0,365)]}
                    var lab=[[],[],[]];
                    var photos=[[],[],[]];
                    var follows=[[],[],[]];
                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element,myIndex){
                            if (myIndex%10 == 0) {
                                lab[index].splice(0, 0, element.date_create.substring(0, 10));
                            }else{
                                lab[index].splice(0, 0, "");
                            }
                            photos[index].splice(0,0,element.media);
                            follows[index].splice(0,0,element.followed_by)
                        });
                    });
                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
                                {
                                    label: val[0] + "\'s Posts",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: photos[0]
                                },
                                {
                                    label: val[0] + "\'s Followers",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: follows[0]
                                },
                                {
                                    label: val[1] + "\'s Posts",
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: photos[1]
                                },
                                {
                                    label: val[1] + "\'s Followers",
                                    fillColor: "rgba(121,107,185,0.2)",
                                    strokeColor: "rgba(121,107,185,1)",
                                    pointColor: "rgba(121,107,185,1)",
                                    data: follows[1]
                                },
                                {
                                    label: val[2] + "\'s Posts",
                                    fillColor: "rgba(180,220,180,0.2)",
                                    strokeColor: "rgba(180,220,180,1)",
                                    pointColor: "rgba(180,220,180,1)",
                                    data: photos[2]
                                },
                                {
                                    label: val[2] + "\'s Followers",
                                    fillColor: "rgba(111,157,205,0.2)",
                                    strokeColor: "rgba(111,157,205,1)",
                                    pointColor: "rgba(111,157,205,1)",
                                    data: follows[2]
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

                    var values;
                    if (call[2]!== undefined){
                        values = [call[0].slice(0,7),call[1].slice(0,7),call[2].slice(0,7)]
                    } else {
                        values = [call[0].slice(0,7),call[1].slice(0,7)]}
                    var lab=[[],[],[]];
                    var likes=[[],[],[]];
                    var comments=[[],[],[]];
                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element){
                            lab[index].splice(0,0,element.date_create.substring(0,10));
                            likes[index].splice(0,0,element.likes);
                            comments[index].splice(0,0,element.comments);
                        });
                    });

                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
                                {
                                    label: val[0] + "\'s Likes",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: likes[0]
                                },
                                {
                                    label: val[0] + "\'s Comments",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: comments[0]
                                },
                                {
                                    label: val[1] + "\'s Likes",
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: likes[1]
                                },
                                {
                                    label: val[1] + "\'s Comments",
                                    fillColor: "rgba(121,107,185,0.2)",
                                    strokeColor: "rgba(121,107,185,1)",
                                    pointColor: "rgba(121,107,185,1)",
                                    data: comments[1]
                                },
                                {
                                    label: val[2] + "\'s Likes",
                                    fillColor: "rgba(180,220,180,0.2)",
                                    strokeColor: "rgba(180,220,180,1)",
                                    pointColor: "rgba(180,220,180,1)",
                                    data: likes[2]
                                },
                                {
                                    label: val[2] + "\'s Comments",
                                    fillColor: "rgba(111,157,205,0.2)",
                                    strokeColor: "rgba(111,157,205,1)",
                                    pointColor: "rgba(111,157,205,1)",
                                    data: comments[2]
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
                    var values;
                    if (call[2]!== undefined){
                        values = [call[0].slice(0,31),call[1].slice(0,31),call[2].slice(0,31)]
                    } else {
                        values = [call[0].slice(0,31),call[1].slice(0,31)]}
                    var lab=[[],[],[]];
                    var comments=[[],[],[]];
                    var likes=[[],[],[]];
                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element,myIndex){
                            if (myIndex%3 == 0) {
                                lab[index].splice(0, 0, element.date_create.substring(0, 10));
                            }else{
                                lab[index].splice(0, 0, "");
                            }
                            likes[index].splice(0,0,element.likes);
                            comments[index].splice(0,0,element.comments)
                        });
                    });
                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
                                {
                                    label: val[0] + "\'s Likes",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: likes[0]
                                },
                                {
                                    label: val[0] + "\'s Comments",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: comments[0]
                                },
                                {
                                    label: val[1] + "\'s Likes",
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: likes[1]
                                },
                                {
                                    label: val[1] + "\'s Comments",
                                    fillColor: "rgba(121,107,185,0.2)",
                                    strokeColor: "rgba(121,107,185,1)",
                                    pointColor: "rgba(121,107,185,1)",
                                    data: comments[1]
                                },
                                {
                                    label: val[2] + "\'s Likes",
                                    fillColor: "rgba(180,220,180,0.2)",
                                    strokeColor: "rgba(180,220,180,1)",
                                    pointColor: "rgba(180,220,180,1)",
                                    data: likes[2]
                                },
                                {
                                    label: val[2] + "\'s Comments",
                                    fillColor: "rgba(111,157,205,0.2)",
                                    strokeColor: "rgba(111,157,205,1)",
                                    pointColor: "rgba(111,157,205,1)",
                                    data: comments[2]
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
                    var values;
                    if (call[2]!== undefined){
                        values = [call[0].slice(0,365),call[1].slice(0,365),call[2].slice(0,365)]
                    } else {
                        values = [call[0].slice(0,365),call[1].slice(0,365)]}
                    var lab=[[],[],[]];
                    var comments=[[],[],[]];
                    var likes=[[],[],[]];
                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element,myIndex){
                            if (myIndex%10 == 0) {
                                lab[index].splice(0, 0, element.date_create.substring(0, 10));
                            }else{
                                lab[index].splice(0, 0, "");
                            }
                            likes[index].splice(0,0,element.likes);
                            comments[index].splice(0,0,element.comments);
                        });
                    });
                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
                                {
                                    label: val[0] + "\'s Likes",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: likes[0]
                                },
                                {
                                    label: val[0] + "\'s Comments",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: comments[0]
                                },
                                {
                                    label: val[1] + "\'s Likes",
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: likes[1]
                                },
                                {
                                    label: val[1] + "\'s Comments",
                                    fillColor: "rgba(121,107,185,0.2)",
                                    strokeColor: "rgba(121,107,185,1)",
                                    pointColor: "rgba(121,107,185,1)",
                                    data: comments[1]
                                },
                                {
                                    label: val[2] + "\'s Likes",
                                    fillColor: "rgba(180,220,180,0.2)",
                                    strokeColor: "rgba(180,220,180,1)",
                                    pointColor: "rgba(180,220,180,1)",
                                    data: likes[2]
                                },
                                {
                                    label: val[2] + "\'s Comments",
                                    fillColor: "rgba(111,157,205,0.2)",
                                    strokeColor: "rgba(111,157,205,1)",
                                    pointColor: "rgba(111,157,205,1)",
                                    data: comments[2]
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

                    var values;
                    if (call[2]!== undefined){
                        values = [call[0].slice(0,7),call[1].slice(0,7),call[2].slice(0,7)]
                    } else {
                        values = [call[0].slice(0,7),call[1].slice(0,7)]}
                    var lab=[[],[],[]];
                    var likes=[[],[],[]];
                    var comments=[[],[],[]];
                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element){
                            lab[index].splice(0,0,element.date_create.substring(0,10));
                            likes[index].splice(0,0,element.likes/(element.media/3));
                            comments[index].splice(0,0,element.comments/(element.media/3))
                        });
                    });

                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
                                {
                                    label: val[0] + "\'s Likes",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: likes[0]
                                },
                                {
                                    label: val[0] + "\'s Comments",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: comments[0]
                                },
                                {
                                    label: val[1] + "\'s Likes",
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: likes[1]
                                },
                                {
                                    label: val[1] + "\'s Comments",
                                    fillColor: "rgba(121,107,185,0.2)",
                                    strokeColor: "rgba(121,107,185,1)",
                                    pointColor: "rgba(121,107,185,1)",
                                    data: comments[1]
                                },
                                {
                                    label: val[2] + "\'s Likes",
                                    fillColor: "rgba(180,220,180,0.2)",
                                    strokeColor: "rgba(180,220,180,1)",
                                    pointColor: "rgba(180,220,180,1)",
                                    data: likes[2]
                                },
                                {
                                    label: val[2] + "\'s Comments",
                                    fillColor: "rgba(111,157,205,0.2)",
                                    strokeColor: "rgba(111,157,205,1)",
                                    pointColor: "rgba(111,157,205,1)",
                                    data: comments[2]
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
                    var values;
                    if (call[2]!== undefined){
                        values = [call[0].slice(0,31),call[1].slice(0,31),call[2].slice(0,31)]
                    } else {
                        values = [call[0].slice(0,31),call[1].slice(0,31)]}
                    var lab=[[],[],[]];
                    var comments=[[],[],[]];
                    var likes=[[],[],[]];
                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element,myIndex){
                            if (myIndex%3 == 0) {
                                lab[index].splice(0, 0, element.date_create.substring(0, 10));
                            }else{
                                lab[index].splice(0, 0, "");
                            }
                            likes[index].splice(0,0,element.likes/(element.media/3));
                            comments[index].splice(0,0,element.comments/(element.media/3))
                        });
                    });

                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
                                {
                                    label: val[0] + "\'s Likes",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: likes[0]
                                },
                                {
                                    label: val[0] + "\'s Comments",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: comments[0]
                                },
                                {
                                    label: val[1] + "\'s Likes",
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: likes[1]
                                },
                                {
                                    label: val[1] + "\'s Comments",
                                    fillColor: "rgba(121,107,185,0.2)",
                                    strokeColor: "rgba(121,107,185,1)",
                                    pointColor: "rgba(121,107,185,1)",
                                    data: comments[1]
                                },
                                {
                                    label: val[2] + "\'s Likes",
                                    fillColor: "rgba(180,220,180,0.2)",
                                    strokeColor: "rgba(180,220,180,1)",
                                    pointColor: "rgba(180,220,180,1)",
                                    data: likes[2]
                                },
                                {
                                    label: val[2] + "\'s Comments",
                                    fillColor: "rgba(111,157,205,0.2)",
                                    strokeColor: "rgba(111,157,205,1)",
                                    pointColor: "rgba(111,157,205,1)",
                                    data: comments[2]
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
                    var values;
                    if (call[2]!== undefined){
                        values = [call[0].slice(0,365),call[1].slice(0,365),call[2].slice(0,365)]
                    } else {
                        values = [call[0].slice(0,365),call[1].slice(0,365)]}
                    var lab=[[],[],[]];
                    var comments=[[],[],[]];
                    var likes=[[],[],[]];
                    values.forEach(function(elementArray,index){
                        elementArray.forEach(function(element,myIndex){
                            if (myIndex%10 == 0) {
                                lab[index].splice(0, 0, element.date_create.substring(0, 10));
                            }else{
                                lab[index].splice(0, 0, "");
                            }
                            likes[index].splice(0,0,element.likes/(element.media/3));
                            comments[index].splice(0,0,element.comments/(element.media/3));
                        });
                    });

                    return {
                        dataSet: {
                            labels : lab[0],
                            datasets : [
                                {
                                    label: val[0] + "\'s Likes",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    data: likes[0]
                                },
                                {
                                    label: val[0] + "\'s Comments",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    data: comments[0]
                                },
                                {
                                    label: val[1] + "\'s Likes",
                                    fillColor: "rgba(200,150,200,0.2)",
                                    strokeColor: "rgba(200,150,200,1)",
                                    pointColor: "rgba(200,150,200,1)",
                                    data: likes[1]
                                },
                                {
                                    label: val[1] + "\'s Comments",
                                    fillColor: "rgba(121,107,185,0.2)",
                                    strokeColor: "rgba(121,107,185,1)",
                                    pointColor: "rgba(121,107,185,1)",
                                    data: comments[1]
                                },
                                {
                                    label: val[2] + "\'s Likes",
                                    fillColor: "rgba(180,220,180,0.2)",
                                    strokeColor: "rgba(180,220,180,1)",
                                    pointColor: "rgba(180,220,180,1)",
                                    data: likes[2]
                                },
                                {
                                    label: val[2] + "\'s Comments",
                                    fillColor: "rgba(111,157,205,0.2)",
                                    strokeColor: "rgba(111,157,205,1)",
                                    pointColor: "rgba(111,157,205,1)",
                                    data: comments[2]
                                }
                            ]
                        },
                        desc: val +'\'s likes and comments divided by the average daily posts over the last year'
                    }
                }

            };

            return confrontViews[viewType];
        };

        return getViews;

    }

    viewTypeIgConfModel.$inject = [];

    angular
        .module('app.type.view.data.module')
        .service('viewTypeIgConfModel', viewTypeIgConfModel);

})();