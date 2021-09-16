var result = document.getElementById("valorConvertido");
var valor = document.getElementById("valor");

const btnU$ = document.getElementById("value-U$");
btnU$.addEventListener("click", function convertU$() {

  console.log("click");
  let valorDolar = (valor.value * 5.3);
  result.innerHTML = valorDolar.toFixed(2);
  if (valor.value <= 0){
    result.innerHTML = "Este é um número inválido!"
};
});

const btnε$ = document.getElementById("value-ε$");
btnε$.addEventListener("click", function convertε$(){

    console.log("click");
    let valorEuro = (valor.value * 6.1);
    result.innerHTML = valorEuro.toFixed(2);
    if (valor.value <= 0){
        result.innerHTML = "Este é um número inválido!"
    };
});

const btnB$ = document.getElementById("value-₿");
btnB$.addEventListener("click", function convertB$(){

    console.log("click");
    let valorBitcoin = (valor.value * 250.7);
    result.innerHTML = valorBitcoin.toFixed(2);
    if (valor.value <= 0){
        result.innerHTML = "Este é um número inválido!"
    };
});