const daysEl = document.getElementById('days');
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYear = "1 Jan 2022";

const countDown = () => {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const dif = newYearDate - currentDate;

    const days =Math.floor(dif/(1000 * 60 * 60 * 24));
    const hours =Math.floor(dif/(1000 * 60 * 60))%24;
    const minutes =Math.floor(dif/(1000 * 60))%60;
    const seconds =Math.floor(dif/(1000))%60;
    console.log(seconds)
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

}

let formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
}

countDown();
setInterval(countDown, 1000);