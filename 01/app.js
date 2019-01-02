
function playSound(e) {   
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);
    if (!audio) return; // Stops function
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
};

function removeTransition(e) {
    if (e.propertyName !== "transform") return; //skips if its not a transform
    this.classList.remove("playing");
};

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));


window.addEventListener("keydown", playSound);