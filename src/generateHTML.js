
const fs = require("fs");

function writeHTML(html) {
  fs.writeFile()
}

function genHTML(cards) {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.6.0/lux/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
  <title>Team Profile</title>
</head>

<body>
  <nav class="navbar navbar-dark bg-primary justify-content-center mb-5">
    <h1 class="page-header text-light">My Team</h1>
  </nav>
  <div class="container">
    <div class="row justify-content-center">
      ${cards}
    </div>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
</body>

</html>
`;
}


function genManagerCard(name, id, email, office) {
  return `<div class="col-12 col-md-6 col-lg-4">
  <div class="card text-light bg-primary mb-3">
    <div class="card-header">
      <h3 class="text-light">${name}</h3>
      <h3 class="text-light"><i class="fa fa-user" aria-hidden="true"></i> Manager</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item bg-primary text-light">ID: ${id}</li>
        <li class="list-group-item bg-primary text-light">Email: <a class="text-info" href="mailto:${email}">${email}</a></li>
        <li class="list-group-item bg-primary text-light">Office number: ${office}</li>
      </ul>
    </div>
  </div>
</div>
`;
}

function genEngineerCard(name, id, email, github) {
  return `<div class="col-12 col-md-6 col-lg-4">
  <div class="card text-light bg-primary mb-3">
    <div class="card-header">
      <h3 class="text-light">${name}</h3>
      <h3 class="text-light"><i class="fa fa-cogs" aria-hidden="true"></i> Engineer</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item bg-primary text-light">ID: ${id}</li>
        <li class="list-group-item bg-primary text-light">Email: <a class="text-info" href="mailto:${email}">${email}</a></li>
        <li class="list-group-item bg-primary text-light">GitHub: <a class="text-info" href="https://www.github.com/${github}/">${github}</a></li>
      </ul>
    </div>
  </div>
</div>
`;
}

function genInternCard(name, id, email, school) {
  return `<div class="col-12 col-md-6 col-lg-4">
  <div class="card text-light bg-primary mb-3">
    <div class="card-header">
      <h3 class="text-light">${name}</h3>
      <h3 class="text-light"><i class="fa fa-graduation-cap" aria-hidden="true"></i> Intern</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item bg-primary text-light">ID: ${id}</li>
        <li class="list-group-item bg-primary text-light">Email: <a class="text-info" href="mailto:${email}">${email}</a></li>
        <li class="list-group-item bg-primary text-light">School: ${school}</li>
      </ul>
    </div>
  </div>
</div>`;
}


module.exports = {
  genHTML,
  genManagerCard,
  genEngineerCard,
  genInternCard
};
