'use strict';

const keyCodes = {
  LEFT: 37,
  RIGHT: 39
};

const templateArrows =
  `<div class="arrows__wrap">
    <style>
      .arrows__wrap {
        position: absolute;
        top: 210px;
        left: 50%;
        margin-left: -56px;
      }
      .arrows__btn {
        background: none;
        border: 2px solid black;
        padding: 5px 20px;
      }
    </style>
    <button class="arrows__btn arrows__btn--prev"><-</button>
    <button class="arrows__btn arrows__btn--next">-></button>
  </div>`;

document.querySelector(`.app`).insertAdjacentHTML(`beforeend`, templateArrows);

const screens = Array.from(document.querySelectorAll(`template`)).map((it) => it.content);
const mainElement = document.querySelector(`.main`);

let currentScreen;

const changeScreen = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  currentScreen = index;
  mainElement.innerHTML = ``;
  mainElement.appendChild(screens[currentScreen].cloneNode(true));
};

changeScreen(0);

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case keyCodes.RIGHT:
      changeScreen(currentScreen + 1);
      break;
    case keyCodes.LEFT:
      changeScreen(currentScreen - 1);
      break;
  }
});

document.querySelector(`.arrows__btn--prev`).addEventListener(`click`, () => {
  changeScreen(currentScreen - 1);
});

document.querySelector(`.arrows__btn--next`).addEventListener(`click`, () => {
  changeScreen(currentScreen + 1);
});
