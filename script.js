
const questions = [
  {
    q: "What is the best way to prevent infection?",
    choices: ["Wear gloves all day", "Wash hands",
              "Use perfume", "Close doors"],
    answer: 1
  },
  {
    q: "What does CNA stand for?",
    choices: ["Certified Nursing Assistant",
              "Clinical Nurse Administrator",
              "Certified Nurse Associate",
              "Care Nursing Assistant"],
    answer: 0
  },
  {
    q: "What is a normal adult resting pulse range?",
    choices: ["30-50", "60-100", "110-140", "150-180"],
    answer: 1
  },
  {
    q: "What should you do if a resident falls?",
    choices: ["Lift them immediately",
              "Leave them alone",
              "Stay with them and call for help",
              "Give them water"],
    answer: 2
  },
  {
    q: "What does HIPAA protect?",
    choices: ["Employee schedules", "Patient privacy",
              "Hospital parking", "Food menus"],
    answer: 1
  },
  {
    q: "What is the normal adult resting breathing rate?",
    choices: ["4-8", "12-20", "25-35", "40-50"],
    answer: 1
  },
  {
    q: "When should gloves be changed?",
    choices: ["Once a day", "Only when torn",
              "Between residents and tasks as needed",
              "Every four hours"],
    answer: 2
  },
  {
    q: "What is the purpose of a gait belt?",
    choices: ["Restrict residents", "Measure weight",
              "Assist with safe mobility",
              "Keep clothing in place"],
    answer: 2
  },
  {
    q: "What should a CNA do before providing care?",
    choices: ["Explain the procedure",
              "Turn off the lights",
              "Remove the call light",
              "Ignore the resident"],
    answer: 0
  },
  {
    q: "Which position means lying flat on the back?",
    choices: ["Prone", "Supine", "Sims", "Fowler's"],
    answer: 1
  },
  {
    q: "What is the first step before taking vital signs?",
    choices: ["Document results",
              "Identify the resident",
              "Leave the room",
              "Call the family"],
    answer: 1
  },
  {
    q: "What should you do if a resident refuses care?",
    choices: ["Force the care", "Ignore the refusal",
              "Respect the refusal and report it",
              "Threaten the resident"],
    answer: 2
  },
  {
    q: "What is a common sign of dehydration?",
    choices: ["Moist mouth", "Clear urine",
              "Dry mouth", "Increased tears"],
    answer: 2
  },
  {
    q: "How should dirty linens be handled?",
    choices: ["Shake them", "Place them on the floor",
              "Hold them against your uniform",
              "Place them in the designated hamper"],
    answer: 3
  },
  {
    q: "What is the purpose of repositioning residents?",
    choices: ["Prevent pressure injuries",
              "Increase noise",
              "Avoid communication",
              "Reduce hydration"],
    answer: 0
  },
  {
    q: "Which is an example of objective information?",
    choices: ["Resident feels sad",
              "Resident says they are tired",
              "Temperature is 101°F",
              "Resident dislikes breakfast"],
    answer: 2
  },
  {
    q: "What should you do when a call light rings?",
    choices: ["Ignore it", "Respond promptly",
              "Wait until the next shift",
              "Disconnect it"],
    answer: 1
  },
  {
    q: "What does ADL stand for?",
    choices: ["Activities of Daily Living",
              "Adult Daily Learning",
              "Assisted Doctor List",
              "Advanced Daily Laboratory"],
    answer: 0
  },
  {
    q: "What should a CNA report immediately?",
    choices: ["Favorite television show",
              "Sudden difficulty breathing",
              "Preferred meal",
              "Usual bedtime"],
    answer: 1
  },
  {
    q: "How should you communicate with a resident?",
    choices: ["Use respectful, clear language",
              "Speak over them",
              "Ignore their questions",
              "Always shout"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionNumber =
    document.getElementById("questionNumber");
const questionText =
    document.getElementById("questionText");
const answerChoices =
    document.getElementById("answerChoices");
const feedback =
    document.getElementById("feedback");
const nextButton =
    document.getElementById("nextButton");

function showQuestion() {
    const question = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionText.textContent = question.q;
    answerChoices.innerHTML = "";
    feedback.textContent = "";
    nextButton.hidden = true;

    question.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = choice;
        button.className = "choice";

        button.addEventListener("click", () => {
            checkAnswer(index);
        });

        answerChoices.appendChild(button);
    });
}

function checkAnswer(selected) {
    const question = questions[currentQuestion];
    const buttons =
        answerChoices.querySelectorAll("button");

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (selected === question.answer) {
        score++;
        feedback.textContent = "Correct! Great job!";
    } else {
        feedback.textContent =
            "Incorrect. Correct answer: " +
            question.choices[question.answer];
    }

    nextButton.hidden = false;
}

nextButton.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        document.getElementById("quizBox").hidden = true;
        document.getElementById("results").hidden = false;

        const percent = Math.round(
            (score / questions.length) * 100
        );

        document.getElementById("finalScore").textContent =
            `You scored ${score} out of ${questions.length} (${percent}%).`;
    }
});

document.getElementById("restartButton")
    .addEventListener("click", () => {
        currentQuestion = 0;
        score = 0;

        document.getElementById("results").hidden = true;
        document.getElementById("quizBox").hidden = false;

        showQuestion();
    });

showQuestion();
