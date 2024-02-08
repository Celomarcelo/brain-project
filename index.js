var questions = [
    {
        question: 'The 1998 world football championship was hosted in France, in which Brazil reached the final, winning 3-0',
        answer: "false",
        correct: 'The correct answer is: France won 3-0',
    },
    {
        question: 'The Battle of Waterloo was a military confrontation that took place on 18 June 1815 near Waterloo, in present-day Belgium',
        answer: "true",
        correct: 'The sentence is correct.',
    },
    {
        question: 'Ayrton Senna, Brazilian Formula 1 driver, champion of the category in 1988, 1990 and 1991, died in a tragic accident on May 1, 1994 in Imola, Italy.',
        answer: "true",
        correct: 'The sentence is correct.',
    },
    {
        question: 'U2 is an English rock band formed in 1976. The group is composed of Bono (vocals and guitar), The Edge (guitar, keyboards and backing vocals), Adam Clayton (bass) and Larry Mullen Jr. (drums and percussion )',
        answer: "false",
        correct: 'The correct answer is: U2 is an Irish rock band',
    },
    {
        question: 'In June 1997, boxer Mike Tyson bit the ear of his opponent, Evander Holyfield. For his conduct, Tyson was fined, sentenced to community service and suspended from the sport for 1 year.',
        answer: "true",
        correct: 'The sentence is correct.',
    },
    {
        question: 'The Chernobyl accident happened on April 26, 1986, when reactor 3 at the Chernobyl nuclear power plant exploded and released radioactive material into the atmosphere.',
        answer: "false",
        correct: 'The correct answer is: The number 4 reactor exploded.',
    },
    {
        question: 'Michael Jackson in 1986 released Thriller, the best-selling album in the history of music, considered a masterpiece. With the album, the future king of pop became the main black singer in the world and in the 1980s.',
        answer: "false",
        correct: 'The correct answer is: In 1982, Michael Jackson released Thriller',
    },
    {
        question: 'The film "Avatar" is currently considered the highest-grossing film in the world.',
        answer: "true",
        correct: 'The sentence is correct.',
    },
];
let username;
let currentQuestion = [];
let pastQuestions = [];
let score = 0;
let correctAnswer = document.getElementById('answer-place');
//function generates random number
function randomNumber() {
    return Math.floor(Math.random() * questions.length);
}
//start game function
function startGame() {
    currentQuestion = [];
    pastQuestions = [];
    score = 0;
    document.getElementById("result").classList.add('hide');
    document.getElementById('restart').classList.add('hide');
    username = document.getElementById("username").value;
    if (username === '') {
        username = '"Unknown"'
    }
    let reveal = document.querySelector('.hide');
    let divStart = document.getElementById('first-div');
    divStart.classList.add('hide');
    reveal.classList.remove('hide');
    let randomNumber1 = randomNumber();
    currentQuestion.push(randomNumber1);
    pastQuestions.push(randomNumber1)
    showQuestion();
}
// show question funtion
function showQuestion() {
    document.getElementById('submit').classList.remove('hide');
    document.getElementById('next-question').classList.add('hide');
    correctAnswer.classList.add('hide');
    const questionElement = document.getElementById("display-question");
    correctAnswer.innerHTML = '';
    questionElement.innerHTML = questions[currentQuestion].question;
}
// submit and check questions funtion
function submitAnswer() {
    let userAnswer = document.querySelector('input[name="options"]:checked')
    if (userAnswer) {
        if (userAnswer.value === questions[currentQuestion].answer) {
            correctAnswer.classList.remove('hide');
            correctAnswer.innerHTML = '<strong>Correct!</strong>';
            correctAnswer.style.color = "green";
            score++;
        } else {
            correctAnswer.classList.remove('hide');
            correctAnswer.style.color = "red";
            correctAnswer.innerHTML = "<strong>Incorrect!</strong>" + "<br>" + questions[currentQuestion].correct;
        }
        currentQuestion = [];
        let newRandomNumber;
        do {
            newRandomNumber = randomNumber();
        } while (pastQuestions.includes(newRandomNumber));
        pastQuestions.push(newRandomNumber);
        currentQuestion = newRandomNumber;
    }
    if (pastQuestions.length < questions.length) {
        document.getElementById('submit').classList.add('hide');
        document.getElementById('next-question').classList.remove('hide');

    } else {
        document.getElementById('next-question').classList.add('hide');
        document.getElementById('submit').classList.add('hide');
        document.getElementById('finish').classList.remove('hide');
    }
}
//result and restart
function showResult() {
    correctAnswer.classList.add('hide');
    document.getElementById('second-div').classList.add('hide');
    document.getElementById('finish').classList.add('hide');
    document.getElementById('result').classList.remove('hide');
    const showScore = document.getElementById('result');
    showScore.innerHTML = `${username}, you got ${score} of ${questions.length} questions.`
    document.getElementById('restart').classList.remove('hide');
}