export const renderToDom = (array) => {
  let domString = "";
  array.forEach((item) =>  {
    domString += `<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${student.name}</h5>
        <p class="card-text">House: ${student.house}</p>
        <a href="#" class="btn btn-danger" id="delete--${student.id}">Expel</a>
      </div>
    </div>
  </div>
</div>`;
  })
  enrolledStudents.innerHTML = domString;
};

  