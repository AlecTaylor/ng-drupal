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

function PostCtrl($scope, $routeParams, Post) {
 $scope.post = Post.get({nid: $routeParams.nid});
}
PostCtrl.$inject = ['$scope','$routeParams','Post'];