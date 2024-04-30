import {  Card, Form } from "../components/card.js"
import { refercenceList } from "../data/reference.js"
import { renderToDom } from "../utils/renderToDom.js"

const introBtn = document.querySelector("#intro-btn")
const playerDiv = document.querySelector("#playerForm")
const draftedPlayers = document.querySelector("#draftedPlayers")

const renderCard = (array) => {
    let domString = ""
    array.forEach(item => {
     domString += Card(item)
    })
    draftedPlayers.innerHTML += domString
}
renderCard(refercenceList)

const showForm = () => {
    renderToDom("#playerForm", Form)
    
}

introBtn.addEventListener("click", showForm)