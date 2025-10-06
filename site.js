const key = "It's a secret to everybody.."
localStorage.setItem(key, 'You got a blue rupee!')

const hours = new Date().getHours()

const isMorning = hours >= 4 && hours < 12
const isAfternoon = hours >= 12 && hours < 17
const isEvening = hours >= 17 && hours < 4

const welcome = document.querySelector('#welcome')

if(isMorning) {
    welcome.textContent = 'Good Morning!'
}
else if(isAfternoon) {
    welcome.textContent = 'Good Afternoon!'
}
else { welcome.textContent = 'Good Evening!'}



const urls = [
    'https://i.imgur.com/qA2B4U6.jpeg',
    'https://i.imgur.com/LVx5V3C.jpeg',
    'https://i.imgur.com/PxIoRgD.jpeg',
    'https://i.imgur.com/tdozfh1.jpeg',
    'https://i.imgur.com/VAOqlk9.jpeg'
].map(url => { (new Image()).src = url; return url })

const btnNext = document.querySelector('#next')
const btnPrevious = document.querySelector('#prev')

const images = document.querySelectorAll('#carousel img')

let currentImage = 4 
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}
showImages()

setInterval(() => {  showImages(), currentImage++
    // code to run EVERY 5 seconds
}, 5000)

btnNext.addEventListener('click', () => {
    currentImage++, 
    showImages()})

btnPrevious.addEventListener('click', () => {
    currentImage--,
    showImages()})