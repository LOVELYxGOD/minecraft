
const screamerCard = document.querySelector('#screamerCard')
screamerCard.addEventListener('click', function() {
    console.log(screamerCard);
    const audio = new Audio('../img/among.mp3');
    audio.play();
})