angular.module('friendsList').controller('mainCtrl', function($scope) {
    $scope.name = "Fernando"; 
    $scope.friends = ['one friend', 'two friend'];
    $scope.newFriend = '';
    $scope.addFriend = function(name) {
$scope.friends.push(name);
    };
});