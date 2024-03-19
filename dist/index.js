"use strict";
const quizList = [
    {
        questionContent: "1. Which is the smallest country in the world?",
        isResolved: false,
        answers: [
            {
                answerContent: "Vatican City",
                isTrue: true,
                isChosen: false,
            },
            {
                answerContent: "Bhutan",
                isTrue: false,
                isChosen: false,
            },
            {
                answerContent: "Nepal",
                isTrue: false,
                isChosen: false,
            },
            {
                answerContent: "Shri Lanka",
                isTrue: false,
                isChosen: false,
            },
        ],
    },
    {
        questionContent: "2. Which is the largest animal in the world?",
        isResolved: false,
        answers: [
            {
                answerContent: "Shark",
                isTrue: false,
                isChosen: false,
            },
            {
                answerContent: "Blue Whale",
                isTrue: true,
                isChosen: false,
            },
            {
                answerContent: "Elephant",
                isTrue: false,
                isChosen: false,
            },
            {
                answerContent: "Giraffe",
                isTrue: false,
                isChosen: false,
            },
        ],
    },
    {
        questionContent: "3. Which is the largest desert in the world?",
        isResolved: false,
        answers: [
            {
                answerContent: "Kalahari",
                isTrue: false,
                isChosen: false,
            },
            {
                answerContent: "Gobi",
                isTrue: false,
                isChosen: false,
            },
            {
                answerContent: "Sahara",
                isTrue: false,
                isChosen: false,
            },
            {
                answerContent: "Antarctica",
                isTrue: true,
                isChosen: false,
            },
        ],
    },
    {
        questionContent: "4. Which is the smallest continent in the world?",
        isResolved: false,
        answers: [
            {
                answerContent: "Asia",
                isTrue: false,
                isChosen: false,
            },
            {
                answerContent: "Australia",
                isTrue: true,
                isChosen: false,
            },
            {
                answerContent: "Arctic",
                isTrue: false,
                isChosen: false,
            },
            {
                answerContent: "Africa",
                isTrue: false,
                isChosen: false,
            },
        ],
    },
];
const quizListClone = [
    {
        questionContent: "1. Which is the smallest country in the world?",
        isResolved: false,
        answers: [
            {
                answerContent: "Vatican City",
                isTrue: true,
                isChosen: false,
            },
            {
                answerContent: "Bhutan",
                isTrue: false,
                isChosen: false,
            },
            {
                answerContent: "Nepal",
                isTrue: false,
                isChosen: false,
            },
            {
                answerContent: "Shri Lanka",
                isTrue: false,
                isChosen: false,
            },
        ],
    },
    {
        questionContent: "2. Which is the largest animal in the world?",
        isResolved: false,
        answers: [
            {
                answerContent: "Shark",
                isTrue: false,
                isChosen: false,
            },
            {
                answerContent: "Blue Whale",
                isTrue: true,
                isChosen: false,
            },
            {
                answerContent: "Elephant",
                isTrue: false,
                isChosen: false,
            },
            {
                answerContent: "Giraffe",
                isTrue: false,
                isChosen: false,
            },
        ],
    },
    {
        questionContent: "3. Which is the largest desert in the world?",
        isResolved: false,
        answers: [
            {
                answerContent: "Kalahari",
                isTrue: false,
                isChosen: false,
            },
            {
                answerContent: "Gobi",
                isTrue: false,
                isChosen: false,
            },
            {
                answerContent: "Sahara",
                isTrue: false,
                isChosen: false,
            },
            {
                answerContent: "Antarctica",
                isTrue: true,
                isChosen: false,
            },
        ],
    },
    {
        questionContent: "4. Which is the smallest continent in the world?",
        isResolved: false,
        answers: [
            {
                answerContent: "Asia",
                isTrue: false,
                isChosen: false,
            },
            {
                answerContent: "Australia",
                isTrue: true,
                isChosen: false,
            },
            {
                answerContent: "Arctic",
                isTrue: false,
                isChosen: false,
            },
            {
                answerContent: "Africa",
                isTrue: false,
                isChosen: false,
            },
        ],
    },
];
function renderQuiz(quiz) {
    const quizContainer = document.querySelector(".quiz-ques-ans");
    if (quizContainer === null)
        return;
    let renderHTML1 = `<h2 id="quiz-question">${quiz.questionContent}</h2>`;
    let renderHTML2 = quiz.answers
        .map((answer, index) => `<div class="cursor-ans-click ${quiz.isResolved ? "cursor-prevent-click" : ""}">
        <div onclick="handleClickAnswer(${index})" id="answerA" class="quiz-answer ${quiz.isResolved ? "prevent-click-ans" : ""} ${!quiz.isResolved
        ? ""
        : answer.isChosen
            ? answer.isTrue
                ? "true-ans"
                : "false-ans"
            : answer.isTrue
                ? "true-ans"
                : ""}">
        ${answer.answerContent}
        </div>
        </div>`)
        .join("");
    quizContainer.innerHTML = renderHTML1 + renderHTML2;
}
let quizIndex = 0;
let quizBtn = document.querySelector(".quiz-btn");
renderQuiz(quizList[quizIndex]);
function handleClickAnswer(index) {
    quizList[quizIndex].answers[index].isChosen = true;
    quizList[quizIndex].isResolved = true;
    renderQuiz(quizList[quizIndex]);
    quizBtn === null || quizBtn === void 0 ? void 0 : quizBtn.classList.add("show-quiz-btn");
}
function countTrueAnswer(quizzes) {
    let count = 0;
    quizzes.forEach((quiz) => {
        if (quiz.answers.find((answer) => answer.isChosen === true && answer.isTrue === true))
            count += 1;
    });
    return count;
}
quizBtn === null || quizBtn === void 0 ? void 0 : quizBtn.addEventListener("click", () => {
    ++quizIndex;
    if (quizIndex < quizList.length) {
        renderQuiz(quizList[quizIndex]);
        quizBtn === null || quizBtn === void 0 ? void 0 : quizBtn.classList.remove("show-quiz-btn");
        if (quizBtn !== null)
            quizBtn.innerHTML = "Next";
    }
    else {
        const quizContainer = document.querySelector(".quiz-ques-ans");
        if (quizContainer !== null) {
            quizContainer.innerHTML = `<p class="notification-finished">Your scored ${countTrueAnswer(quizList)} out of ${quizList.length}!</p>`;
            if (quizBtn !== null)
                quizBtn.innerHTML = "Play Again";
            quizIndex = -1;
            quizList.forEach((quiz, index1) => {
                quiz.answers.forEach((ans, index2) => {
                    ans.answerContent =
                        quizListClone[index1].answers[index2].answerContent;
                    ans.isChosen = quizListClone[index1].answers[index2].isChosen;
                    ans.isTrue = quizListClone[index1].answers[index2].isTrue;
                });
            });
            quizList.forEach((quiz) => {
                quiz.isResolved = false;
            });
        }
    }
});
