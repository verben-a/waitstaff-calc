angular.module('myApp', [])
    .controller('myController', function() {

        var vm = this;
        vm.price = null;
        vm.tax = null;
        vm.tip = null;
        vm.total = 0;
        vm.mealcount = 0;
        vm.tipDollarValue = 0;


        vm.getTotal = function() {
            vm.mealcount++;
            vm.tipDollarValue += vm.price * (vm.tip / 100);
            vm.total = vm.price * (vm.tax / 100) + vm.price + vm.price * (vm.tip / 100);
        }

    });
