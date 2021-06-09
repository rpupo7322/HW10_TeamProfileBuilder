

const fs = require("fs"); 

const EngineerBuild = (engineer) => {
    const EngineerBuilder = `        <div class="col pb-4">
    <div class="card" style="width: 200px;">
    
        <div class="card-body">
            <h4 class="card-title">${engineer.getName()}</h4>
            <p class="card-text">${engineer.getRole()}</p>
        </div>
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" >${engineer.getGithub()}</a></li>
        </ul>
    </div>
    </div>`

    fs.appendFile('./dist/teamMembers.html', EngineerBuilder, (err) => err ? console.log(err) : '')
  }

module.exports = {
    EngineerBuild,
}