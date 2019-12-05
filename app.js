const martianQuestions = [
    {   statement: "Choose a color?",
        choice: {
            a: "red", 
            b: "green"
        },
        correctChoice: "a"
    },
    {
        statement: "Which landscape?",
        choice: {
            a: "desert", 
            b: "field"
        },
        correctChoice: "a"
    },
    {
        statement: "Where are you?",
        choice: {
            a: "three", 
            b: "four"
        },
        correctChoice: "b"
    },
    {
        statement: "Choose a size?",
        choice: {
            a: "big", 
            b: "small"
        },
        correctChoice: "b"
    },
    {
        statement: "How do you walk?",
        choice: {
            a: "jump", 
            b: "walk"
        },
        correctChoice: "a"
    }
]
class quiz {
    addmartianquiz(space) {
  
        let html = '<p class="quiz-title"> Question:</p><div id="questions"></div><div class="answer"><p class="quiz-title">Choose One:</p><div class="leftbtn"><button id="btn1" class="btn"></button></div><div class="rightbtn"><button id="btn2" class="btn"></button></div></div>';
       
        let 
        newHtml = newHtml.replace('%questions%', martianQuestions.statement);
        newHtml = newHtml.replace('%btn1%', martianQuestions.choice.a);
        newHtml = newHtml.replace('%discovered%', martianQuestions.choice.b);
        document.querySelector(".quiz").insertAdjacentHTML('beforeend', newHtml);
      }
}
document.getElementById('quiz').addEventListener('submit', function(e) {

  
    const questions = document.getElementById("questions");
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");

    //console.log(element);
  
    const quiz = new Quiz();
    console.log(quiz);
   if (btn1 ==='' || btn2 ==='' ||){
      alert ('Error: Choose One Please')
    } else {
    quiz.addmartianquestions(space);
     }
  e.preventDefault();
  });
  
  document.querySelector(".quiz").addEventListener("click", function(e){
    const quiz = new Quiz();
    e.preventDefault();
  }
  )























/* function quiz(questions, quizBlock, scoreBlock) {
    function displayQuiz(questions, quizBlock){
    }
    function displayScore(questions, quizBlock, scoreBlock){
    }
    displayQuestions(questions, quizBlock){
    }
    function showQuiz(questions, quizBlock){
    }


}
 */































const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
