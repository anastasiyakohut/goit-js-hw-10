import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const startBtn = document.querySelector('[data-start]');
const datetimePicker = document.getElementById('datetime-picker');
const timerShow = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

let userSelectedDate = null;
startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        const selectedDateTime = selectedDates[0];
        if (selectedDateTime < Date.now()) {
            iziToast.error({
                title: 'Error',
                message: 'Please choose a date in the future',
                position: "topRight",
                backgroundColor: "#EF4040",
            });
            startBtn.disabled = true;
        }
        else {
            userSelectedDate = selectedDateTime;
            startBtn.disabled = false;
        }
    },
};
flatpickr("#datetime-picker", options);

startBtn.addEventListener("click", () => {
    if (!userSelectedDate) {
        return;
    }

    datetimePicker.disabled = true;
    startBtn.disabled = true;
    const finalTime = userSelectedDate.getTime();

    function updateTimer() {
        const currentTime = new Date();
        const deltaTime = finalTime - currentTime.getTime();

        if (deltaTime <= 0) {
            clearInterval(interval);
            timerShow.days.textContent = '00';
            timerShow.hours.textContent = '00';
            timerShow.minutes.textContent = '00';
            timerShow.seconds.textContent = '00';
            datetimePicker.disabled = false;
            return;
        }

        const { days, hours, minutes, seconds } = convertMs(deltaTime);
        timerShow.days.textContent = addLeadingZero(days.toString());
        timerShow.hours.textContent = addLeadingZero(hours.toString());
        timerShow.minutes.textContent = addLeadingZero(minutes.toString());
        timerShow.seconds.textContent = addLeadingZero(seconds.toString());
    }

    let interval = setInterval(updateTimer, 1000);
    updateTimer();
});

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return value.padStart(2, '0');
}