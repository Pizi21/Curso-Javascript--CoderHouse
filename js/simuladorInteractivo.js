let UsuarioHakusai = prompt("Ingrese cantidad de Hakusai en gramos")
    // el numero debe ser ingresado con "punto" en caso de ser mayor a 999gr , luego se creera un IF

const hakusai = 2700
const zanahoria = 80
const nabo = 200


function calcularIngrediente(a, b) {

    let numero = ((a / b) * UsuarioHakusai);
    return numero
}

let nuevaZanahoria = calcularIngrediente(hakusai, zanahoria);
let nuevoNabo = calcularIngrediente(hakusai, nabo);
alert("Usted necesita  " + (Math.round(nuevaZanahoria)) + " gramos de zanahoria" + "\n" + "Usted necesita  " + (Math.round(nuevoNabo)) + " gramos de Nabo")