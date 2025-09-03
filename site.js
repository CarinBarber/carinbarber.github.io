const hours = new Date().getHours()
const welcome = document.querySelector('#welcome')

const isMorning = hours >= 4 && hours < 12
const isAfternoon = hours >= 12 && hours < 17
const isEvening = hours >= 17 && hours < 4


if(isMorning) {
    welcome.textContent = 'Good Morning!'
}
    else if(isAfternoon) {
        welcome.textContent = 'Good Afternoon!'
    }
    else {welcome.textContent = 'Good Evening!'}