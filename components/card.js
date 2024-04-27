export const card = (object) => {
    return `<div class="card" style="width: 18rem; display: flex; margin: 10px">
    <div class-header>
    <h3 class="card-title">${object.name}</h3>
    </div>
    <img src="${object.imageUrl}" class="card-img-top" alt="${object.name}">
    <div class="card-body">
      <p class="card-text">${object.color}</p>
      <p class="card-text">${object.specialSkill}</p>
      <button class="btn btn-danger" id="delete--${object.id}">Delete</button>
    </div>
  </div>`;
}