
const screamerCard = document.querySelector('#screamerCard')

let timeOutId;

const screamerImg = document.createElement('img')
screamerImg.src = '../img/screamer.webp'
screamerImg.className = 'screamer-img'

screamerCard.addEventListener('click', function() {
    const audio = new Audio('../sound/among.mp3');
    document.body.append(screamerImg)
    audio.play();
    timeOutId = setTimeout(deleteScreamer, 2000)
    document.body.classList.add('no-scroll')
})

function deleteScreamer() {
    screamerImg.remove()
    clearTimeout(timeOutId)
    document.body.classList.remove('no-scroll')
}