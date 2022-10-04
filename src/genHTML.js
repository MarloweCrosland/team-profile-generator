// create the team
const generateTeam = team => {

  // create the manager html
  const generateManager = manager => {
      return `
      <div class="card" style="width: 18rem;">
      <div class="card-header">
        ${manager.getName()}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${manager.getRole()}</li>
        <li class="list-group-item">${manager.getId()}</li>
        <li class="list-group-item">${manager.getEmail()}</li>
        <li class="list-group-item">${manager.getOffice()}</li>
      </ul>
    </div>
      `;
  };

  // create the html for engineers
  const generateEngineer = engineer => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
      ${engineer.getName()}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${engineer.getRole()}</li>
      <li class="list-group-item">${engineer.getId()}</li>
      <li class="list-group-item">${engineer.getEmail()}</li>
      <li class="list-group-item">${engineer.getGithub()}</li>
    </ul>
  </div>
    `;
  };

  // create the html for interns
  const generateIntern = intern => {
      return `
      <div class="card" style="width: 18rem;">
      <div class="card-header">
        ${intern.getName()}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${intern.getRole()}</li>
        <li class="list-group-item">${intern.getId()}</li>
        <li class="list-group-item">${intern.getEmail()}</li>
        <li class="list-group-item">${intern.getSchool()}</li>
      </ul>
    </div>
      `;
  };

  const html = [];

  html.push(team
      .filter(employee => employee.getRole() === "Manager")
      .map(manager => generateManager(manager))
  );
  html.push(team
      .filter(employee => employee.getRole() === "Engineer")
      .map(engineer => generateEngineer(engineer))
      .join("")
  );
  html.push(team
      .filter(employee => employee.getRole() === "Intern")
      .map(intern => generateIntern(intern))
      .join("")
  );

  return html.join("");

}

// export function to generate entire page
module.exports = team => {

  return `
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>My Team</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
  <div class="container-fluid">
      <div class="row">
          <div class="col-12 jumbotron mb-3 team-heading">
              <h1 class="text-center">My Team</h1>
          </div>
      </div>
  </div>
  <div class="container">
      <div class="row">
          <div class="team-area col-12 d-flex justify-content-center">
              ${generateTeam(team)}
          </div>
      </div>
  </div>
</body>
</html>
  `;
};