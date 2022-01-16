const clock = document.querySelector("#clock");
// const calender = document.querySelector("#date");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  // const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}
getClock();
setInterval(getClock, 1000);

// function paintDate() {
//   const date = new Date();
//   calender.innerText = `${date.getDay()},${date.getMonth()} ${date.getDate()},${date.getFullYear()}`;
// }
// paintDate();
// setInterval(paintDate, 8.64e7);
