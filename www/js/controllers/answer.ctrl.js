angular.module('re-vision.controllers')

.controller('AnswerCtrl',function($scope, $stateParams, QuestionService, AnswerService) {

  $scope.question = QuestionService.getQuestion($stateParams.questionId);

  $scope.answerQuestion = AnswerService.answerQuestion;
  $scope.showAnswer = AnswerService.showAnswer;

});
