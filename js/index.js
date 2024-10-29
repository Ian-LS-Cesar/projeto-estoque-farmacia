document.addEventListener('DOMContentLoaded', function() {
    // Function to handle button clicks
    document.querySelectorAll('.button-quantidade').forEach(button => {
        button.addEventListener('click', function() {
            // Get the current number display element
            const numberDisplay = this.parentElement.querySelector('.number-display');
            let currentValue = parseInt(numberDisplay.getAttribute('data-value'), 10); // Get the current value

            // Check if currentValue is NaN
            if (isNaN(currentValue)) {
                currentValue = 0; // Reset to 0 if NaN
            }

            const action = this.getAttribute('data-action'); // Get the action from the button

            // Update the value based on the action
            if (action === 'increase') {
                currentValue += 1; // Increase the value
            } else if (action === 'decrease' && currentValue > 0) {
                currentValue -= 1; // Decrease the value, but not below 0
            }

            // Update the display and the data-value attribute
            numberDisplay.textContent = currentValue; // Update the display
            numberDisplay.setAttribute('data-value', currentValue); // Update the data attribute
        });
    });
});