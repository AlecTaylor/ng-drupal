function MainCtrl($scope) {
  $scope.name = 'Joe Soap';  
  
}
MainCtrl.$inject = ['$scope'];

function HomeCtrl($scope) {
  
}
HomeCtrl.$inject = ['$scope'];

function AboutCtrl($scope, AboutNode) {
  $scope.about_node = AboutNode.query();  
  console.log($scope.about_node);
}
AboutCtrl.$inject = ['$scope','AboutNode'];