const textbox = document.getElementById("textbox");
const tofah = document.getElementById("tofah");
const tocels = document.getElementById("tocels");
let risultato;
let grado;

function converti(){
    if(tofah.checked){

        grado = Number(textbox.value);      
        risultato = grado * (9/5) + 32;
        document.getElementById("risultato").textContent = `Hai scelto da Celsius a Fahrenheit, il tuo risultato è ${risultato}°F`;
    }else if(tocels.checked){

        grado = Number(textbox.value);
        risultato = (grado - 32) * (5/9);
        document.getElementById("risultato").textContent = `Hai scelto da Fahrenheit a Celsius, il tuo risultato è ${risultato}°C`;

    }else{

        alert("Seleziona un'opzione prima di poter continuare");

    }

}