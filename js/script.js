import { robots } from "./robots.js";
import {createCard , renderCards, getRobotById} from "./funciones.js"

// console.log("erthetnetn");
// console.log(robots[0]);

// console.log(robots[0].id);
// console.log(robots[0].name);
// console.log(robots[0].series);


// const {id,name, series} = robots[0];

// console.log(id);
// console.log(name);
// console.log(series);

// function getRobotById (id){

//     return robots.find(function (robot) {
//         return robot.id === id;
//     } )
// }

// console.log(getRobotById("013"));


// const getRobotBySeries =(series=2) =>{

//     return robots.filter((robot) =>{
//         return robot.series ===series;
//     })
// }

// console.log(getRobotBySeries(2));

renderCards(robots,"RobotsRow");

