let display = document.getElementById('display');

let peso = document.getElementById('peso').value;
let altura = document.getElementById('altura').value;

let calcular = document.getElementById('calcular');

let pesoCliente = peso*peso;
let alturaCliente;
let resultado;



calcular.addEventListener('click',function(){
    let resultado1 = peso * peso.value;
    let resultado2 = resultado1 / altura .value;
    resultado =  resultado2
    
    display.childNodes[1].innerText = pesoCliente;
})