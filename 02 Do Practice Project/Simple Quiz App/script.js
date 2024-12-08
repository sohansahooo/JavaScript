const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    }
];

function displayQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `<p>${q.question}</p>`;
        q.options.forEach(option => {
            const optionLabel = document.createElement('label');
            optionLabel.innerHTML = `
                <input type="radio" name="question${index}" value="${option}">
                ${option}
            `;
            questionDiv.appendChild(optionLabel);
        });
        quizContainer.appendChild(questionDiv);
    });
}

function submitQuiz() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });
    document.getElementById('result').textContent = `You scored ${score} out of ${questions.length}`;
}

displayQuiz();
