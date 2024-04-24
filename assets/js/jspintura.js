let Vfav = "";

let fav = document.getElementById("fav");
let btnFav = document.getElementById("fav");

btnFav.addEventListener("change",(e)=>{

    e.preventDefault();

    Vfav = fav.value;

    console.log("hola");
    console.log(Vfav);
})