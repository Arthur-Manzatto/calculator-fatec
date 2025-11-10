function calcular(){

    let labelMedia = document.getElementById("media");
    let labelMediana = document.getElementById("mediana");
    let labelModa = document.getElementById("moda");

    let input = document.getElementById("numbers").value.toString().replaceAll(' ','');
    
    let numeros = input.split(",").map(n => parseFloat(n));

    labelMedia.innerText = media(numeros);
    labelMediana.innerText = mediana(numeros); 
    labelModa.innerText = moda(numeros);
    

}

function media(numbers){
    
    let fTotal = 0;
    let iDivisor = 0;
    let fMedia = 0;

    numbers.forEach(n => {
        fTotal += n;
    });
    
    iDivisor = numbers.length;
    fMedia = fTotal/iDivisor;

    return "Média: " + fMedia;
    
}
function mediana(numbers){
    numbers.sort((a, b) => a - b);
    let count = numbers.length;

    let iMeio = Math.floor(count / 2); // Pega o índice do meio

    console.log("INDEX DO MEIO: " + iMeio);
    console.log("VALOR DO MEIO: " + numbers[iMeio]);

    if (count % 2 === 0) { 

        let middle1 = numbers[iMeio - 1];
        let middle2 = numbers[iMeio];
        return "Mediana: " + ((middle1 + middle2) / 2);
    } else {

        return "Mediana: " + numbers[iMeio];
    }


}
function moda(numbers){
    
}