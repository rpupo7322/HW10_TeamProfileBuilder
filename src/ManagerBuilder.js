// const ManagerBuilder = `        <div class="col pb-4">
// <div class="card" style="width: 200px;">

//     <div class="card-body">
//         <h4 class="card-title">{{ name }}</h4>
//         <p class="card-text">{{ role }}</p>
//     </div>
//     <ul class="list-group">
//         <li class="list-group-item">ID: {{ id }}</li>
//         <li class="list-group-item">Email: <a href="mailto:{{ email }}">{{ email }}</a></li>
//         <li class="list-group-item">Office Number: {{ officeNumber }}</li>
//     </ul>
// </div>
// </div>`
const fs = require("fs"); 

const managerBuild = (man) => {
    const ManagerBuilder = `        <div class="col pb-4">
    <div class="card" style="width: 200px;">
    
        <div class="card-body">
            <h4 class="card-title">${man.getName()}</h4>
            <p class="card-text"> ${man.getRole()}</p>
        </div>
        <ul class="list-group">
            <li class="list-group-item">ID: ${man.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${man.getEmail()}">${man.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${man.getOfficeNumber()}</li>
        </ul>
    </div>
    </div>`
    // let name = man.name;
    // let role = man.getRole();
    // let id = man.id;
    // let email = man.email;
    // let phone = man.phone;
    // ManagerBuilder.ManagerBuilder;
    fs.appendFile('./dist/teamMembers.html', ManagerBuilder, (err) => err ? console.log(err) : '')
  }

module.exports = {
    // ManagerBuilder,
    managerBuild,
}