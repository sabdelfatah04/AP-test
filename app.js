const quiz = document.getElementById("quiz")
const questionBlock = document.getElementById("question-block")
const questions = document.getElementById("questions")
const answer = document.getElementById("answer")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const submitButton = document.getElementById("submit-btn")
const scoreBlock = document.getElementById("score-block")
let result = 0
let quizanswer;

let randomOrder, currentOrder

startButton.addEventListener('click', begin)
nextButton.addEventListener('click', ()=> {
    calculate()
    currentOrder++
    next()
})


function begin() {
    startButton.classList.add('hide')
    questionBlock.classList.remove('hide')
    randomOrder = martianQuestions.sort(() => Math.random() - .5)
    currentOrder = 0 
    start()
}

function start(){
    reset()
    displayQuestion(randomOrder[currentOrder])
}

function next(){
    reset()
    calculate(quizanswer)
    displayQuestion(randomOrder[currentOrder])
}
function displayQuestion(martianQuestions){
    questions.innerText = martianQuestions.statement
    martianQuestions.option.forEach(option => {
        const button = document.createElement('button')
        button.innerText = option.choice
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answer.appendChild(button)
    })
}
function reset() {
    nextButton.classList.add('hide')
    while (answer.firstChild) {
        answer.removeChild(answer.firstChild)
    }
}

function selectAnswer(e) {
    quizanswer = e.target.innerText
    if (randomOrder.length > currentOrder + 1){
       nextButton.classList.remove('hide') 
    } else {
        submitButton.addEventListener('click', score)
        submitButton.classList.remove('hide')
    }
}
function calculate(answer) {
    console.log(martianQuestions[currentOrder].option.find(x => {
        console.log(answer)
    }))
    if (martianQuestions[currentOrder].option.find(x => x.choice == quizanswer)) {
       result++;
       console.log('correct')
    }
}
function score() {
    quiz.classList.add('hide')
    scoreBlock.classList.remove('hide')
    var display;
    if (calculate() >= 3) {
        display ='Martian';
    } else {
        display = 'Human';
    }
    document.getElementById("display").innerHTML = display;
}



const martianQuestions = [
    {   statement: "Choose a color?",
        option: [
            {choice: "red", correct: true },
            {choice: "green", correct: false}
        ],
    } ,
    {
        statement: "Which landscape?",
        option: [
            {choice: "desert", correct: true },
            {choice: "field", correct: false}
        ],
    },
    {
        statement: "Where are you?",
        option: [
            {choice: "three", correct: false },
            {choice: "four", correct: true}
        ],
    },
    {
        statement: "Choose a size?",
        option: [
            {choice: "small", correct: true },
            {choice: "big", correct: false}
        ],
    },
    {
        statement: "How do you move?",
        option: [
            {choice: "walk", correct: false },
            {choice: "jump", correct: true}
        ],
    }
]
