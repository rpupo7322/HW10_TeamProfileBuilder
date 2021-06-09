

const fs = require("fs"); 

const InternBuild = (intern) => {
    const InternBuilder = `        <div class="col pb-4">
<div class="card" style="width: 200px;">

    <div class="card-body">
        <h4 class="card-title">${intern.getName()}</h4>
        <p class="card-text">${intern.getRole()}</p>
    </div>
    <ul class="list-group">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
</div>
</div>`
    // let name = man.name;
    // let role = man.getRole();
    // let id = man.id;
    // let email = man.email;
    // let phone = man.phone;
    // ManagerBuilder.ManagerBuilder;
    fs.appendFile('./dist/teamMembers.html', InternBuilder, (err) => err ? console.log(err) : '')
  }

module.exports = {
    InternBuild,
}