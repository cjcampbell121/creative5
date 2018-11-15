angular.module('item', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
    $scope.items = [];
    $scope.addItem = function() {
      var newitem = {title:$scope.formTitle,price:$scope.formPrice,quantity:$scope.formQuantity};
      $scope.formPrice='';
      $scope.formPrice='';
      $scope.formQuantity='';
      $http.post('/items', newitem).success(function(data){
        $scope.items.push(data);
      });
    };
    
    /*
    $scope.upvote = function(comment) {
      return $http.put('/comments/' + comment._id + '/upvote')
        .success(function(data){
          console.log("upvote worked");
          comment.upvotes = data.upvotes;
        });
    };
    */
    
    /*
	  $scope.incrementUpvotes = function(comment) {
	    $scope.upvote(comment);
    };
    */
    
    $scope.getAll = function() {
      return $http.get('/items').success(function(data){
        angular.copy(data, $scope.items);
      });
    };
    
    $scope.getAll();

  }
]);
