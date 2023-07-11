

const oslo = {
  name: "Oslo",
  img: "🦧",
  age: "???",
  location: "USA",
  skills: ["Knives", "Bo-Staff", "Linguistics"],
  biography: "A trained agent skilled in various ....",
  isDispatched: false
}

const xanther = {
  name: "Xanther",
  img: "🦈",
  age: 23,
  location: "Pacific Ocean",
  skills: ["Swimming", "Espionage"],
  biography: "A trained agent skilled in various ....",
  isDispatched: false
}

const koko = {
  name: "Koko",
  img: "🦍",
  age: 5,
  location: "EU",
  skills: ["Covert Ops", "Piloting", "Nunchucks"],
  biography: "A trained agent skilled in various ....",
  isDispatched: false
}


// SECTION update button functions

function updateOsloCard() {
  let button = document.getElementById('osloButton')
  let statusElem = document.getElementById('oslo-status')
  let osloElem = document.getElementById('oslo')

  if (oslo.isDispatched == true) {
    statusElem.innerText = "Dispatched"
    statusElem.style.color = "red"
    osloElem.classList.add('dispatched')
  } else {
    statusElem.innerText = "Available"
    statusElem.style.color = "green"
  }

  if (oslo.isDispatched == true) {
    button.disabled = true
    console.log(button)
  }
}

function updateXantherButton() {
  let button = document.getElementById('xantherButton')
  let statusElem = document.getElementById('xanther-status')
  let xantherElem = document.getElementById('xanther')

  if (xanther.isDispatched == true) {
    statusElem.innerText = "Dispatched"
    statusElem.style.color = "red"
    xantherElem.classList.add('dispatched')
  } else {
    statusElem.innerText = "Available"
    statusElem.style.color = "green"
  }

  if (xanther.isDispatched == true) {
    button.disabled = true
    console.log(button)
  }
}

function updateKokoButton() {
  let button = document.getElementById('kokoButton')
  let statusElem = document.getElementById('koko-status')
  let kokoElem = document.getElementById('koko')

  if (koko.isDispatched == true) {
    statusElem.innerText = "Dispatched"
    statusElem.style.color = "red"
    kokoElem.classList.add('dispatched')
  } else {
    statusElem.innerText = "Available"
    statusElem.style.color = "green"
  }

  if (koko.isDispatched == true) {
    button.disabled = true
    console.log(button)
  }
}


// SECTION: disptach functions
function dispatchOslo() {

  oslo.location = dispatchLocation
  if (oslo.location = "Europe") {
    console.log('Oslo Dispatched to Europe')
  }
  if (oslo.location = "America") {
    console.log('Oslo Dispatched to America')
  }
  if (oslo.location = "Asia") {
    console.log("Oslo Dispatched to Asia")
  }
  let dispatchLocation = 'America'


  updateOsloCard()
  let missionSkills = ["Ciphers", "Hacking", "Encryption"]
}


function dispatchXanther() {
  if (xanther.skills = missionSkills) {
    console.log("Xanther has been dispatched!")
  }
  xanther.isDispatched = true

  updateXantherButton()
}


function dispatchKoko() {
  let newbieAge = [0]
  let rookieAge = '5'
  let seasonedAge = 13
  let seniorAge = 20


  if (koko.age == seniorAge) {
    console.log('Koko has been cleared and dispatched for a senior mission!')
    koko.isDispatched = true
  } else if (koko.age == seasonedAge) {
    console.log('Koko has been cleared and dispatched for a seasoned mission')
    koko.isDispatched = true
  } else if (koko.age === rookieAge) {
    console.log('Koko has been cleared and dispatched for a rookie mission')
    koko.isDispatched = true
  } else if (koko.age == newbieAge) {
    console.log('Koko has been cleared and dispatched for a newbie mission')
    koko.isDispatched = true
  }




  updateKokoButton()
}