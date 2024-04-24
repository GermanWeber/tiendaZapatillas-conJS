import { zapatillas } from "./zapatillas.js";
import {renderCards, renderCardsMarca} from "./funciones.js"

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




// console.log(getRobotBySeries(2));

renderCards(zapatillas,"ListaZapatillas");

renderCardsMarca(zapatillas,"marca","ListaZapatillas");