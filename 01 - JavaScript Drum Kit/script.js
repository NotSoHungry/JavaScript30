var test;

window.addEventListener('keydown', (e) => {
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) {return}
    audio.currentTime = 0;
    audio.play();
    
    var div = document.querySelector(`div[data-key="${e.keyCode}"]`);
    div.classList.toggle('playing');
    setTimeout(() => {
        div.classList.toggle('playing');
    }, 100)
    
})