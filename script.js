/* START BUTTON */
const startBtn = document.getElementById('startBtn')
const quizcontainerElement = document.getElementById
('quiz-container')


startBtn.addEventListener('click', loadQuiz)



const quizdata = [
    
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a:"<javascript>",
        b:"<js>",
        c:"<scripting>",
        d:"<script>",
        correct: "d",
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        a:"The <head> section",
        b:"The <body> section",
        c:"You can place them in both sections",
        d:"None of the above",
        correct: "c",
    },
    {
        question: "What is the correct syntax for referring to an external script called xxx.js?",
        a:"<script name= xxx.js>",
        b:"<script src=  xxx.js>",
        c:"<script href= xxx.js>",
        d:"None of the above",
        correct: "b",
    },
    {
        question: "How do you create a function in JavaScript?",
        a:"function:myFunction()",
        b:"function = myFunction()",
        c:"function myFunction()",
        d:"None of the above",
        correct: "c",
    },


];

const quiz= document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

const answerEls = document.querySelectorAll('.answer');



let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizdata[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizdata[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizdata.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizdata.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})