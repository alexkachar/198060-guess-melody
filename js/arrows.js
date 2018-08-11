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
