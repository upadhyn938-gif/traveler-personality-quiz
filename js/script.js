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


// Calculate and display the travel personality result
function displayResult() {
    // Make sure every question has been answered
    if (Object.keys(selectedAnswers).length !== questions.length) {
        alert("Please answer all questions before viewing your result!");
        return;
    }

    // Count how many times each answer was selected
    const scores = {
        A: 0,
        B: 0,
        C: 0,
        D: 0
    };

    Object.values(selectedAnswers).forEach((answer) => {
        scores[answer]++;
    });

    // Find the most selected answer
    let topAnswer = "A";

    for (let answer in scores) {
        if (scores[answer] > scores[topAnswer]) {
            topAnswer = answer;
        }
    }

    // Match the answer to a travel personality
    const results = {
        A: "Adventure Seeker! You love excitement, exploring new places, and trying thrilling activities.",
        B: "Beach Lover! You enjoy sunshine, relaxing vacations, and peaceful days by the ocean.",
        C: "City Explorer! You love discovering new cultures, visiting museums, and exploring exciting cities.",
        D: "Nature Lover! You enjoy mountains, forests, fresh air, and peaceful outdoor adventures."
    };

    // Display the result on the webpage
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result-text");

    resultText.textContent = results[topAnswer];
    resultContainer.style.display = "block";

    console.log("Final scores:", scores);
}

// Run the function when Show Results is clicked
document.getElementById("show-result").addEventListener("click", displayResult);

