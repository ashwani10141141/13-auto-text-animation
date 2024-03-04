const containerEle = document.querySelector(".container");

const array = ["Web Developer", "Software Engineer", "JavaScript Developer"];

let arrayIndex = 0;
let arrayCharIndex = 0;
update();
function update() {
  arrayCharIndex++;
  containerEle.innerHTML = ` <h1>I am ${array[arrayIndex].slice(
    0,
    arrayCharIndex
  )}</h1>`;

  if (arrayCharIndex === array[arrayIndex].length) {
    arrayIndex++;
    arrayCharIndex = 0;
  }
  if (arrayIndex === array.length) {
    arrayIndex = 0;
  }
  setTimeout(update, 400);
}
