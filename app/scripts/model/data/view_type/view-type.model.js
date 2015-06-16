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


    function viewTypeModel(viewTypeFbSingleModel, viewTypeFbConfModel, viewTypeTwSingleModel, viewTypeTwConfModel, viewTypeIgSingleModel, viewTypeIgConfModel) {


        var getViews = function(conf, cat, type, val, viewType){

            var graphs;
            var defaultView = '';

            if (viewType !== undefined && viewType !== null){
                defaultView = viewType;
            }

            if (conf) {
        //  ------ WIEWS DI CONFRONTO -----------------//
                switch (cat.toLowerCase()) {
                    case 'facebook':
                        if (defaultView !== ''){
                            graphs = [viewTypeFbConfModel(val,defaultView)];
                        }
                        else if (type == 'page') {
                            graphs = [
                                viewTypeFbConfModel(val,'facebookPage02'),
                                viewTypeFbConfModel(val,'facebookPage03'),
                                viewTypeFbConfModel(val,'facebookPage04'),
                                viewTypeFbConfModel(val,'facebookPage05'),
                                viewTypeFbConfModel(val,'facebookPage06'),
                                viewTypeFbConfModel(val,'facebookPage07')
                            ];
                        } else {
                            graphs = [
                                viewTypeFbConfModel(val,'facebookEvent01')
                            ];
                        }
                        break;
                    case 'twitter':
                        if (defaultView !== ''){
                            graphs = [viewTypeTwConfModel(val,defaultView)];
                        }
                        else if (type == 'hashtag') {
                            graphs = [
                                viewTypeTwConfModel(val,'twitterHashtag01'),
                                viewTypeTwConfModel(val,'twitterHashtag02'),
                                viewTypeTwConfModel(val,'twitterHashtag03')
                            ];
                        } else {
                            graphs = [
                                viewTypeTwConfModel(val,'twitterPage02'),
                                viewTypeTwConfModel(val,'twitterPage03'),
                                viewTypeTwConfModel(val,'twitterPage04'),
                                viewTypeTwConfModel(val,'twitterPage05')
                            ];
                        }
                        break;
                    case 'instagram':
                        if (defaultView !== ''){
                            graphs = [viewTypeIgConfModel(val,defaultView)];
                        }
                        else if (type == 'hashtag') {
                            graphs = [
                                viewTypeIgConfModel(val,'instagramHashtag01')
                            ];
                        } else {
                            graphs = [
                                viewTypeIgConfModel(val,'instagramUser01')
                            ];
                        }
                        break;
                    default :
                        graphs = ['Error Default Confront']
                }
        //  ------ WIEWS GENERATE DA METRICA SINGOLA --//
            }else{
                switch (cat.toLowerCase()) {
                    case 'facebook':
                        if (defaultView !== ''){
                            graphs = [viewTypeFbSingleModel(val,defaultView)];
                        }
                        else if (type == 'page') {
                            graphs = [
                                viewTypeFbSingleModel(val, 'facebookPage01'),
                                viewTypeFbSingleModel(val, 'facebookPage02'),
                                viewTypeFbSingleModel(val, 'facebookPage03'),
                                viewTypeFbSingleModel(val, 'facebookPage04'),
                                viewTypeFbSingleModel(val, 'facebookPage05'),
                                viewTypeFbSingleModel(val, 'facebookPage06'),
                                viewTypeFbSingleModel(val, 'facebookPage07')

                            ];
                        } else {

                            graphs = [
                                viewTypeFbSingleModel(val,'facebookEvent01'),
                                viewTypeFbSingleModel(val,'facebookEvent02')
                            ];
                        }
                        break;
                    case 'twitter':
                        if (defaultView !== ''){
                            graphs = [viewTypeTwSingleModel(val,defaultView)];
                        }
                        else if (type == 'hashtag') {
                            graphs = [
                                viewTypeTwSingleModel(val,'twitterHashtag01'),
                                viewTypeTwSingleModel(val,'twitterHashtag02'),
                                viewTypeTwSingleModel(val,'twitterHashtag03'),
                                viewTypeTwSingleModel(val,'twitterHashtag04')
                            ];
                        } else {
                            graphs = [
                                viewTypeTwSingleModel(val,'twitterPage01'),
                                viewTypeTwSingleModel(val,'twitterPage02'),
                                viewTypeTwSingleModel(val,'twitterPage03'),
                                viewTypeTwSingleModel(val,'twitterPage04'),
                                viewTypeTwSingleModel(val,'twitterPage05')
                            ];
                        }
                        break;
                    case 'instagram':
                        if (defaultView !== ''){
                            alert("noo");
                            graphs = [viewTypeIgSingleModel(val,defaultView)];
                        }
                        else if (type == 'hashtag') {
                            graphs = [
                                viewTypeIgSingleModel(val,'instagramHashtag01'),
                                viewTypeIgSingleModel(val,'instagramHashtag02'),
                                viewTypeIgSingleModel(val,'instagramHashtag03'),
                                viewTypeIgSingleModel(val,'instagramHashtag04'),
                                viewTypeIgSingleModel(val,'instagramHashtag05'),
                                viewTypeIgSingleModel(val,'instagramHashtag06')
                            ];
                        } else {
                            graphs = [
                                viewTypeIgSingleModel(val,'instagramUser00'),
                                viewTypeIgSingleModel(val,'instagramUser01'),
                                viewTypeIgSingleModel(val,'instagramUser02'),
                                viewTypeIgSingleModel(val,'instagramUser03'),
                                viewTypeIgSingleModel(val,'instagramUser04'),
                                viewTypeIgSingleModel(val,'instagramUser05'),
                                viewTypeIgSingleModel(val,'instagramUser06'),
                                viewTypeIgSingleModel(val,'instagramUser07'),
                                viewTypeIgSingleModel(val,'instagramUser08'),
                                viewTypeIgSingleModel(val,'instagramUser09'),
                                viewTypeIgSingleModel(val,'instagramUser10'),
                                viewTypeIgSingleModel(val,'instagramUser11'),
                                viewTypeIgSingleModel(val,'instagramUser12')
                            ];
                        }
                        break;
                    default :
                        graphs = ['Error Default Single'];
                }
            }
            return graphs;
        };

        return getViews;

    }

    viewTypeModel.$inject = ['viewTypeFbSingleModel','viewTypeFbConfModel','viewTypeTwSingleModel','viewTypeTwConfModel','viewTypeIgSingleModel','viewTypeIgConfModel'];

    angular
        .module('app.type.view.data.module')
        .service('viewTypeModel', viewTypeModel);

})();