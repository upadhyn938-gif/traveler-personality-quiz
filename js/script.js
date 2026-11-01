console.log("script.js connected!");

// Store the user's answers
const selectedAnswers = {};

// Find all question blocks
const questions = document.querySelectorAll(".question-block");

questions.forEach((question, index) => {
    const buttons = question.querySelectorAll(".answer-btn");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove the highlight from other answers
            buttons.forEach((btn) => {
                btn.classList.remove("selected", "btn-primary");
                btn.classList.add("btn-outline-primary");
            });

            // Highlight the selected answer
            button.classList.add("selected", "btn-primary");
            button.classList.remove("btn-outline-primary");

            // Save the selected answer
            selectedAnswers[index] = button.dataset.answer;

            console.log("Selected answers:", selectedAnswers);
        });
    });
});
