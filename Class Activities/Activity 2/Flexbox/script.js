function checkAnswers() {
    const questions = document.querySelectorAll('.question');
    let score = 0;
    let allAnswered = true;

    questions.forEach(question => {
        const selectedAnswer = question.querySelector('input[type="radio"]:checked');
        const labels = question.querySelectorAll('label');

        // Reset label colors before new check
        labels.forEach(label => label.style.color = 'black');

        if (selectedAnswer) {
            if (selectedAnswer.value === 'correct') {
                score++;
                // Highlight correct answer in green
                selectedAnswer.parentElement.style.color = 'green';
            } else {
                // Highlight incorrect answer in red
                selectedAnswer.parentElement.style.color = 'red';
                // Also highlight correct answer for reference
                question.querySelector('input[value="correct"]').parentElement.style.color = 'green';
            }
        } else {
            allAnswered = false; // If any question is unanswered
        }
    });

    const resultDiv = document.getElementById('result');
    if (allAnswered) {
        resultDiv.textContent = `You got ${score} out of 3 correct!`;
    } else {
        resultDiv.textContent = 'Please answer all the questions before submitting.';
    }
}

// Todo List
function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}