"use strict";

// ////// TO  NIE DZIALA PRAWIDLOWO - SZKODA CZASU IDE DALEJ///////////
// const navButtons = document.querySelectorAll(".btn-nav");
// let cardName2;

// navButtons.forEach((e, i) => {
//   const arrayOfCards = ["Shop", "About us", "Contact", "Media"];
//   const arrowElement = '<a class="arrow-down">&darr;</a>';
//   // console.log(e.parentElement.children[i].childElementCount);
//   e.addEventListener("click", () => {
//     let cardName;
//     if (arrayOfCards[i] !== cardName) {
//       cardName = arrayOfCards[i];
//     }

//     e.parentNode.childNodes.forEach((x, indx) => {
//       cardName2 = e.textContent;

//       if (x.childNodes.length > 1) {
//         x.textContent = cardName;
//       }
//     });
//     if (e.childElementCount <= 0) {
//       e.innerHTML = `${e.textContent}  ${arrowElement}`;
//     }
//   });
// });
////////////////////////////////////////////////////////////

const btnShop = document.getElementById("btn-shop");
const btnAboutUs = document.getElementById("btn-about");
const btnContact = document.getElementById("btn-contact");
const btnMedia = document.getElementById("btn-media");

const allButtons = document.querySelectorAll(".btn-nav");

allButtons.forEach((button) =>
  button.addEventListener("click", () => {
    allButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  })
);
