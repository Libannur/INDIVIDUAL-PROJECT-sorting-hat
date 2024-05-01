import {  Card } from "../components/card.js"
import { players } from "../data/reference.js"
import { renderToDom } from "../utils/renderToDom.js"

const introBtn = document.querySelector("#intro-btn")
const draftedPlayers = document.querySelector("#draftedPlayers")
const sortBtn = document.querySelector("#sort-btn")
const formDiv = document.querySelector("#playerForm")


// a Function that puts the card on the dom.
const renderCard = (array) => {
    let domString = ""
    array.forEach(item => {
        domString += Card(item)
    })
    draftedPlayers.innerHTML = domString
}



const randomise = () => {
    const sport = ["soccer", "football", "basketball", "baseball"]
    const randomSport = Math.floor(Math.random() * sport.length)
    return sport[randomSport]
}


console.log(randomise());
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
        console.log(newPlayerObj.name);
        console.log(newPlayerObj.id);
        
        players.push(newPlayerObj)
        renderCard(players)
        form.reset()
    })
}

const starApp = () => {

    introBtn.addEventListener("click", renderForm) 
    renderCard(players)
}
starApp()
    