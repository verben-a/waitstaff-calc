angular.module('myApp', ['ngRoute'])

// .value('')
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'home.html',
        controller: 'HomeCtrl',
        // controllerAs: 'vm'
    }).when('/newmeal', {
        templateUrl: 'newmeal.html',
        controller: 'NewMeal',
        // controllerAs: 'vm'
    }).when('/myearnings', {
        templateUrl: 'myearnings.html',
        controller: 'MyEarnings',
        // controllerAs: 'vm'
    })
}])

.controller('HomeCtrl', [function() {

}])

.controller('NewMeal', ['$scope', '$rootScope', function($scope, $rootScope) {
    // var vm = this;
    console.log('we are in new')
    $rootScope.price = null;
    $rootScope.tax = null;
    $rootScope.tip = null;
    $rootScope.total = 0;
    $rootScope.mealcount = 0;
    $rootScope.tipDollarValue = 0;
    console.log($rootScope)


    $scope.getTotal = function() {
        $rootScope.mealcount++;
        $rootScope.tipDollarValue += $rootScope.price * ($rootScope.tip / 100);
        $rootScope.total = $rootScope.price * ($rootScope.tax / 100) + $rootScope.price + $rootScope.price * ($rootScope.tip / 100);
    }

}]).controller('MyEarnings', function($rootScope) {

    console.log('$rootScope', $rootScope)

})
