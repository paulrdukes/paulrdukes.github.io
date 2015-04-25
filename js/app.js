(function () {
  'use strict';

  var app = angular.module('Blog', []);

  // Prevents conflicts with liquid templating language
  // app.config( function($interpolateProvider) {
  //   $interpolateProvider.startSymbol('[[');
  //   $interpolateProvider.endSymbol(']]');
  // });

  app
  .directive('socialLinks', function () {
    return {
      restrict: 'E',
      controller: function ($http, $scope) {
        $http.get('data/social.json').success(function (data) {
          $scope.socialLinks = data;
        });
      },
      template: '<ul class="social-media"> <li ng-repeat="socialLink in socialLinks" ng-hide="socialLink.hide">' +
        '<a href="{{socialLink.url}}" class="large-icon entypo-{{socialLink.class}}" data-icon="{{socialLink.name | lowercase}}" target="_blank">' +
        '<span class="visuallyhidden">{{socialLink.name}}<span></a></li></ul>'
    };
  })
  .directive('about', function () {
    return {

      restrict: 'E',
      controller: function ($http, $scope) {
        $http.get('data/about.json').success(function (data) {
          $scope.about = data;
        });
      },
      template:'<h1><a href="/index.html">{{about.title}}</a></h1>'+
      '<p>{{about.bio}}</p>' +
      '<social-links></social-links>'+
      '<img src="{{about.pic}}" alt="profile-pic" class="profile-pic">' +
      '<h2>Currently</h2>' +
      '<ul ng-repeat="job in about.jobs">' +
        '<li><em>{{job.title}}</em> - <a href="{{job.url}}" target="_blank">{{job.company}}</a></li>' +
      '</ul>'
    };
  })
  .directive('footer', function (){
    return {
      restrict: 'E',
      controller: function ($scope) {
          $scope.currentYear = new Date().getFullYear();
      },
      template: 'This life is a work in progress. <br />' +
        'Copyright &copy; {{currentYear}} | powered by <a href="http://pages.github.com" target="_blank">Github</a>'
    };
  });
}());
