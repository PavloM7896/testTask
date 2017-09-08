(function() {
    'use strict';
  
    angular
      .module('testTask')
      .factory('Peoples', Peoples);
  
    /** @ngInject */
    function Peoples($localStorage, $http) {
      function setData() {
        $http.get('peoples.json').then(function(res) {
          $localStorage.peoples = res.data;
        })
        
      }

      function getData() {
        return angular.fromJson($localStorage.peoples);
      }
      return {
        setData: setData,
        getData: getData
      }
    }
  
  })();