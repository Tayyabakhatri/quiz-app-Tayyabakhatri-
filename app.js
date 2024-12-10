var questions = [
    {
        question: "what is the value of <b>result</b>? <br> const array = [1,2,3]<br>const result = array[3]",
        answers: [
            { text: "3", correct: false },
            { text: "throw a syntaxError", correct: false },
            { text: "null", correct: false },
            { text: "undefine", correct: true }
        ]

    },
    {
        question: "which of this is the same as result +=value",
        answers: [
            { text: "result= ++value", correct: false },
            { text: "result = value + value", correct: false },
            { text: "result = result + value ", correct: true },
            { text: "result = value", correct: false }
        ]

    },
    {
        question: "what is the value of <b>result</b>? <br> const result ='2009','1995'; ",
        answers: [
            { text: "null", correct: false },
            { text: "undefine", correct: false },
            { text: "14", correct: true },
            { text: "NaN", correct: false }
        ]

    },
    {
        question: "what is the value of result ? <br> const value = 20.0;<br>const result = Number.isInteger(value);",
        answers: [
            { text: "true", correct: true },
            { text: "false", correct: false }
        ]
    }
]

const questionElement = document.getElementById("quiz-questions");
const answerButton = document.getElementById("ans-btns");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
//restart k liye ye function he 
function startQuiz() {
    let currentQuestionIndex = 0;
    let score = 0;
    nextButton.innerHTML = "Next"
    showQuestion()
}

function showQuestion() {
    resetState()
    //showing questions
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question
    //showing answers
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btns")
        answerButton.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetState() {
    nextButton.style.display = "Next";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block"
}
function showScore() {
    resetState();
    questionElement.innerHTML = `you Score ${score} out of ${questions.length}`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block"
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    } else {
        showScore()
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz()
    }
})
startQuiz()