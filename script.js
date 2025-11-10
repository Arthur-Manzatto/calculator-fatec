function calcular(){
    let input = document.getElementById("numbers").value.toString().replaceAll(' ','');
    
    let numeros = input.split(",");

    media(numeros);
    moda(numeros);
    mediana(numeros);
    

}

function media(numbers){
    let labelMedia = document.getElementById("media");
    let fTotal = 0;
    let iDivisor = 0;
    let fMedia = 0;

    numbers.forEach(n => {
        n = parseInt(n);
        fTotal += n;
    });
    
    iDivisor = numbers.length;
    fMedia = fTotal/iDivisor;

    labelMedia.innerText += fMedia;
    
}
function moda(numbers){

}
function mediana(numbers){

}