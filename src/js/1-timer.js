import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const calendar = document.querySelector("#datetime-picker");
const btnStart = document.querySelector("[data-start]");
const timerDays = document.querySelector("[data-days]");
const timerHours = document.querySelector("[data-hours]");
const timerMinutes = document.querySelector("[data-minutes]");
const timerSeconds = document.querySelector("[data-seconds]");
btnStart.disabled = true;
let userSelectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const selectedTime = selectedDates[0].getTime();
    const now = Date.now();
    userSelectedDate = selectedDates[0];
    
    if (selectedTime <= now) {
      window.alert("Please choose a date in the future");
    };
    btnStart.disabled = selectedTime <= now;
  
  },
};

flatpickr(calendar, options);

btnStart.addEventListener("click", () => {
  btnStart.disabled = true;
  const startTime = Date.now();
  let deltaTimeM = userSelectedDate.getTime() - startTime;
  // const timeComponents = convertMs(deltaTime);
  // console.log(timeComponents);


  const intervalId = setInterval(() => {
    deltaTimeM -= 1000;

    const { days, hours, minutes, seconds } = convertMs(deltaTimeM);
    // updateTimer({ days, hours, minutes, seconds });

    // console.log(`${days}:${hours}:${minutes}:${seconds}`);
    if (deltaTimeM <= 0) {
      btnStart.disabled = false;
      clearInterval(intervalId);
    } else {
      updateTimer({ days, hours, minutes, seconds });

    }
  
    

  }, 1000);

  
});

function updateTimer({ days, hours, minutes, seconds }) {
  timerDays.textContent = `${days}`;
  timerHours.textContent = `${hours}`;
  timerMinutes.textContent = `${minutes}`;
  timerSeconds.textContent = `${seconds}`;
  
}


// const timer = {
//   start () {
//     const startTime = Date.now();

//     setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;


//       const timeComponents = convertMs(deltaTime);
//       // console.log(timeComponents);
      


//     }, 1000);
  
// },
// };
// timer.start();





function addLeadingZero(value) {
  return String(value).padStart(2, "0");
};





function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
