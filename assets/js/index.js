let arreglo = []

const punto1 = document.getElementById("punto1")
const punto2 = document.getElementById("punto2")
const punto3 = document.getElementById("punto3")
const contenedor1 = document.getElementById("contenedor1")
const contenedor2 = document.getElementById("contenedor2")
const contenedor3 = document.getElementById("contenedor3")

// BOTONES PUNTO 1
const crearArray = document.getElementById("crearArray")
const ordenarArray = document.getElementById("ordenarArray")
const arrayOriginal = document.getElementById("arrayOriginal")
const arrayOrdenado = document.getElementById("arrayOrdenado")

// BOTONES PUNTO 2
const palabra = document.getElementById("palabra")
const lblPalabra = document.getElementById("lblPalabra")

// BOTONES PUNTO 3
const palabraTrans = document.getElementById("palabraTrans")
const lblPalabraTrans = document.getElementById("lblPalabraTrans")


// inician todos ocultos
contenedor1.classList.add('hide')
contenedor2.classList.add('hide')
contenedor3.classList.add('hide')

punto1.addEventListener("click", ()=> {
    contenedor1.classList.remove('hide')
    contenedor2.classList.add('hide')
    contenedor3.classList.add('hide')
})

punto2.addEventListener("click", ()=> {
    contenedor1.classList.add('hide')
    contenedor2.classList.remove('hide')
    contenedor3.classList.add('hide')
})

punto3.addEventListener("click", ()=> {
    contenedor1.classList.add('hide')
    contenedor2.classList.add('hide')
    contenedor3.classList.remove('hide')
})

// EVENTOS DE BOTON DEL PUNTO 1
crearArray.addEventListener("click", ()=> {
    let valor= prompt("Ingrese Nombre I")
    
    arreglo[0]= valor;
    if(valor== " "){
        alert("Felicitaciones ya ingreso sus Nombres a la lista!!")
        arrayOriginal.innerText = 'Array Nombres es: ' + arreglo
    }else{
        do{
            valor= prompt("Ingrese Nombre");
            let existe= false;
            for(let i= 0; i<arreglo.length; i++){
                if(arreglo[i]== valor){
                    existe= true;
                }
            }
            existe ? alert('Ya existe el nombre: ' + valor + ' que esta ingresando!') : arreglo.push(valor)
        }while (valor!== " ")

        alert("Felicitaciones ya ingreso sus Nombres a la lista!!")
        arreglo = arreglo.slice(0, arreglo.length-1)
        arrayOriginal.innerHTML = 'Array Nombres es: <b>' + arreglo + '</b>'
    }
})

ordenarArray.addEventListener("click", ()=> {
    arrayOrdenado.innerHTML = 'Su array ordenado de nombres es: <b>' + arreglo.sort() + '</b>'
})


// EVENTOS DE BOTON DEL PUNTO 2

palabra.addEventListener("click", ()=> {
    let palabra= prompt("Ingrese su palabra")
    let palabrareves = '';
    for(let i= palabra.length-1; i>= 0; i--){
        palabrareves += palabra[i]
    }
    const espacios= palabra.split(" ").length-1
    const numLetras = palabra.length - espacios
    lblPalabra.innerHTML= 'La palabra <b>"' + palabra +  '"</b> tiene ' + espacios + ' espacios y esta compuesta por ' + numLetras + ' letras. <br> La palabra al revés es: <b>"' + palabrareves + '"</b>'
})


// EVENTOS DE BOTON DEL PUNTO 3

palabraTrans.addEventListener("click", ()=> {
    let palabra= prompt("Ingrese su palabra")
    lblPalabraTrans.innerText= palabra.split("").join("-")
})