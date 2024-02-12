document.addEventListener("DOMContentLoaded", function () {
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  const responseMessage = document.getElementById("responseMessage");
  const happygif = document.getElementById("happygif");
  const question = document.getElementById("question");

  const questions = [
    "Are you sure?",
    "Are you really sure??",
    "Are you really really sure???",
    "Think again?",
    "Don't believe in second chances?",
    "Ami kede dibo kintu ekhon... 😢",
    "Etobar kno ask koraiteso?? 🙃",
    "I am not going to ask again! 😡",
    "Ekhon kintu r partesi na ami kanna atkaite 😭",
    "Beshi korteso kintu 😒",
    "Pleaseeeeeeeeeee? 😭",
    "Please give me a chance! 🙏",
    "I am begging you to stop! 🙏",
  ];

  let questionIndex = 0;

  yesButton.addEventListener("click", function () {
    responseMessage.innerText = "Yepppie, see you sooonnn ❤️";
    noButton.style.display = "none";
    happygif.style.display = "flex";
    question.style.display = "none";
    yesButton.style.display = "none"
  });

  noButton.addEventListener("click", function () {
    noButton.innerText = questions[questionIndex];
    questionIndex = (questionIndex + 1) % questions.length;
  });
});
