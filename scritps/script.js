
const form = document.getElementById("form");
const hombre = document.querySelector(".hombreSex");
const mujer = document.querySelector(".mujerSex");
let usuarios = JSON.parse(localStorage.getItem("regUsuario"));


console.log(usuarios);
let sexo = 0;

function Persona(IMC, sexo, edad, peso, altura) {
    this.IMC = IMC;
    this.sex = sexo;
    this.age = edad;
    this.weight = peso;
    this.height = altura;
}

hombre.addEventListener("click", () => {
    hombre.setAttribute("style", "filter: invert(0.48) sepia(1) hue-rotate(35deg) saturate(1000%);")
    mujer.setAttribute("style", "filter: invert(0.55) sepia(1) hue-rotate(450deg) saturate(10%);")
    sexo = "hombre";
    console.log(sexo);
})
mujer.addEventListener("click", () => {
    mujer.setAttribute("style", "filter: invert(0.48) sepia(1) hue-rotate(35deg) saturate(1000%);")
    hombre.setAttribute("style", "filter: invert(0.55) sepia(1) hue-rotate(450deg) saturate(10%);")
    sexo = "mujer";
    console.log(sexo);
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (sexo == 0) {
        alert("Seleccione un genero para continuar")
    }else{
        const edad = document.getElementById("edad").value;
        const peso = document.getElementById("peso").value;
        let altura = document.getElementById("altura").value;

        // let puntoArreglo = Array.from(altura);           //Convierte el strieng en Arreglo
        // let coma = puntoArreglo.indexOf(",");            //encuentra la posición de la coma (",")
        // puntoArreglo.splice(coma, 1, ".");               //remplaza la coma por un punto (".")

        // console.log(puntoArreglo);                       

        // let punto = puntoArreglo.toString();             //convierte el arreglo en un string (separado por comas ",")
        // let casa = punto.replace(/,/g,"");               //Remplaza las comas del arreglo por el segundo parametro!!!!!

        // console.log(punto);
        // console.log(casa);
        // console.log(altura);

        altura = altura.replace(/,/, ".");                  //Remplaza la coma por un punto
        let imc = peso / Math.pow(altura, 2);
        imc = imc.toFixed(2);
        const registroIMC = new Persona(imc, sexo, edad, peso, altura);

        // usuarios.push(registroIMC)
        localStorage.setItem("regImc", JSON.stringify(registroIMC));
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        window.location.href = "./pages/resultado.html";
    }

})