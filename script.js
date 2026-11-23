"use strict";

// CNA practice quiz

const quiz = document.getElementById("quiz");

if (quiz) {

    const correctAnswers = [
        0, 1, 2, 0, 0, 1,
        0, 0, 1, 0, 1, 0
    ];

    const result = document.getElementById("result");

    quiz.addEventListener("submit", function(event) {

        event.preventDefault();

        const formData = new FormData(quiz);

        let score = 0;

        correctAnswers.forEach(function(answer, index) {

            const selectedAnswer = formData.get("q" + index);

            if (selectedAnswer !== null &&
                Number(selectedAnswer) === answer) {
                score++;
            }
        });

        const percentage = Math.round(
            (score / correctAnswers.length) * 100
        );

        let message = "";

        if (percentage >= 90) {
            message = "Excellent job!";
        } else if (percentage >= 75) {
            message = "Great work! Keep studying.";
        } else {
            message = "Keep practicing. You can improve!";
        }

        result.textContent =
            "Quiz submitted successfully! You scored " +
            score + " out of " +
            correctAnswers.length + " (" +
            percentage + "%). " + message;

        result.focus();
    });

    quiz.addEventListener("reset", function() {
        result.textContent = "";
    });
}


// Website feedback form

const feedback = document.getElementById("feedback");

if (feedback) {

    feedback.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        document.getElementById("feedback-result").textContent =
            "Thank you, " + name +
            "! Your feedback was processed successfully. " +
            "This is a demonstration. No message was sent or stored.";

        feedback.reset();
    });
}
