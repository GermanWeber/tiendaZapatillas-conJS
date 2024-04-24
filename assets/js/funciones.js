import { zapatillas } from "./zapatillas.js";



export const createCard = (data) =>{

  const card  =
  `<div class="card col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
  <figure>
    <a class="sin-decoracion negro" href="#">
      <img src="${data.foto}" class="card-img-top " alt="...">
  </figure>
  <div class="contenido">
    <h3>${data.name}</h3>
    <p>${data.precio}</p>
    </a>
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


export const renderCardsMarca = (data, marca, containerId) =>{
  const container = document.getElementById(containerId);
  data.forEach(item => {
      container.innerHTML += createCard(item);
  });
};



// const {id,name, precio} = zapatillas[0];

// console.log(id);
// console.log(name);
// console.log(precio);

// function getRobotById (id){

//      return zapatillas.find(function (robot) {
//          return zapatillas.id === id;
//     } )
// }

// export const getRobotById  = (id) => {

//     return robots.find((robot) =>{
//         return robot.id === id
//     })
// }


// const getRobotBySeries =(series=2) =>{

//     return robots.filter((robot) =>{
//         return robot.series ===series;
//     })
// }



