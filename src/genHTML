//create individual card items before adding them
//to an array to plug into the final html output

//manager element
const genManager = function (manager) {
    return `
    <div class="card">
  <div class="card-header">
    <h2>Manager</h2>
  </div>
  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <p class="card-text">${manager.id}</p>
    <p class="card-text">${manager.email}</p>
    <p class="card-text">${manager.office}</p>
  </div>
</div>
    `
}

//engineer element
const genEngineer = function (engineer) {
    return `
    <div class="card">
  <div class="card-header">
    <h2>Engineer</h2>
  </div>
  <div class="card-body">
    <h5 class="card-title">${engineer.name}</h5>
    <p class="card-text">${engineer.id}</p>
    <p class="card-text">${engineer.email}</p>
    <p class="card-text">${engineer.office}</p>
  </div>
</div>
    `
}


//intern element
const genIntern = function (intern) {
    return `
    <div class="card">
  <div class="card-header">
    <h2>Intern</h2>
  </div>
  <div class="card-body">
    <h5 class="card-title">${intern.name}</h5>
    <p class="card-text">${intern.id}</p>
    <p class="card-text">${intern.email}</p>
    <p class="card-text">${intern.office}</p>
  </div>
</div>
    `
}


//combine all elements to send to genPage
const genHTML = (x) => {
    cardArray = [];

    const role = data.map(employee.getRole());

    if (role === 'Manager') {
      const managerCard = generateManager(employee);

      cardArray.push(managerCard);
    }
  
    if (role === 'Engineer') {
          const engineerCard = generateEngineer(employee);

          cardArray.push(engineerCard);
    }

      
    if (role === 'Intern') {
          const internCard = generateIntern(employee);

          cardArray.push(internCard);
    }

    const employeeCards = cardArray.join('')

    const generateTeam = genPage(employeeCards);
    return generateTeam

    
}


const genPage = (cardArray) => {
    return `
    <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${cards}
              </div>
          </div>
      </main>
      
  </body>
</html>`

}

module.exports = genPage;


