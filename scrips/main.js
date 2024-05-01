import {  Card, renderForm } from "../components/card.js"
import { players } from "../data/reference.js"
import { renderToDom } from "../utils/renderToDom.js"

const introBtn = document.querySelector("#intro-btn")
const draftedPlayers = document.querySelector("#draftedPlayers")
const sortBtn = document.querySelector("#sort-btn")
const formDiv = document.querySelector("#playerForm")
const renderCard = (array) => {
    let domString = ""
    array.forEach(item => {
        domString += Card(item)
    })
    draftedPlayers.innerHTML += domString
}
renderCard(players)


introBtn.addEventListener("click", renderForm) 



