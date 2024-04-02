const quizForm = document.getElementById('quizForm');
const question = document.getElementById('question');
const options = document.getElementById('options');
const result = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

const questions = [
    {
        question: 'What is 5*5 ?',
        answers: ['32', '40', '25', '10'],
        correctAnswer: '25'
    },
    {
        question: 'Who is the greatest basketball player "oat"?',
        answers: ['Lebron', 'MJ', 'Kobe', 'Kareem'],
        correctAnswer: 'Lebron'
    },
    {
        question: 'How many months are in a year?',
        answers: ['6', '3', '12', '14'],
        correctAnswer: '12'
    }
];

function loadQuestion() {
    const q = questions[currentQuestion];
    question.textContent = q.question;
    options.innerHTML = '';
    q.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.onclick = () => checkAnswer(answer);
        options.appendChild(button);
    });
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correctAnswer) {
        score++;
        result.textContent = 'Correct!';
    } else {
        result.textContent = 'Incorrect!';
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    quizForm.style.display = 'none';
    result.textContent = `Your score: ${score} out of ${questions.length}`;
}

loadQuestion();
