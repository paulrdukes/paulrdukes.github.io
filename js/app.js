(function () {
  'use strict';

  var app = angular.module('Blog', []);

  app.config( function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  });

  app.controller('SocialLinks', function ($http, $scope) {
    $http.get('js/social.json').success(function (data) {
      $scope.socialLinks = data;
    });
  });
})();