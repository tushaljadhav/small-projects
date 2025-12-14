let song = document.getElementById("song");
let progress = document.getElementById("progress");
let ctrlIcon = document.getElementById("ctrlIcon");

/* Load song duration */
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

/* Play / Pause */
function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

/* Update progress bar */
setInterval(() => {
    progress.value = song.currentTime;
}, 500);

/* Seek using slider */
progress.oninput = function () {
    song.currentTime = progress.value;
};

/* Forward 5 seconds */
function forward5() {
    song.currentTime = Math.min(song.currentTime + 5, song.duration);
}

/* Backward 5 seconds */
function backward5() {
    song.currentTime = Math.max(song.currentTime - 5, 0);
}
