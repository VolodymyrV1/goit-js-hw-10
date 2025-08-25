import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const calendar = document.querySelector("#datetime-picker");
const btnStart = document.querySelector("[data-start]")

flatpickr(calendar, {
  enableTime: true,
  time_24hr: true,
  dateFormat: "Y-m-d H:i",
  defaultDate: new Date(),

  onClose(selectedDates) {
    const selectedTime = selectedDates[0].getTime();
    const now = Date.now();

    if (selectedTime < now) {
      btnStart.disabled = true;
    } else {
      btnStart.disabled = false;
    }
        
  }
});