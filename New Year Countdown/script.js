console.log('Namaste');
let element = document.querySelector(".time");

let dayEl = document.querySelector(".day")
let hourEl = document.querySelector(".hour")
let minuteEl = document.querySelector(".min")
let secondEl = document.querySelector(".sec")




const newYear = "1 jan 2023"

function countDown() {
   let date = new Date(newYear);
   let now = new Date();

   let second = (date - now)/1000;

   let days = Math.floor(second/86400)
   let hour = Math.floor(second/3600)%24
   let minute = Math.floor(second/60)%60
   let seconds = Math.floor(second%60)
   

   dayEl.innerText = days;
   hourEl.innerText = hour;
   minuteEl.innerText = minute
   secondEl.innerText = seconds
}


setInterval(countDown, 1000)