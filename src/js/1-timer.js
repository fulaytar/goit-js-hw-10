// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const input = document.querySelector('#datetime-picker');
const btn = document.querySelector('button[data-start]');
const userDays = document.querySelector('span[data-days]'),
  userHours = document.querySelector('span[data-hours]'),
  userMinutes = document.querySelector('span[data-minutes]'),
  userSeconds = document.querySelector('span[data-seconds]');

//деактивую кнопку
btn.setAttribute('disabled', "");
let userSelectedDate = '';

//опції бібліотеки
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //опції після вказання дати
    const timeNow = Date.now();
    if (selectedDates[0] - timeNow < 0) {
      btn.setAttribute("disabled", "");
      iziToast.show({
      backgroundColor: '#EF4040',
      message: 'Please choose a date in the future',
      messageColor:'#FFFFFF',
      position: 'topRight',
      close: false,
      iconUrl:'./img/icon.svg',
});
    } else {
      btn.removeAttribute('disabled');
      userSelectedDate = selectedDates[0];
    }
  },
};
//підключив бібліотеку
const calendar =flatpickr('#datetime-picker', options);

//слухач на кнопку
btn.addEventListener('click', setTimer);

//подія на кнопці
function setTimer() {
  btn.setAttribute("disabled", "");
  calendar.destroy();
  const calcTime = setInterval(() => {
    const timeMiliSecond = new Date(userSelectedDate) - new Date();
    const convertTime = convertMs(timeMiliSecond);
    userDays.textContent = addLeadingZero(convertTime.days);
    userHours.textContent = addLeadingZero(convertTime.hours);
    userMinutes.textContent = addLeadingZero(convertTime.minutes);
    userSeconds.textContent = addLeadingZero(convertTime.seconds);
    if (convertTime.seconds < 1) {
      clearInterval(calcTime);
    }
  }, 1000);
}

//функція перетворює мс
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

//функція додає нулики
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

