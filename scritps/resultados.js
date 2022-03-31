import { usuarios } from "../data/data.js";

const graficos = document.querySelector('#graficos');
const imcResultado = document.querySelector('.imc');
const pesoIdeal = document.getElementById('pesoIdeal');
const infoLocal = JSON.parse(localStorage.getItem("regImc"));
let otroUsuario = JSON.parse(localStorage.getItem("usuarios"));

const btn = document.getElementById("btnNext");
const rango = document.getElementById("rango");

usuarios.push(otroUsuario);
console.log(usuarios);

let pesoMinimo = 18.5 * Math.pow(infoLocal.height, 2);
let pesoMaximo = 24.9 * Math.pow(infoLocal.height, 2);

pesoMinimo = pesoMinimo.toFixed(2);
pesoMaximo = pesoMaximo.toFixed(2);

imcResultado.textContent = infoLocal.IMC;

rango.value = infoLocal.IMC;
pesoIdeal.textContent = `Peso ideal: ${pesoMinimo} - ${pesoMaximo} kg`



graficos.innerHTML +=`
    <div>
    <h1 class="title_grafico">Hombres / Mujeres</h1>
    <section class = "container_grafico">
        <div class="grafico2" style="background-image: conic-gradient(var(--color_hombre) 30%, var(--color_mujer) 30% 100%);"></div>
        <div class="container_leyenda">
            <span class="leyenda_all">
                <span class="color_hombre"></span>
                <p class="social"> % Hombre</p>
            </span>
            <span class="leyenda_all">
                <span class="color_mujer"></span>
                <p class="social"> % Mujer</p>
            </span>
            <p class="total">Total: </p>
        </div>
    </section>
    </div>
    <div>
    <h1 class="title_grafico">Peso / Persona</h1>
    <section class = "container_grafico">
        <div class="grafico1" style="background-image: conic-gradient(
            var(--color_bajoPeso) 40%,
            var(--color_saludable) 40% 70%,
            var(--color_exesoPeso) 70% 88%,
            var(--color_obeso)88%);"></div>
        <div class="container_leyenda">
            <span class="leyenda_all">
                <span class="color_bajoPeso"></span>
                <p class="social">% Bajo Peso</p>
            </span>
            <span class="leyenda_all">
                <span class="color_saludable"></span>
                <p class="social">% Saludable</p>
            </span>
            <span class="leyenda_all">
                <span class="color_exesoPeso"></span>
                <p class="social">% Exeso de peso</p>
            </span>
            <span class="leyenda_all">
                <span class="color_obeso"></span>
                <p class="social">% Obeso</p>
            </span>
            <p class="total">Total: </p>
        </div>
    </section>
    </div>
    </div>
`
btn.addEventListener("click",() => {
    window.location.href = "../index.html";
    localStorage.setItem("regUsuario", JSON.stringify(usuarios));
})