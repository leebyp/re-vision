angular.module('re-vision.services')

.service('QuestionService', function() {

  var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  var questions = [
    {
      id: 1,
      text: loremIpsum,
      image: 'img/puppy.jpg',
      answerA: loremIpsum,
      answerB: loremIpsum,
      answerC: loremIpsum,
      answerD: loremIpsum,
      solution: 'answerA',
      correct: true,
      flagged: true
    },
    {
      id: 2,
      text: loremIpsum,
      image: 'img/puppy.jpg',
      answerA: loremIpsum,
      answerB: loremIpsum,
      answerC: loremIpsum,
      answerD: loremIpsum,
      solution: 'answerA',
      correct: false,
      flagged: false
    },
    {
      id: 3,
      text: loremIpsum,
      image: 'img/puppy.jpg',
      answerA: loremIpsum,
      answerB: loremIpsum,
      answerC: loremIpsum,
      answerD: loremIpsum,
      solution: 'answerA',
      correct: false,
      flagged: false
    }
  ];
  
  function getAllQuestions() {
    return questions;
  }

  function getQuestion(id) {
    return questions[id-1];
  }

  function setQuestion(question) {
    questions[question.id-1] = question;
    return question;
  }

  function flagQuestion(id) {
    //@NOTE hacky way to eliminate flicker in flags
    document.getElementById('flagged').classList.add( "ng-hide" );
    document.getElementById('unflagged').classList.add( "ng-hide" );
    var question = getQuestion(id);
    question.flagged = !question.flagged;
    setQuestion(question);
    if (question.flagged) {
      document.getElementById('flagged').classList.remove( "ng-hide" );
    } else {
      document.getElementById('unflagged').classList.remove( "ng-hide" );
    }
  }

  this.getAllQuestions = getAllQuestions;
  this.getQuestion = getQuestion;
  this.setQuestion = setQuestion;
  this.flagQuestion = flagQuestion;

});
