angular.module('re-vision.controllers')

.controller('QuestionsCtrl', function($scope, QuestionService) {

  $scope.questions = QuestionService.getAllQuestions();

  $scope.showing = {
    status: 'all'
  }

  $scope.show = function(status) {
    $scope.showing.status = status;
  }

});
