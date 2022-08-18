const body = document.querySelector("body")
const button = document.querySelector("button")


const colors = ["yellow", "green", "gray", "red", "black", "#a2f2f2", "yellowgreen"]

button.addEventListener('click', arkaplan);

var sıra = 0;

function arkaplan(){
    const sıralı = colors[sıra];
    body.style.backgroundColor= sıralı;
    sıra ++;
    if(sıra==colors.length){
        sıra=0
    }
    console.log(sıra);
    return arkaplan ;
    
}
/*
function arkaplan(){
    const rastgele = Math.floor(Math.random()*colors.length)
    const color= colors[rastgele];
    body.style.backgroundColor= color;
    return arkaplan
}
*/
 /*
function arkaplan() {
   
    var i=0
    for (i , i < colors.length; i++;) {
        const color = colors[i];
        body.style.backgroundColor = color;
        // if (i = 7) {
        //     i = 0
        // }
    }
   return arkaplan
}*/