let precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

// calcularTotal();


function sumar() {
                    let numerador = document.querySelector('#visualizador');
                    let cuenta = Number(numerador.innerHTML);
                    numerador.innerHTML = cuenta + 1;

                    calcularTotal();
}

function restar() {
                    let numerador = document.querySelector('#visualizador');
                    let cuenta2 = Number(numerador.innerHTML);
                    let resta = cuenta2 - 1;
                    numerador.textContent = resta;

                    calcularTotal();
}

function calcularTotal() {
    let cantidad = Number(document.querySelector('#visualizador').textContent);
    let total = precio * cantidad;
    document.querySelector('#valor-total').textContent = total;
}   



