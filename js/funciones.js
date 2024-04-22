import { robots } from "./robots.js";


const {id,name, series} = robots[0];

console.log(id);
console.log(name);
console.log(series);

// function getRobotById (id){

//      return robots.find(function (robot) {
//          return robot.id === id;
//     } )
// }

export const getRobotById  = (id) => {

    return robots.find((robot) =>{
        return robot.id === id
    })
}

export const createCard = (data) =>{

    const card  =
    `<div class="card" style="width: 18rem;">
    <img src="${data.avatar||data.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <p class="card-text">${data.weapon}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
  return card;
};

export const renderCards = (data, containerId) =>{
    const container = document.getElementById(containerId);
    data.forEach(item => {
        container.innerHTML += createCard(item);
    });
};