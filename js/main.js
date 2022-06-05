// ------ Declarando variables ------
let producto;
let cantidad;
let iniciarCompra;
let continuarCompra;
let totalCompra = 0;
let totalPagar = 0;

// ------ Creando objetos productos ------

class Producto {
    constructor(nombre, valor, categoria){
        this.nombre = nombre
        this.valor = valor
        this.categoria = categoria
    }
}

const pampersConfort = new Producto ("Pampers confort sec", 1230, "pañales")
const pampersPremium = new Producto ("Pampers premium care", 1480, "pañales")
const huggiesAct = new Producto ("Huggies active sec", 1200, "pañales")
const qsoftPremium = new Producto ("Qsoft Premium", 280, "toallas humedas")
const pampersSplash = new Producto ("Pampers splash", 250, "toallas humedas")

// ------ Declarando funciones ------

function bienvenida () {
    alert (`Saludos ${nombre}, te damos la bienvenida a Pipu Baby & kids, pañalera y juguetería online`)
}

function incorrecto(){
    alert ("La opción seleccionada no es correcta. Por favor intentelo nuevamente.")
}

function cuantia () {
    return Number(prompt ("Qué cantidad deseas comprar?"))
}

function continuar(){
    return prompt ("Desea continuar comprando? Si/No").toLowerCase()
}

function comprar() {
    producto = prompt ("Qué producto estabas buscando? Seleccioná Toallitas o Pañales").toLowerCase()

    switch (producto) {
        case "pañales":
            producto = prompt("Qué marca preferís: Huggies o Pampers ?").toLowerCase()
            if (producto === "pampers"){
                producto = prompt ("Puedes elegir Confort o Premium").toLowerCase()
                if (producto === "confort"){
                    cantidad = cuantia()
                    totalCompra += (pampersConfort.valor*cantidad)
                    alert(`Añadió a su carrito ${pampersConfort.nombre} x ${cantidad}u.`)
                } else if (producto === "premium") {
                    cantidad = cuantia()
                    totalCompra += (pampersPremium.valor*cantidad)
                    alert(`Añadió a su carrito: ${pampersPremium.nombre} x ${cantidad}u.`)
                } else {
                    incorrecto()
                    comprar()
                }
            } else if (producto === "huggies") {
                cantidad = cuantia()
                totalCompra += (huggiesAct.valor*cantidad)
                alert(`Añadió a su carrito: ${huggiesAct.nombre} x ${cantidad}u.`)
            } else {
                incorrecto()
                comprar()
            }
            break;
        case "toallitas":
            producto = prompt ("Puedes elegir pampers o qsoft").toLowerCase()
            if (producto === "pampers"){
                cantidad = cuantia()
                totalCompra += (pampersSplash.valor*cantidad)
                alert(`Añadió a su carrito: ${pampersSplash.nombre} x ${cantidad}u.`)
            } else if (producto === "qsoft"){
                cantidad = cuantia()
                totalCompra += (qsoftPremium.valor*cantidad)
                alert(`Añadió a su carrito: ${qsoftPremium.nombre} x ${cantidad}u.`)
            } else {
                incorrecto()
                comprar()
            }
            break;
        default:
            incorrecto()
            comprar()
            break;
    }
}

function ingresar(){
    return iniciarCompra = Number(prompt("Si desea comprar un producto elija #1, si desea salir del programa elija #2"))
}

function finalizarCompra() {
    pagar = prompt ("Ingrese su metodo de pago: 'T' para pagos con tarjeta de crédito , o 'E' para efectivo o transferencia con un descuento del 10%").toLowerCase();
    
    if (pagar === "e") {
        totalCompra *= 0.9
        totalPagar = totalCompra;
        alert (`El monto a pagar es $${totalPagar}. Gracias por su compra!`);
    } else if (pagar === "t") {
        totalPagar = totalCompra;
        alert (`El monto a pagar es $${totalPagar}. Gracias por su compra!`);
    } else {
        incorrecto()
        finalizarCompra()
    }
}


// ------ Iniciando programa - Main ------

let nombre = prompt("Hola! Cual es tu nombre?").toUpperCase();
bienvenida();
ingresar();

while (iniciarCompra !== 2) {
    if (iniciarCompra === 1) {
        comprar ();
        continuarCompra = continuar()
        if (continuarCompra === "si") {
            comprar();
            continuarCompra = continuar()
        } else if (continuarCompra === "no") {
            iniciarCompra = 2;
        }
    } else {
        incorrecto();
        ingresar();
    }
}

finalizarCompra();