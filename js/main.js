class Kimchi {
    constructor(UsuarioHakusai) {
        this.hakusai = 2700
        this.salKosher = 75
        this.aguaPasta = 472
        this.harinaArroz = 30
        this.azucarPasta = 28
        this.zanahoria = 80
        this.nabo = 200
        this.cebollaVerdeo = 390
        this.ajo = 24
        this.jengibre = 30
        this.cebolla = 75
        this.salsaPescado = 70
        this.gochuGaru = 160
        this.UsuarioHakusai = parseFloat(UsuarioHakusai)
    }
    calcularIngredientes(a, b) {
        const ingredientes = [];
        let nuevaSalKosher = ((this.UsuarioHakusai * this.salKosher) / this.hakusai);
        ingredientes.push({ id: 1, ingrediente: "Sal kosher ", cantidad: Math.round(nuevaSalKosher) })
        let nuevaAguaPasta = ((this.UsuarioHakusai * this.aguaPasta) / this.hakusai);
        ingredientes.push({ id: 2, ingrediente: "Agua para la pasta", cantidad: Math.round(nuevaAguaPasta) })
        let NuevaHarinaArroz = ((this.UsuarioHakusai * this.harinaArroz) / this.hakusai);
        ingredientes.push({ id: 3, ingrediente: "Harina de arroz ", cantidad: Math.round(NuevaHarinaArroz) })
        let NuevaAzucarPasta = ((this.UsuarioHakusai * this.azucarPasta) / this.hakusai);
        ingredientes.push({ id: 4, ingrediente: "Azucar para la pasta", cantidad: Math.round(NuevaAzucarPasta) })
        let nuevaZanahoria = ((this.UsuarioHakusai * this.zanahoria) / this.hakusai);
        ingredientes.push({ id: 5, ingrediente: "Zanahoria", cantidad: Math.round(nuevaZanahoria) })
        let nuevoNabo = ((this.UsuarioHakusai * this.nabo) / this.hakusai);
        ingredientes.push({ id: 6, ingrediente: "Nabo", cantidad: Math.round(nuevoNabo) })
        let nuevaCebollaVerdeo = ((this.UsuarioHakusai * this.cebollaVerdeo) / this.hakusai);
        ingredientes.push({ id: 7, ingrediente: "cebolla de verdeo", cantidad: Math.round(nuevaCebollaVerdeo) })
        let nuevoAjo = ((this.UsuarioHakusai * this.ajo) / this.hakusai);
        ingredientes.push({ id: 8, ingrediente: "Ajo", cantidad: Math.round(nuevoAjo) })
        let nuevoJengibre = ((this.UsuarioHakusai * this.jengibre) / this.hakusai);
        ingredientes.push({ id: 9, ingrediente: "jengibre", cantidad: Math.round(nuevoJengibre) })
        let NuevaCebolla = ((this.UsuarioHakusai * this.cebolla) / this.hakusai);
        ingredientes.push({ id: 10, ingrediente: "Cebolla", cantidad: Math.round(NuevaCebolla) })
        let nuevaSalsaPescado = ((this.UsuarioHakusai * this.salsaPescado) / this.hakusai);
        ingredientes.push({ id: 11, ingrediente: "salsa de pescado", cantidad: Math.round(nuevaSalsaPescado) })
        let nuevoGochuGaru = ((this.UsuarioHakusai * this.gochuGaru) / this.hakusai);
        ingredientes.push({ id: 12, ingrediente: "Gochugaru", cantidad: Math.round(nuevoGochuGaru) })

        return ingredientes
    }
}



//default para que submit no me reloaded la pag
//let miFormulario = document.getElementById("formulario");
$("#formulario").submit(validarFormulario)

// activa btn reset
$("#formulario").on("reset", function(vaciarFormulario) {
    $("#resultadoCalc").empty();
    //resultadoCalc.innerHTML = ""
})

//JS VANILLA
//miFormulario.addEventListener("submit", validarFormulario);
//miFormulario.addEventListener("reset", vaciarFormulario);

// refiero a mi html div resultadoCalc
//let resultadoCalc = document.getElementById("resultadoCalc")

function validarFormulario(e) {
    e.preventDefault();
    let inputUsuario = document.getElementById("ingreseHakusai").value
    console.log(typeof parseInt(inputUsuario))
    if (parseInt(inputUsuario)) {
        calcularTuReceta(inputUsuario)
        console.log('entra', typeof inputUsuario)
    } else {
        $("#resultadoCalc").append("<h6 class='reset'>ERROR:INGRESE UN NUMERO</h6>")
        $(".reset").css({
                "color": "red",
                "background-color": "yellow",

            })
            .slideUp(2000)
            .slideDown(2000);
    }
}
//resultadoCalc.innerHTML = `<h6>ERROR:INGRESE UN NUMERO</h6>`

function calcularTuReceta(input) {
    console.log('calcula receta')
    resultadoCalc.innerHTML = ""
        //let tuHakusai = document.getElementById("ingreseHakusai").value
    const tuKimchi = new Kimchi(input)
    let tusIngredientes = tuKimchi.calcularIngredientes()
    console.log(tusIngredientes)
    tusIngredientes.forEach((item, index) => {
        localStorage.setItem(item.ingrediente, JSON.stringify(item))
        console.log(localStorage.getItem(item.ingrediente))


        //Jquery
        $("#resultadoCalc").prepend(`<li><p>Necesitas de  ${ item.ingrediente } : ${item.cantidad} gramos </p>`)

        //JS Vanilla 
        //const elemento = document.createElement("li")
        //  '<p> Necesitas de ' + item.ingrediente + ': ' + item.cantidad + 'gramos </p>'
        //elemento.innerHTML = `<p> Necesitas de  ${ item.ingrediente } : ${item.cantidad} gramos </p>`
        //resultadoCalc.appendChild(elemento)
    })
}




//listado en orden en el html MAP: otra opcion
//const lista = tusIngredientes.map(item => `<li> ${item}</li> `)
//document.getElementById("resultadoCalc").innerHTML = `<ul>  ${lista} </ul>`