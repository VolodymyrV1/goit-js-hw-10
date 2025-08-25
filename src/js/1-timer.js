import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const calendar = document.querySelector("#datetime-picker");
const btnStart = document.querySelector("[data-start]")
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
  const startTime = Date.now();
  const a = userSelectedDate.getTime() - startTime;
  console.log(startTime);
  console.log(a);
  
  // console.log(convertMs(a));
  let c = a;

  setInterval(() => {

    c -= 1000;
    console.log(convertMs(c));
    

  }, 1000);

  
})


const timer = {
  start () {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const timeComponents = convertMs(deltaTime);
      // console.log(timeComponents);
      


    }, 1000);
  
},
};
timer.start();











function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
