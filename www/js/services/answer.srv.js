angular.module('re-vision.services')

.service('AnswerService', function($ionicPopup, $timeout, QuestionService) {

  function answerQuestion(id, choice) {
    var answerPopup = function(result) {
      var popup = $ionicPopup.alert({
        title: result,
      })
      $timeout(function() {
        popup.close();
      }, 1000);
    }

    var question = QuestionService.getQuestion(id);
    var answerText = question[choice];
    var confirmPopup = $ionicPopup.confirm({
      title: choice,
      template: answerText
    });
    confirmPopup.then(function(res) {
      if(res) {
        if (question.solution === choice) {
          question.correct = true;
          QuestionService.setQuestion(question);
          answerPopup('Correct!');
        } else {
          answerPopup('Incorrect!');
        }
      }
    });
  };

  function showAnswer(id) {
    var question = QuestionService.getQuestion(id);
    $ionicPopup.alert({
      title: 'Correct Answer',
      template: question[question.solution]
    });
  };

  this.answerQuestion = answerQuestion;
  this.showAnswer = showAnswer;

})