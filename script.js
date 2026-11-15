
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("answerButton");
    const answer = document.getElementById("answer");

    button.addEventListener("click", function () {
        if (answer.hidden) {
            answer.hidden = false;
            button.textContent = "Hide Answer";
        } else {
            answer.hidden = true;
            button.textContent = "Show Answer";
        }
    });
});
