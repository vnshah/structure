/**
 * GOALS
 * Should be as reusable across projects as possible.
 * Projects should be able to `component install` any controller, directive, service etc
 * and use it without modification.
 * Should be as concise and boilerplate-free as possible.
 *
 * HOW
 * Decouple pieces from the project structure.
 * Decouple pieces from their runtime name and angular module (inject all the things).
 * Decouple pieces from config/bootstrap/routes.
 * Only `require` dependencies that ship as part of this component, 
 * keeping it portable across projects. Let Angular inject whatever is named 'User' at runtime.
 * 
 * PROS
 * Angular pieces (controllers, services, directives etc):
 * 
 * CONS
 * these can't be used in a non-component project, unless built with --standalone.
 * migration from Angular to Angular+Component entails modifying every file.
 *
 * QUESTIONS
 */

/**
 * Manage user info through CRUD operations
 * @param  {Object} app  Angular Module to attach to
 * @param  {String} name what to name the controller
 */
module.exports = function(app, name){
  
  app.controller(name, ['$scope', 'User', function one ($scope, User){
    var users = User.query(function(){
      $scope.users = users;
    });

    $scope.saveAll = function(){
      $scope.users.forEach(function(user){
        user.$update();
      });
    };
  }]);

};