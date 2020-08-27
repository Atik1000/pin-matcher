//generate pin  handler
document.getElementById("generate-btn").addEventListener("click", () => {
  const generateInput = document.getElementById("generate-input");
  const randomValue = Math.floor(1000 + Math.random() * 9000);

  generateInput.value = randomValue;
});

//number button handler

let btnValue = (num) => (document.querySelector("#display-input").value += num);
let btnClear = (num) => (document.querySelector("#display-input").value = num);

// submit button handler

let match = document.querySelector("#match");
let notMatch = document.querySelector("#not-match");
let submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click",  ()=> {
  let btnDisplay = document.querySelector("#generate-input").value;
  let pinDisplay = document.querySelector("#display-input").value;
  if (btnDisplay === pinDisplay) {
    notMatch.style.display = "none";
    match.style.display = "block";
  } else {
    notMatch.style.display = "block";
    match.style.display = "none";
  }
});
