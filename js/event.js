const subhanAllahDisplay = document.getElementById("subhanAllahDisplay");
const alhamdulillahDisplay = document.getElementById("alhamdulillahDisplay");
const allahAkberDisplay = document.getElementById("allahAkberDisplay");

const subhanAllahIncrimentBtn = document.getElementById(
  "subhanAllahIncrimentBtn"
);
const alhamdulillahIncrimentBtn = document.getElementById(
  "alhamdulillahIncrimentBtn"
);
const allahAkberIncrimentBtn = document.getElementById(
  "allahAkberIncrimentBtn"
);

const subhanAllahDecrimentBtn = document.getElementById(
  "subhanAllahDecrimentBtn"
);

const alhamdulillahDecrimentBtn = document.getElementById(
  "alhamdulillahDecrimentBtn"
);

const allahAkberDecrimentBtn = document.getElementById(
  "allahAkberDecrimentBtn"
);
const resetBtn = document.getElementById("resetBtn");

let intValS = 0;
let intValAl = 0;
let intValAa = 0;

subhanAllahIncrimentBtn.addEventListener("click", function () {
  if (intValS === 33) {
    return alert("Subanhallah Finish Start Alhamdulillah");
  }
  intValS += 1;
  subhanAllahDisplay.innerText = intValS;
});
alhamdulillahIncrimentBtn.addEventListener("click", function () {
  if (intValAl === 33) {
    return alert("Alhamdulillah Finish Start AllahuAkbar ");
  }
  intValAl += 1;
  alhamdulillahDisplay.innerText = intValAl;
});
allahAkberIncrimentBtn.addEventListener("click", function () {
  if (intValAa === 33) {
    return alert("Your task completed ");
  }
  intValAa += 1;
  allahAkberDisplay.innerText = intValAa;
});

subhanAllahDecrimentBtn.addEventListener("click", function () {
  if (intValS === 0) {
    return alert("Cant add negetive number ");
  }
  intValS -= 1;
  subhanAllahDisplay.innerText = intValS;
});
alhamdulillahDecrimentBtn.addEventListener("click", function () {
  if (intValAl === 0) {
    return alert("Cant add negetive number ");
  }
  intValAl -= 1;
  alhamdulillahDisplay.innerText = intValAl;
});
allahAkberDecrimentBtn.addEventListener("click", function () {
  if (intValAa === 0) {
    return alert("Cant add negetive number ");
  }
  intValAa -= 1;
  allahAkberDisplay.innerText = intValAa;
});

resetBtn.addEventListener("click", function () {
  intValS = 0;
  intValAl = 0;
  intValAa = 0;
  subhanAllahDisplay.innerText = 0;
  alhamdulillahDisplay.innerText = 0;
  allahAkberDisplay.innerText = 0;
});
