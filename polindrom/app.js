let input = document.querySelector("input");
let checkBtn = document.querySelector(".checkBtn");
let resultText = document.querySelector(".resultText");
checkBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let num = +input.value;
  let reversedNum = null;
  let result = null;

  while (num > 0) {
    reversedNum *= 10;
    reversedNum += num % 10;
    num = (num - (num % 10)) / 10;
  }
  num = +input.value;
  if (num == reversedNum) {
    result = "Polindromdur";
  } else {
    result = "Polindrom deyil";
  }
  resultText.innerHTML = result;
});
