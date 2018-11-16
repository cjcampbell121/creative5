angular.module('item', [])
  .controller('MainCtrl', [
    '$scope', '$http',
    function($scope, $http) {
      $scope.items = [];
      $scope.addItem = function() {
        var newitem = { title: $scope.formTitle, price: $scope.formPrice, quantitys: $scope.formQuantity };
        $scope.formPrice = '';
        $scope.formPrice = '';
        $scope.formQuantity = '';
        $http.post('/items', newitem).success(function(data) {
          $scope.items.push(data);
        });
      };
      $scope.delete = function(item) {
        $http.delete('/items/' + item._id)
          .success(function(data) {
            console.log("delete worked");
          });
        $scope.getAll();
      };
      $scope.increaseItem = function(item) {
        return $http.put('/items/' + item._id + '/quantity')
          .success(function(data) {
            console.log("increase worked");
            item.quantitys += 1;
          });
      };
      $scope.decreaseItem = function(item) {
        return $http.put('/items/' + item._id + '/quantity')
          .success(function(data) {
            console.log("decrease worked");
            item.quantitys -= 1;
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
        return $http.get('/items').success(function(data) {
          angular.copy(data, $scope.items);
        });
      };

      $scope.getAll();

    }
  ]);
