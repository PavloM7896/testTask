(function() {
  'use strict';

  angular
    .module('testTask')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('peoples', {
        url: '/peoples',
        templateUrl: 'app/main/peoples.html',
        controller: 'PeoplesController',
        controllerAs: 'people'
      })
      .state('visuals', {
        url: '/visuals',
        templateUrl: 'app/main/visuals.html',
        controller: 'VisualsController',
        controllerAs: 'visuals'
      });

    $urlRouterProvider.otherwise('/peoples');
  }

})();
