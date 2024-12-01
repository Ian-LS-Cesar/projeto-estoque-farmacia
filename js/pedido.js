zdocument.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button-quantidade");
    const numberDisplays = document.querySelectorAll(".number-display");
  
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const action = button.getAttribute("data-action");
        const numberDisplay = button.parentNode.querySelector(".number-display");
        const currentValue = parseInt(numberDisplay.getAttribute("data-value"));
        let newValue;
  
        if (action === "increase") {
          newValue = currentValue + 1;
        } else if (action === "decrease") {
          newValue = currentValue - 1;
          if (newValue < 0) {
            newValue = 0;
          }
        }
  
        numberDisplay.setAttribute("data-value", newValue);
        numberDisplay.textContent = newValue;
      });
    });
  });