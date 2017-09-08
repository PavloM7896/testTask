(function() {
    'use strict';
  
    angular
      .module('testTask')
      .controller('VisualsController', VisualsController);
  
    /** @ngInject */
    function VisualsController($scope, $http, Peoples, $localStorage) {
      var vm = this;
      

        $scope.peoples = Peoples.getData();
      
        $scope.peopleSkills = [];
        $scope.peopleLevels = [];
        $scope.peopleAges = [];

        angular.forEach($scope.peoples, function(people) {
          $scope.peopleSkills.push(people.skill);
        });
        angular.forEach($scope.peoples, function(people) {
          $scope.peopleLevels.push(people.level);
        });
        angular.forEach($scope.peoples, function(people) {
          $scope.peopleAges.push(people.age);
        });

        $scope.skills = getCountEntries($scope.peopleSkills);
        $scope.levels = getCountEntries($scope.peopleLevels);
        $scope.ages = getCountEntries($scope.peopleAges);
        console.log($scope.ages);
      
      
      function getCountEntries(arr){
        var result = arr.reduce(function(acc, el) {
          acc[el] = (acc[el] || 0) + 1;
          return acc;
        }, {});
        var res = [];
        angular.forEach(Object.keys(result), function(val1, key1){
          angular.forEach(Object.values(result), function(val2, key2){
            if(key1 == key2) {
              res.push({
                name: val1,
                value: val2
              })
            }
          })
        });
        return res;
      }

      function sortAgesByGroups(arr) {

        var counter1825= 0,
            counter2632= 0,
            counter33100 = 0;

        angular.forEach(arr, function(item) {
          if(item.name >= 18 && item.name <= 25){ 
            counter1825++;
          }
          else if(item.name > 25 && item.name <= 32){
            counter2632++;
          }
          else if(item.name > 32 && item.name <= 100){
            counter33100++;           
          }
        });

        var sortedAges = [
        {
          name:'18-25',
          value: counter1825
        },
        {
          name:'26-32',
          value: counter2632
        },
        {
          name:'33-100',
          value: counter33100
        }];

        return sortedAges;
      }
     
      $scope.sortedAges = sortAgesByGroups($scope.ages);

      $scope.optionsBySkill = {
        chart: {
          type: 'pieChart',
          height: 400,
          x: function(d){return d.name},
          y: function(d){return d.value},
          showLabels: true,
          duration: 10,
          labelThreshold: 0.01,
          labelSunbeamLayout: true,
          legend: {
            margin: {
                top: 5,
                right: 0,
                bottom: 5,
                left: 0
            }
          }
        }
      }

      $scope.optionsByLevel = {
        chart: {
          type: 'pieChart',
          height: 400,
          x: function(d){return d.name;},
          y: function(d){return d.value;},
          showLabels: true,
          duration: 10,
          labelThreshold: 0.01,
          labelSunbeamLayout: true,
          legend: {
            margin: {
                top: 5,
                right: 0,
                bottom: 5,
                left: 0
            }
          }
        }
      }

      $scope.optionsByAge = {
        chart: {
          type: 'pieChart',
          height: 400,
          x: function(d){return d.name;},
          y: function(d){return d.value;},
          showLabels: true,
          duration: 10,
          labelThreshold: 0.01,
          labelSunbeamLayout: true,
          legend: {
            margin: {
                top: 5,
                right: 0,
                bottom: 5,
                left: 0
            }
          }
        }
      }
    }
  })();
  