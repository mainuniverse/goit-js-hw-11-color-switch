const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
const body = document.querySelector("body");
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let stop;
const switchColor = () => {
  stop = setInterval(() => {
    let arrayElement = randomIntegerFromInterval(0, colors.length - 1);
    body.style.backgroundColor = colors[arrayElement];
  }, 500);
  btnStart.disabled = true;
  btnStop.disabled = false;
};
const stopSwitch = () => {
  console.log("stopSwitch");
  clearInterval(stop);
  btnStart.disabled = false;
  btnStop.disabled = true;
};


btnStart.addEventListener('click', switchColor);
btnStop.addEventListener('click', stopSwitch);

//   start() {
//     if (this.isActive) {
//       return;
//     }
//     this.isActive = true;
//     this.changeBackground = setInterval(() => {
//       const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
//       document.body.style.background = randomColor;
//     }, 300);
//     btnStart.disabled = true;
//   },

//   stop() {
//     this.isActive = false;
//     clearInterval(this.changeBackground);
//   },
// };
// const buttons = {
//   changeBackground: null,
//   isActive: false,
