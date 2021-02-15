"use strict";

window.addEventListener("DOMContentLoaded", sendInput);

let input = document.querySelector("input");
let hex;

function sendInput() {
  input.addEventListener("input", getInput);
}

function getInput(input) {
  input = document.querySelector("input");
  hex = input.value;
  console.log(hex);

  document.querySelector("#color").style.backgroundColor = `${hex}`;
  document.querySelector("#hexcode").textContent = hex;
  hexToRGB(hex);
}

function hexToRGB(hex) {
  hex = hex.replace("#", "");
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  let rgb = `rgb(${r}, ${g}, ${b})`;
  console.log(rgb);

  console.log("rgb(" + r + "," + g + "," + b + ")");
  document.querySelector("#color2").style.backgroundColor = rgb;
  document.querySelector("#rgb").textContent = rgb;
  convertRGBToHSL(r, g, b);
}

function convertRGBToHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  document.querySelector(
    "#color3"
  ).style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
  document.querySelector("#hsl").textContent = `hsl(${h}, ${s}%, ${l}%)`;

  console.log(`hsl(${h}, ${s}%, ${l}%)`);
}

function displayInput() {}
