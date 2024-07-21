function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4";
    
    // Retrieve the user's answer
    const selectedRadioButton = document.querySelector('input[name="quiz"]:checked');
    if (!selectedRadioButton) {
        // If no answer is selected, provide a prompt to the user
        document.getElementById('feedback').textContent = "Please select an answer.";
        document.getElementById('feedback').style.color = "#dc3545";
        return;
    }
    const userAnswer = selectedRadioButton.value;
    
    // Compare the user's answer with the correct answer
    const feedbackElement = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "#28a745";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "#dc3545";
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
