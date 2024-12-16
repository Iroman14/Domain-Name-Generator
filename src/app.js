/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const button = document.querySelector("#Execute");

button.addEventListener("click", domain);

//write your code here

function domain() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".net"];
  for (let first of pronoun) {
    for (let second of adj) {
      for (let third of noun) {
        for (let fourth of extension) {
          console.log(first + second + third + fourth);
        }
      }
    }
  }
}
