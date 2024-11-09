document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("background-music");
    var muteToggle = document.getElementById("mute-toggle");

    muteToggle.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            muteToggle.innerHTML = '<img src="unmute-icon.png" alt="Mute Button">';
        } else {
            audio.pause();
            muteToggle.innerHTML = '<img src="mute-icon.png" alt="Unmute Button">';
        }
    });
});