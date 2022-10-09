const hour_hand = document.querySelector('.hour')
const minute_hand = document.querySelector('.minute')
const second_hand = document.querySelector('.second')

function setClock() {
  let date = new Date()
  let hour = date.getHours() * 30
  let minute = date.getMinutes() * 6
  let second = date.getSeconds() * 6

  hour_hand.style.transform = `translateX(-50%) rotate(${hour + (minute/6/60*30)}deg)`
  minute_hand.style.transform = `translateX(-50%) rotate(${minute}deg)`
  second_hand.style.transform = `translateX(-50%) rotate(${second}deg)`
}

setInterval(setClock,1000)




