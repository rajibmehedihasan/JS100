const media = document.querySelector('video');
const play = document.getElementById('play');
const playIcon = play.querySelector('i');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const time = document.getElementById('timestamp');

// Play + Pause
const playPauseVideo = () => {
    if (media.paused) {
        media.play();
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    } else {
        media.pause();
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    }
};

// Stop Video
const stopVideo = () => {
    media.pause();
    media.currentTime = 0;
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
};

// Update Progress
const updateProgress = () => {
    progress.value = (media.currentTime / media.duration) * 100;

    // Get Mins
    let min = Math.floor(media.currentTime / 60);
    if (min < 10) {
        min = `0${min}`;
    }

    // Get Secs
    let sec = Math.floor(media.currentTime % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    time.innerHTML = `${min}: ${sec}`;
};

const updateVideoProgress = () => {
    media.currentTime = (+progress.value * media.duration) / 100;
};

media.addEventListener('click', playPauseVideo);
play.addEventListener('click', playPauseVideo);
stop.addEventListener('click', stopVideo);
media.addEventListener('timeupdate', updateProgress);
progress.addEventListener('change', updateVideoProgress);
