const allRatings = document.getElementsByClassName("rating");
let rating = 5;

for (let i = 0; i < allRatings.length; i++) {
   allRatings[i].addEventListener("click", function () {
      for (let i = 0; i < allRatings.length; i++) {
         allRatings[i].classList.remove("active");
      }
      allRatings[i].classList.add("active");
      rating = allRatings[i].innerHTML;
   });
}

let height = document.querySelector(".container").offsetHeight;
document.querySelector(".thanks").style.height = `${height}px`;

const button = document.querySelector(".btn-submit");
const main = document.querySelector(".thanks");
const span = document.querySelector("span");

button.addEventListener("click", function () {
   main.classList.remove("hidden");
   span.innerHTML = rating;
});
