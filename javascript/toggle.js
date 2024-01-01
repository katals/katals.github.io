"use strict";

window.addEventListener("load", () => {
  const ELEMENT_CLOSE = document.querySelector(".nav__close"),
    NAV_MENU = document.querySelector(".nav__menu"),
    ELEMENT_TOGGLE = document.querySelector(".nav__toggle");

  ELEMENT_TOGGLE.addEventListener("click", () => {
    event.preventDefault();
    NAV_MENU.classList.add("show-menu");
  });

  ELEMENT_CLOSE.addEventListener("click", () => {
    event.preventDefault();
    NAV_MENU.classList.remove("show-menu");
  });
});
