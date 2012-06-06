function MainCtrl($scope) {
  $scope.name = 'Joe Soap';    
}
MainCtrl.$inject = ['$scope'];

function HomeCtrl($scope, BlogRoll) {
  $scope.blog_roll = BlogRoll.query();
}
HomeCtrl.$inject = ['$scope','BlogRoll'];

function AboutCtrl($scope, AboutNode) {
  $scope.about_node = AboutNode.query();  
}
AboutCtrl.$inject = ['$scope','AboutNode'];