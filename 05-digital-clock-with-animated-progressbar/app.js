const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const progress = document.getElementById('progress');

function setCurrentTime() {
    const date = new Date();
    const hr = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    console.log(hr);

    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;
    progress.style.width = `${(sec / 60) * 100}%`;

    if (hour.textContent < 10) {
        hour.textContent = `0${hour.textContent}`;
    }
    if (minute.textContent < 10) {
        minute.textContent = `0${minute.textContent}`;
    }
    if (second.textContent < 10) {
        second.textContent = `0${second.textContent}`;
    }
}

setInterval(setCurrentTime, 1000);
