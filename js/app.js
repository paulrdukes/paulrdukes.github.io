(function () {
  'use strict';

  var app = angular.module('Blog', []);


  // app.config( function($interpolateProvider) {
  //   $interpolateProvider.startSymbol('[[');
  //   $interpolateProvider.endSymbol(']]');
  // });

  app.directive('socialLinks', function () {
    return {
      restrict: 'EA',
      controller: function ($http, $scope) {
        $http.get('js/social.json').success(function (data) {
          $scope.socialLinks = data;
        });
      },
      template: '<ul class="social-media"> <li ng-repeat="socialLink in socialLinks" ng-hide="socialLink.hide">\
      <a href="{{socialLink.url}}" class="large-icon entypo-{{socialLink.class}}" data-icon="{{socialLink.name| lowercase}}" target="_blank">\
      <span class="visuallyhidden">{{socialLink.name}}<span></a></li></ul>'
    };
  });
})();