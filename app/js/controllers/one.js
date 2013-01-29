/**
 * DESIGN IDEA
 * decouple this ng controller from any module or structure assumptions
 * no need to export anything
 * what about name? would be cool if it didn't even assume the name, name it elsewhere!
 */

//Module dependencies
var app = require("../app");
var UserService = require("../services/user");

/*
 * MyCtrl1
 * Manages user info through CRUD operations
 */
function MyCtrl1($scope, User) {
  var users = User.query(function(){
    $scope.users = users;
  });

  $scope.saveAll = function(){
    $scope.users.forEach(function(user){
      user.$update();
    });
  };
}

//Register it with angular
app.controller(MyCtrl1.name, [
  '$scope',
  UserService,
  MyCtrl1
]);