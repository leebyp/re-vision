angular.module('re-vision.controllers')

.controller('QuestionCtrl', function($scope, $stateParams, QuestionService) {

  $scope.question = QuestionService.getQuestion($stateParams.questionId);

  $scope.flag = QuestionService.flagQuestion;

});
