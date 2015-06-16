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

            return confrontViews[viewType];
        };

        return getViews;

    }

    viewTypeIgConfModel.$inject = [];

    angular
        .module('app.type.view.data.module')
        .service('viewTypeIgConfModel', viewTypeIgConfModel);

})();