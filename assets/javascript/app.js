//create some eements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImage = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementBy("Idcounter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress"); 
const scoreDiv = document.getElementById("score");
//create the questios
let questions = [
    {
        question : "What does HTML stand for?",
        imgSrc : "img/html.png",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        correct : "A",
    },
    {
        question : "What does Css stand for?",
        imgSrc : "img/html.png",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        correct : "B",
    },
    {
        question : "What does Js stand for?",
        imgSrc : "img/html.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C",
    }
];
// create variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10;
const guageWidth = 150;
const guageUnit = guageWidth / questionTime;
// render a question
function renderQuestion(){
    let q = questions[runningQuestions];
    question.innerHtml = "<p>" + q.question + "</p>";
    qImage.innerHtml = "<img src=" + q.imgSrc + ">";
    choiceA.innerHtml = q.choiceA;
    choiceB. innerHtml = q.choiceB;
    choiceC.innerHtml = q.choiceC; 
} 



function startQuiz(){
start.style.display = "none";
renderQuestion();
quiz.style.display = "block";
renderProgress();
renderCounter();
TIMER = setInterval(renderCounter,100)
}
//render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion;
        qIndex++){
            progress.innerHtml += "<>div class='prog' id="+
            qindex +"></div>";
        }
}

//counter render

function renderCounter(){
    if(counter <= questionTime){
        counter.innerHtml = count;
        timeGauge.style.width = count * guageUnit;
        count++
    }else{
        count = 0;
    }
}

function checkAnswer(answer){
    if (answer == questions[runningQuestion].correct){
        score++;
        answerIsCorrect();
    }
    else{
        answerIsWrong();
    }
}

function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}


