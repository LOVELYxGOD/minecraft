// alert('привет скример')
// console.log('привет скример');
// const name = 'скример';
// console.log(name);
// // name = 'не скример'

// let name = 'скример'
// name = 'не скример'
// console.log(name);

// let name ;
// console.log(name);

const screamerCard = document.querySelector('#screamerCard')

let timeOutId;

const screamerImg = document.createElement('img')
screamerImg.src = '../img/screamer.webp'
document.body.classList.add('no-scroll')
screamerImg.className = 'screamer-img'

screamerCard.addEventListener('click', function() {
    const audio = new Audio('../sound/among.mp3');
    document.body.append(screamerImg)
    audio.play();
    timeOutId = setTimeout(deleteScreamer, 2000)
})

function deleteScreamer() {
    screamerImg.remove()
    clearTimeout(timeOutId)
}

