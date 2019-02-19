document.addEventListener("DOMContentLoaded", main );

function main(){
    
    const befizetendo=document.querySelector("#befizetendo");
    

    document.querySelector("#get-new-osszeg").onclick=ujOsszeg
    document.querySelector("#befizetes").onclick=visszajaroSzamol
}

function ujOsszeg(){
const num=Math.floor(Math.random()*99900+101);
befizetendo.innerHTML=num +" Ft";
}

function visszajaroSzamol(){
    
    let befizetett=document.querySelector("#befizetett").value;
    
}
