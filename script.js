const quizData = [
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "What does CSS stand for?",
        options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Creative Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which HTML tag is used for links?",
        options: ["<link>", "<a>", "<href>", "<src>"],
        answer: "<a>"
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Apple"],
        answer: "Netscape"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
const totalEl = document.getElementById('total');

totalEl.textContent = quizData.length;

function loadQuestion() {
    const current = quizData[currentQuestion];
    questionEl.textContent = current.question;
    optionsEl.innerHTML = '';
    current.options.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', selectOption);
        optionsEl.appendChild(li);
    });
}

function selectOption(e) {
    const selected = e.target.textContent;
    const correct = quizData[currentQuestion].answer;

    if(selected === correct) {
        score++;
        e.target.style.backgroundColor = "#8bc34a";
    } else {
        e.target.style.backgroundColor = "#f44336";
        // Highlight correct answer
        Array.from(optionsEl.children).forEach(li => {
            if(li.textContent === correct) {
                li.style.backgroundColor = "#8bc34a";
            }
        });
    }

    // Disable all options
    Array.from(optionsEl.children).forEach(li => li.removeEventListener('click', selectOption));
}

nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if(currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        quizEl = document.getElementById('quiz');
        quizEl.style.display = 'none';
        nextBtn.style.display = 'none';
        resultEl.classList.remove('hidden');
        scoreEl.textContent = score;
    }
});

loadQuestion();


