//Declarando variables
let producto;
let totalCompra = 0;
let totalPagar = 0;
let pampers = 1230;
let huggies = 1250;
let estrella = 1100;
let babysec = 980;

//Declarando función ingreso
function bienvenida () {
    alert(nombre + ', te damos la bienvenida a Pipu Baby & kids, pañalera y juguetería online');

}

//Declarando funcion comprar
function comprar() {
    producto = prompt ("Que producto estabas buscando? Seleccioná Pampers, Huggies, Estrella o Babysec.").toLowerCase();

    switch (producto) {
        case "pampers":
            alert ("Ha seleccionado pañales Pampers");
            totalCompra += pampers;
            break;
        case "huggies":
            alert ("Ha seleccionado pañales Huggies");
            totalCompra += huggies;
            break;
        case "estrella":
            alert ("Ha seleccionado pañales Estrella");
            totalCompra += estrella
            break;
        case "babysec":
            alert ("Ha seleccionado pañales Baybisec");
            totalCompra += babysec
            break;
        default:
            alert ("La opción seleccionada no es correcta. Por favor intentelo nuevamente.");
            comprar();
            break;
    }

}

//Declarando funcion finalizar compra
function finalizarCompra() {
    pagar = prompt ("Ingrese su metodo de pago: 'E' para efectivo o transferencia, o 'T' para pagos con tarjeta de crédito").toLowerCase();
    
    if (pagar === "e") {
        totalCompra *= 0.9
        totalPagar = totalCompra;
        alert ("El monto a pagar es $" + totalPagar + ". Gracias por su compra!");
    } else if (pagar === "t") {
        totalPagar = totalCompra;
        alert ("El monto a pagar es $" + totalPagar + ". Gracias por su compra!");
    }
}


// Iniciando programa - Main

let nombre = prompt("Hola! Cual es tu nombre?").toUpperCase();
bienvenida();
let iniciarCompra = prompt("Si desea comprar un producto elija #1, si desea salir del programa elija #2");

while (iniciarCompra !== "2") {
    if (iniciarCompra === "1") {
        comprar ();
        let continuarCompra = prompt ("Desea continuar comprando? Si/No").toLowerCase();
        if(continuarCompra === "si") {
            comprar();
        } else if (continuarCompra === "no") {
            finalizarCompra();
            iniciarCompra = "2";
        }
    }
}
