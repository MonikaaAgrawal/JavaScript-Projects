const questions = [
    {
        question: "Guess my name?",
        answers: [
            {text: "Monika", correct: true},
            {text: "Muskan", correct: false},
            {text: "Mridul", correct: false},
            {text: "Vanshika", correct: false},
        ]
    },

    {
        question: "Guess my age?",
        answers: [
            {text: 15, correct: false},
            {text: 20, correct: false},
            {text: 21, correct: true},
            {text: 17, correct: false},
        ]
    },

    {
        question: "Tell my dob?",
        answers: [
            {text: "22 feb 2003", correct: true},
            {text: "17 august 2004", correct: false},
            {text: "19 october 2003", correct: false},
            {text: "22 jan 2005", correct: false},
        ]
    },

    {
        question: "Predict my Location",
        answers: [
            {text: "Betul", correct: false},
            {text: "Mandla", correct: false},
            {text: "Rewa", correct: true},
            {text: "Mahidpur", correct: false},
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState(); //to hide the answers that are already embeeded in answer.innerHTML answer1 answer2 answer3 and answer4
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){   //This checks if the correct property of the answer object is true.
            button.dataset.correct = answer.correct;  //By setting button.dataset.correct = answer.correct, you are essentially adding a data-correct attribute to the button element. The value of this attribute will be the value of answer.correct (which is true in this case).
        }
        button.addEventListener("click", selectAnswer)
    });
}

//reset state: Before showing a new question with showQuestion(), resetState is called to ensure no old elements remain.
//Then, showQuestion() can safely add the new question and its answers to the now-clear answerButtons container.

function resetState(){    //to reset the previous ques and answers
    nextButton.style.display = "none"; //This line hides the "Next" button. The "Next" button is only shown after the user selects an answer to the current question. Hiding it at the start of resetState ensures that it doesn't appear prematurely.
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const ifCorrect = selectedBtn.dataset.correct === 'true';
    if(ifCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block"; //again shows the next button whenever any selection is made.
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();