const questions = [
    {
        question: 'Which is the largest animal in the world',
        answer: [
            { text: 'Shark', correct: false },
            { text: 'Blue Whale', correct: true },
            { text: 'Sperm Whale', correct: false },
            { text: 'Dolphin', correct: false },
        ]
    },
    {
        question: 'Which is the smallest country in the world',
        answer: [
            { text: 'Nepal', correct: false },
            { text: 'Sri Lanka', correct: false },
            { text: 'Bhutan', correct: false },
            { text: 'Vatican City', correct: true },
        ]
    },
    {
        question: 'Which is the largest desert in the world',
        answer: [
            { text: 'Kalahari', correct: false },
            { text: 'Gobi', correct: false },
            { text: 'Sahara', correct: true },
            { text: 'Antarctica', correct: false },
        ]
    },
    {
        question: 'Which is the smallest continent in the world',
        answer: [
            { text: 'Asia', correct: false },
            { text: 'Arctic', correct: false },
            { text: 'Australia', correct: true },
            { text: 'Africa', correct: false },
        ]
    },
    {
        question: 'Which is the largest snake in the world',
        answer: [
            { text: 'Krait', correct: false },
            { text: 'Python', correct: false },
            { text: 'Anaconda', correct: false },
            { text: 'Green Anaconda', correct: true },
        ]
    },
];

let currentQuestionIndex = 0; // Use 'let' to allow mutation
let score = 0;

const questionElement = document.querySelector('#question');
const answerBtn = document.querySelector('#answer-buttons');
const nextBtn = document.querySelector('#next-btn');

function Quiz_App() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    // Clear previous answers
    answerBtn.innerHTML = '';

    // Get the current question
    const currentQuestion = questions[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNumber + '. ' + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerBtn.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';

    if (isCorrect) {
        score++;
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('wrong');
    }

    Array.from(answerBtn.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
    });

    nextBtn.style.display = 'block';
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    answerBtn.innerHTML = '';
    nextBtn.innerHTML = 'Restart';
    nextBtn.style.display = 'block';
    nextBtn.addEventListener('click', Quiz_App);
}

// Start the quiz
Quiz_App();
