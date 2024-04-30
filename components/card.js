export const  players = (array) => {
  let domString = ""
  array.forEach((player) => {
    domString += `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${player.name}</h5>
          <p class="card-text">House: ${player.house}</p>
          <a href="#" class="btn btn-danger" id="delete--${player.id}">Expel</a>
        </div>
      </div>
    </div>
  </div>`;
  })
}