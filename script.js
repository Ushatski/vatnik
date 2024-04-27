// Define startTest function in the global scope
function startTest() {
  window.location.href = "test.html";
}

document.addEventListener("DOMContentLoaded", function() {
  // Function to load question and options
  function loadQuestion(index) {
    var questionContainer = document.getElementById("question");
    var optionsContainer = document.getElementById("options");
    var currentQuestion = questions[index];

    // Check if elements are found before setting innerHTML
    if (questionContainer && optionsContainer) {
      questionContainer.innerHTML = "<p>" + currentQuestion.question + "</p>";

      // Clear previous options
      optionsContainer.innerHTML = "";

      // Add new options
      currentQuestion.options.forEach(function(option) {
        var button = document.createElement("button");
        button.textContent = option;
        button.onclick = function() {
          checkAnswer(option, currentQuestion.answer);
        };
        optionsContainer.appendChild(button);
      });
    } else {
      console.error("Question or options container not found.");
    }
  }

  // Function to check answer
  function checkAnswer(selected, correct) {
    if (selected === correct) {
      alert("Correct!");
      // You can add Google Analytics tracking here
    } else {
      alert("Incorrect. Try again!");
    }
  }

  // Question data
  var questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris"
    }
  ];

  // Load the first question when the page loads
  loadQuestion(0);
  
  // Add event listener to start test button
  var startTestBtn = document.getElementById("startTestBtn");
  startTestBtn.addEventListener("click", startTest);
});
