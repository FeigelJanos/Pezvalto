document.addEventListener("DOMContentLoaded", main );

function main(){
    
    const befizetendo=document.querySelector("#befizetendo");
    const visszajaro=document.querySelector("#visszajaro");
    

    document.querySelector("#get-new-osszeg").onclick=ujOsszeg
    document.querySelector("#befizetes").onclick=visszajaroSzamol
}

function ujOsszeg(){
    befizetendo.innerHTML=Math.floor(Math.random()*99900+101);

}

function visszajaroSzamol(){

    const befizetesMezo=document.querySelector("#befizetett");
   
    let befizetett=document.querySelector("#befizetett").value;
    let maradek= befizetett - befizetendo.innerHTML;

    if (befizetett>5&&maradek===0){
        visszajaro.innerHTML="A befizetett összeg eggyezik az árral. Nincs visszajáró.";
        befizetendo.innerHTML=0;
    }

   else if (befizetett>5&&maradek<0){
        maradek=0;
        visszajaro.innerHTML="További befizetés szükséges.";
        befizetendo.innerHTML-=befizetett
        befizetesMezo.focus()
    }

    else if(befizetett>5&&maradek>0){
        befizetendo.innerHTML=0;
        kiszamol(maradek);
    }

    else{
        maradek=0;
        visszajaro.innerHTML="A befizetett összeg nem megfelelő.";
        befizetesMezo.focus()
    }
    befizetesMezo.value="";
}

function kiszamol(osszeg){
    let penznemek=[];
    const cimletek=[20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5]
    const cimletNevek=["Húszezres", "Tízezres", "Ötezres", "Kétezres", "Ezres", "Ötszázas", "Kétszáz forintos", "Száz forintos", 
    "Ötven forintos", "Húsz forintos", "Tíz forintos", "Öt forintos"];
    let maradek= osszeg;
    let counter=0;

 do{
    for (let index in cimletek ){
        for(let i=maradek; i>=cimletek[index]; i-=cimletek[index]){
            counter+=1;
            maradek-=cimletek[index];
        }
        penznemek.push(counter);
        counter=0;
    }

    if (maradek>2){
        let i= penznemek.length-1;  
        penznemek[i]+=1;
    }
    
}
while(maradek>5);


visszajaro.innerHTML="Visszajár:"+ visszajaroSzoveg(penznemek, cimletNevek);
}

function visszajaroSzoveg(ertekek, cimletek){
}
