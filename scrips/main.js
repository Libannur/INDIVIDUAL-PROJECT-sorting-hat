import {  Card } from "../components/card.js"
import { players } from "../data/reference.js"
import { renderToDom } from "../utils/renderToDom.js"


// Declare key varibales to access the dom
const introBtn = document.querySelector("#intro-btn")
const draftedPlayers = document.querySelector("#draftedPlayers")
const sortBtn = document.querySelector("#sort-btn")
const formDiv = document.querySelector("#playerForm")
const showAll = document.querySelector("#all");
const soccer = document.querySelector("#soccer");
const football = document.querySelector("#football");
const basketball = document.querySelector("#basketball");
const baseball = document.querySelector("#baseball");
const expelDiv = document.querySelector("#expelPlayers")


// a Function that puts the card on the dom.
const renderCard = (array) => {
    let domString = ""
    array.forEach(item => {
        domString += Card(item)
    })
    draftedPlayers.innerHTML = domString
}



// create a fucntion that random selects sports for the new-Obj
const randomise = () => {
    const sport = ["soccer", "football", "basketball", "baseball"]
    const randomSport = Math.floor(Math.random() * sport.length)
    return sport[randomSport]
}

console.log("random Sporst:", randomise());


// create a function that creates form and render it to dom
const renderForm =  () => {
    const formDiv = document.querySelector("#playerForm")
    
    let domString = ""
    domString +=`<div class="card">
    <div class="card-body form-body">
    <form>
    Player Name:<div class="form-floating mb-3">
    <input type="text" class="form-control" id="playerName"  required>
    <label for="playerName">Name</label>
    <button type="submit" class="btn draft-btn btn-primary" id="sort-btn">Sort</button>
    </form>
    </div>
    </div>
    </div>`;
    renderToDom("#playerForm", domString)    
    const form = document.querySelector("form")
    console.log(form);
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const newPlayerObj = {
            id: players.length + 1,
            name: document.querySelector("#playerName").value,
            sport: randomise()
        };
        console.log("new player:", newPlayerObj.name);
        
        players.push(newPlayerObj)
        renderCard(players)
        form.reset()
    })
}

// create Button Filter 

const buttonFilter = (array, sportString) => {
    let newSportArray = []
    for (const player of players) {
        if(player.sport === sportString) {
            newSportArray.push(player)
        }
        console.log(newSportArray);
    }
    renderCard(newSportArray)
}


//  expel button


// an empty array for free Agency Players

const expelledPlayers = []


const expel = (array) => {
    let domString = " "
    for (const player of array) {
        domString +=  `<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
        <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title">${player.name}</h5>
        <p class="card-text">Sport: ${player.sport}</p>
        </div>
        </div>
        </div>
        </div>`;
    }
    expelDiv.innerHTML = domString
}


draftedPlayers.addEventListener("click", (e) => {
    if (e.target.id.includes("delete")) {
        e.preventDefault()
    const [, id] = e.target.id.split("--")
    const index = players.findIndex(player => player.id === Number(id))
    const removedPlayer = players[index]
    console.log(removedPlayer);
    players.splice(index, 1)
    expelledPlayers.push(removedPlayer)
    renderCard(players)
    expel(expelledPlayers)
      
  }
})



const starApp = () => {
    
    renderCard(players)
    introBtn.addEventListener("click", renderForm) 
    
    showAll.addEventListener("click", () => {
        renderCard(players)
    } )
    
    soccer.addEventListener("click", () => {
        buttonFilter(players, "soccer")
    })
    
    basketball.addEventListener("click", () => {
        buttonFilter(players, "basketball")
    })
    baseball.addEventListener("click", () => {
        buttonFilter(players, "baseball")
    })
    football.addEventListener("click", () => {
        buttonFilter(players, "football")
    })
    
}


    


starApp()
    