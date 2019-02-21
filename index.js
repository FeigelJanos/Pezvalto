/*Cashing the DOM*/
const befizetendo_section=document.querySelector("#befizetendo");
const visszajaro_footer=document.querySelector("#visszajaro");

/*Start main after HTML and CSS loaded (unnecesary but added security)*/
document.addEventListener("DOMContentLoaded", main);

/*Main starts here*/
function main(){
    document.querySelector("#get-new-osszeg").onclick=ujOsszeg              //If button is clicked starts ujOsszeg funciton
    document.querySelector("#befizetes").onclick=visszajaroSzamol           //If buton is clicked starts visszajaroSzamol function
}


/*Generates a new amount payable*/
function ujOsszeg(){
    befizetendo_section.innerHTML=Math.floor(Math.random()*99899+101);      //Generates a random number between 101 and 100000

}

/*Checks if the paid amount exceeds the price set*/
function visszajaroSzamol(){

    const befizetesMezo=document.querySelector("#befizetett");              //Sets const to input DOM element
   
    let befizetett=document.querySelector("#befizetett").value;             //Sets variable to inputed value
    let maradek= befizetett - befizetendo_section.innerHTML;                //Calculates the extent of overpay into a variable

    if (befizetett>5&&maradek===0){                //If there is no overpay and the customer paid at least the minimum possible currency
        visszajaro_footer.innerHTML="A befizetett összeg eggyezik az árral. Nincs visszajáró.";     //Write out the result on the page
        befizetendo_section.innerHTML=0;                                                          //Sets the remaining payable to 0
    }

   else if (befizetett>5&&maradek<0){     //If the payment doesn't reach the price, but the customer paid at least the minimum possible currency 
        maradek=0;                  //Resets overpay variable
        visszajaro_footer.innerHTML="További befizetés szükséges.";     //Writes out thet more payment is necessary
        befizetendo_section.innerHTML-=befizetett                   //Reduces the price with the amount already paid
        befizetesMezo.focus()                                       //Keeps the focus on the input field
    }

    else if(befizetett>5&&maradek>0){       //If the payment exceeds price and the customer paid at least the minimum
        befizetendo_section.innerHTML=0;       //Writes out the price as 0
        kiszamol(maradek);                     //Starts the kiszamol function
    }

    else{
        maradek=0;          //Resets the owerpay variable to 0
        visszajaro_footer.innerHTML="A befizetett összeg nem megfelelő.";       //Writes out that the payment is not fine
        befizetesMezo.focus()                                                   //Keeps the focus on the input field
    }
    befizetesMezo.value="";                         //Change the input field to empty
}
/*Counts the change from the overpay*/
function kiszamol(osszeg){
    let penznemek=[];           //Initiates an empty array
    const cimletek=[20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5]       //Initiates an array with all pssible denominations
    const cimletNevek=["Húszezres", "Tízezres", "Ötezres", "Kétezres", "Ezres", "Ötszázas", "Kétszáz forintos", "Száz forintos", 
    "Ötven forintos", "Húsz forintos", "Tíz forintos", "Öt forintos"];      //Initiates an array with the names of the bills
    let maradek= osszeg;        //variable with value equal to overpay    
    let counter=0;      //counter variable
    
/*For every element in cimletek array divide the overpay with that element until the overpay is less than the current element.
Push the number of times it was divided into the empty penznemek array. While the overpay is larger than 5*/
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


visszajaro_footer.innerHTML="Visszajár:";

    /*Write out how many of wich currency the buyer should recieve onto the page.*/
    for (let i in penznemek){
    if (penznemek[i]>0){
    visszajaro_footer.insertAdjacentText("beforeend", penznemek[i] +" db " + cimletNevek[i] + ". ");
}
}
}
