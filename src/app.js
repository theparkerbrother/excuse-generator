/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = [
    "The dog",
    "My grandma",
    "The mailman",
    "My bird",
    "My brother Harrison",
    "The carpet cleaner",
    "Sarah",
    "Kevin Hart",
    "Kevin James"
  ];
  let action = [
    "ate",
    "peed",
    "crushed",
    "broke",
    "nuked",
    "fire bombed",
    "sued",
    "twirled"
  ];
  let what = [
    "my homework",
    "my phone",
    "the car",
    "my best friend",
    "my breakfast",
    "trash can",
    "my stapler"
  ];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let whoNum = Math.floor(Math.random() * who.length);
  let actionNum = Math.floor(Math.random() * action.length);
  let whatNum = Math.floor(Math.random() * what.length);
  let whenNum = Math.floor(Math.random() * when.length);

  document.getElementById(
    "excuse"
  ).innerHTML = `${who[whoNum]} ${action[actionNum]} ${what[whatNum]} ${when[whenNum]}!`;
};
