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
                facebookPage01: function (call) {
                    if (call == "outside") {
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
                },
                twitterHashtag01: function (call) {
                    if (call == "outside") {
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
                },
                twitterPage01: function (call) {
                    if (call == "outside") {
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
                },
                instagramHashtag01: function (call) {
                    if (call == "outside") {
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
                },
                instagramUser01: function (call) {
                    if (call == "outside") {
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
                    if (admin + comm == 0){ comm = 1 };
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
                        desc: 'Tweets containing the hashtag ' +val + ' tweets and followers over the last month'
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
                }
            };

            if (conf) {
        //  ------ WIEWS DI CONFRONTO -----------------//
                switch (cat.toLowerCase()) {
                    case 'facebook':
                        if (type == 'page') {
                            graphs = [confrontViews.facebookPage01];
                        } else {
                            graphs = [confrontViews.facebookEvent01];
                        }
                        break;
                    case 'twitter':
                        if (type == 'hashtag') {
                            graphs = [confrontViews.twitterHashtag01];
                        } else {
                            graphs = [confrontViews.twitterPage01];
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
                                singleViews.instagramUser01,
                                singleViews.instagramUser02,
                                singleViews.instagramUser03,
                                singleViews.instagramUser04,
                                singleViews.instagramUser05,
                                singleViews.instagramUser06
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