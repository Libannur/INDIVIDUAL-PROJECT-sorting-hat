import { card } from "../components/card.js"
import { refercenceList } from "../data/reference.js"
import { renderToDom } from "../utils/renderToDom.js"

const draftApp = document.querySelector("#app");
const introBtn = document.querySelector("#introBtn");
const targetApp = document.querySelector("app");
const drafted = document.querySelector("#draftedPlayers");


const startApp = () => {
     draftApp.toggleAttribute("hidden")
}

const renderCards = (array) => {
    let domString = "";
    array.forEach( item => {
        domString.inne += targetApp(item)
    } )
    renderToDom("app", domString)
}
introBtn.addEventListener("click", renderCards)