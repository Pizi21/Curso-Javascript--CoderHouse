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
        ingredientes.push("Necesitas de Sal kosher: " + Math.round(nuevaSalKosher) + " gramos")
        let nuevaAguaPasta = ((this.UsuarioHakusai * this.aguaPasta) / this.hakusai);
        ingredientes.push("Necesitas de Agua para la pasta: " + Math.round(nuevaAguaPasta) + " gramos")
        let NuevaHarinaArroz = ((this.UsuarioHakusai * this.harinaArroz) / this.hakusai);
        ingredientes.push("Necesitas de Harina de arroz: " + Math.round(NuevaHarinaArroz) + " gramos")
        let NuevaAzucarPasta = ((this.UsuarioHakusai * this.azucarPasta) / this.hakusai);
        ingredientes.push("Necesitas de Azucar para la pasta: " + Math.round(NuevaAzucarPasta) + " gramos")
        let nuevaZanahoria = ((this.UsuarioHakusai * this.zanahoria) / this.hakusai);
        ingredientes.push("Necesitas de Zanahoria: " + Math.round(nuevaZanahoria) + " gramos")
        let nuevoNabo = ((this.UsuarioHakusai * this.nabo) / this.hakusai);
        ingredientes.push("Necesitas de Nabo: " + Math.round(nuevoNabo) + " gramos")
        let nuevaCebollaVerdeo = ((this.UsuarioHakusai * this.cebollaVerdeo) / this.hakusai);
        ingredientes.push("Necesitas de cebolla de verdeo: " + Math.round(nuevaCebollaVerdeo) + " gramos")
        let nuevoAjo = ((this.UsuarioHakusai * this.ajo) / this.hakusai);
        ingredientes.push("Necesitas de Ajo : " + Math.round(nuevoAjo) + " gramos")
        let nuevoJengibre = ((this.UsuarioHakusai * this.jengibre) / this.hakusai);
        ingredientes.push("Necesitas de jengibre: " + Math.round(nuevoJengibre) + " gramos")
        let NuevaCebolla = ((this.UsuarioHakusai * this.cebolla) / this.hakusai);
        ingredientes.push("Necesitas de Cebolla: " + Math.round(NuevaCebolla) + " gramos")
        let nuevaSalsaPescado = ((this.UsuarioHakusai * this.salsaPescado) / this.hakusai);
        ingredientes.push("Necesitas de salsa de pescado: " + Math.round(nuevaSalsaPescado) + " mililitros")
        let nuevoGochuGaru = ((this.UsuarioHakusai * this.gochuGaru) / this.hakusai);
        ingredientes.push("Necesitas de Gochugaru: " + Math.round(nuevoGochuGaru) + " gramos")

        return ingredientes
    }
}

let tuHakusai = prompt("Ingrese cantidad de Hakusai en gramos")
const tuKimchi = new Kimchi(tuHakusai)
let tusIngredientes = tuKimchi.calcularIngredientes()
console.log(tusIngredientes.join("\n"))