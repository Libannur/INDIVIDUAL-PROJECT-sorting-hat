
export const  Card = (Object) => {
  return `<div card-body mb-3 >
  <div class="row sport-card">
    <div class="col-md-6">
      <div class="card-body text-center">
        <h5 class="card-title">${Object.name}</h5>
        <p class="card-text">Sport: ${Object.sport}</p>
        <a href="#" class="btn btn-danger" id="delete--${Object.id}">Expel</a>
      </div>
    </div>
  </div>
  </div>
`;
}

export const renderForm =  () => {
    let domString = ""
  domString +=`<div class="card">
    <div class="card-body form-body">
    <form>
    Player Name:<div class="form-floating mb-3">
    <input type="text" class="form-control" id="playerName" placeholder="playerName" required>
    <label for="playerName">Name</label>
    <button type="submit" class="btn draft-btn btn-primary" id="sort-btn">Sort</button>
    </form>
    </div>
    </div>
    </div>`;
    const formDiv = document.querySelector("#playerForm")
    formDiv.innerHTML = domString;
    const form = document.querySelector("form")

    console.log(form);
    
    form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    const newPlayer = {
        id: players.length + 1,
        name: document.querySelector("#playerName").value
    }
    console.log(newPlayer.name);
    })
}
   

