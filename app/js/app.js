'use strict';

// Declare app level module which depends on filters, and services
angular.module('drupalng', ['drupalng.services','ngSanitize']).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {template: 'app/partials/home.html', controller: HomeCtrl}).
        when('/about', {template: 'app/partials/about.html', controller: AboutCtrl}).
        when('/post/:nid', {template: 'app/partials/post.html', controller: PostCtrl}).
        otherwise({redirectTo: '/'});
    }]);