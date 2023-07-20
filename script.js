

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

function updateXantherCard() {
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

function updateKokoCard() {
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

// Oslo has been requested for a mission of upmost importance! He must be dispatched to America, but our program is trying to dispatch him to other countries. We need to fix this function to make sure that Oslo is being dispatched to the correct location, and that our console accurately displays this. After Oslo is dispatched, his agent card and status also need to update.

function dispatchOslo() {

  let dispatchLocation = 'America'

  oslo.location = dispatchLocation

  if (oslo.location == "London") {
    console.log('Oslo Dispatched to London')
  }
  if (oslo.location == "America") {
    console.log('Oslo Dispatched to America')
  }
  if (oslo.location == "Japan") {
    console.log("Oslo Dispatched to Japan")

  }
    oslo.isDispatched = true


  updateOsloCard()
}


// Our program is currently dispatching Xanther for a mission that he does not have the right skill set for! We need to fix this function to make sure it can read the required mission skills and check if they match Xanther's skills. If they do not match, we should get a console log stating that Xanther cannot be dispatched, and his agent card and status should not update. 

function dispatchXanther() {
  let missionSkills = "Swimming, Espionage"
  if(xanther.skills == missionSkills) {
    console.log("Xanther has been dispatched!")
    xanther.isDispatched = true
  }
    else {
      alert("Mission skills do not match! Xanther not dispatched.")
  }
  
  

  updateXantherCard()
}

// Koko is one of our newer agents on the field. Right now our program is not properly checking Koko's age to verify their mission clearance. This function needs to properly compare the mission clearance ages to Koko's age and dispatch Koko for any mission they have the experience to perform. 

function dispatchKoko() {
  let newbieAge = 0
  let rookieAge = 5
  let seasonedAge = 13
  let seniorAge = 20


  if (koko.age >= seniorAge) {
    console.log('Koko has been cleared and dispatched for a senior mission!')
    koko.isDispatched = true
  } else if (koko.age >= seasonedAge) {
    console.log('Koko has been cleared and dispatched for a seasoned mission')
    koko.isDispatched = true
  } else if (koko.age >= rookieAge) {
    console.log('Koko has been cleared and dispatched for a rookie mission')
    koko.isDispatched = true
  } else if (koko.age >= newbieAge) {
    console.log('Koko has been cleared and dispatched for a newbie mission')
    koko.isDispatched = true
  }




  updateKokoCard()
}