document.addEventListener("DOMContentLoaded", function() {
  var questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      answer: "Pacific"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
      answer: "William Shakespeare"
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["W", "H2O", "O2", "CO2"],
      answer: "H2O"
    },
    {
      question: "What is the closest planet to the Sun?",
      options: ["Earth", "Mars", "Mercury", "Venus"],
      answer: "Mercury"
    }
  ];

  var questionIndex = 0;

  function loadQuestion() {
    var questionContainer = document.getElementById("question");
    var optionsContainer = document.getElementById("options");
    var currentQuestion = questions[questionIndex];

    questionContainer.innerHTML = "<p>" + currentQuestion.question + "</p>";

    // Clear previous options
    optionsContainer.innerHTML = "";

    // Add new options
    currentQuestion.options.forEach(function(option) {
      var button = document.createElement("button");
      button.textContent = option;
      button.onclick = function() {
        checkAnswer(option, currentQuestion.answer, button);
      };
      optionsContainer.appendChild(button);
    });
  }

  function checkAnswer(selected, correct, button) {
    if (selected === correct) {
      button.style.backgroundColor = "green";
    } else {
      button.style.backgroundColor = "red";
    }
    
    setTimeout(function() {
      if (questionIndex < questions.length - 1) {
        questionIndex++;
        loadQuestion();
      } else {
        alert("Test completed!");
        window.location.href = "index.html"; // Redirect to homepage when the test is completed
      }
    }, 1000); // Move to next question after 1 second
  }

  // Function to start the test
  function startTest() {
    window.location.href = "test.html";
    loadQuestion();
  }

  // Add event listener to start test button
  var startTestBtn = document.getElementById("startTestBtn");
  if (startTestBtn) {
    startTestBtn.addEventListener("click", startTest);
  }
});
