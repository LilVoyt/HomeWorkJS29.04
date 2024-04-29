// const btnStart = document.getElementById("btnStart");
// btnStart.onclick = () => {
//     document.body.style.backgroundColor = 'red';
// }
// const btnEnd = document.getElementById("btnEnd");
// btnEnd.onclick = () => {
//     document.body.style.backgroundColor = "white"
// }
// let count = 0;
// const counter = document.getElementById('counter');
// let interval = null;
// btnStart.addEventListener('click', () => {
//   if (interval == null) {
//     interval = setInterval(() => counter.innerText = ++count, 1000);
//   }
// });
// btnEnd.addEventListener('click', () => {
//   clearInterval(interval);
//   interval = null;
//   count = 0;
//   counter.innerText = count;
// })
// const btnPause = document.getElementById("pause");
// btnPause.addEventListener('click', () => {
//     clearInterval(interval);
//     interval = null;
// })

const defaultBackgroundColor = document.body.style.backgroundColor;

const btnStart = document.getElementById("btnStart");
const btnEnd = document.getElementById("btnEnd");
const btnPause = document.getElementById("pause");
let interval = null;
let count = 5;
const counter = document.getElementById('counter');
btnStart.addEventListener('click', () => {
    interval = null;
    document.body.style.backgroundColor = defaultBackgroundColor;
    counter.innerText = count;
    if (interval == null) {
      interval = setInterval(() => {
        if (count <= 0) {
          clearInterval(interval);
          interval = null;
          count = 0;
          counter.innerText = count;
          document.body.style.backgroundColor = 'red';
          count = 5;
        } else {
          counter.innerText = count - 1; // Update counter with decremented value
          --count; // Decrement count for next iteration
        }
      }, 1000);
    }
});

btnPause.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
})
