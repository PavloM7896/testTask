(function() {
  'use strict';

  angular
    .module('testTask')
    .controller('PeoplesController', PeoplesController);

  /** @ngInject */
  function PeoplesController($localStorage, $log, $scope, $http, Peoples) {
    var vm = this;
    if($localStorage.peoples){
      Peoples.getData();
    }
    else {
      Peoples.setData();
    }
    
    vm.peoples = angular.fromJson($localStorage.peoples);
    
    $scope.delete = function(index) {
      vm.peoples.splice(index, 1);
      $localStorage.peoples = vm.peoples;
    }

    $scope.onEdit = function(index) {
      $scope.editing = true;
      $scope.ind = index;
    }

    $scope.edit = function(index, people) {
      if(people.firstName && people.lastName && people.age && people.skill) {
        vm.peoples[index] = {
          "firstName": people.firstName,
          "lastName": people.lastName,
          "age": people.age,
          "skill": people.skill,
          "level": people.level
        };
      }
      $localStorage.peoples = vm.peoples;
      $scope.editing = false;
    }
    
    $scope.addPeople = function() {
      vm.peoples[vm.peoples.length] = {};
      $scope.ind = vm.peoples.length - 1;
      $scope.editing = true;
    }
  }
})();
