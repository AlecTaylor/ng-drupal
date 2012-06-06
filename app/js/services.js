'use strict';

/* Services */
angular.module('drupalng.services', ['ngResource']).
    factory('AboutNode', function($resource){
        return $resource('http://localhost/drupal7/api/node/1.json', {}, {
            query: {method:'GET', params:{}, isArray:false}
        });
    });