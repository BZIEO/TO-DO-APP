let btn = document.querySelector(".btn");
let txt = document.querySelector(".userInput");
let ul = document.querySelector(".ul");

btn.addEventListener("click", function () {
  let list = document.createElement("li");
  let delBtn = document.createElement("button");
  delBtn.innerHTML = "Remove";
  list.innerHTML = txt.value;
  ul.appendChild(list);
  list.appendChild(delBtn);

  delBtn.addEventListener("click", function () {
    ul.removeChild(list);
  });
});
