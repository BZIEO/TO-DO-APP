let btn = document.querySelector(".btn");
let txt = document.querySelector(".userInput");
let ul = document.querySelector(".ul");

btn.addEventListener("click", function () {
  let list = document.createElement("li");
  list.innerHTML = txt.value;
  ul.appendChild(list);
});
