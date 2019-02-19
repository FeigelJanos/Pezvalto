document.addEventListener("DOMContentLoaded", main );

function main(){
    document.querySelector("#get-new-osszeg").onclick=ujOsszeg
    document.querySelector("#befizetes").onclick=visszajaroSzamol

    const befizetendo=document.querySelector("#befizetendo")
}

function ujOsszeg(){
const num=Math.floor(Math.random()*99900+100);
befizetendo.innerHTML=num +" Ft";
}

function visszajaroSzamol(){
    console.log("Megy");
}
