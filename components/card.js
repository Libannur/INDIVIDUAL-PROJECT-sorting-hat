
export const  Card = (Object) => {
  return `
  <div card-body mb-3 >
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


