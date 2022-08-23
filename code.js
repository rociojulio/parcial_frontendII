/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

  datosPersona.nombre = prompt("Ingresa tu nombre");

  datosPersona.edad = parseInt(prompt("Ingresa el año en que naciste"));
  while (isNaN(datosPersona.edad)) {
    datosPersona.edad = prompt("Ingresa un año correcto");
  }

  datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");

  datosPersona.interesPorJs = confirm("¿Te interesa JavaScript?");
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const nombre = document.querySelector("#nombre");
  nombre.innerHTML = datosPersona.nombre;

  const edad = document.querySelector("#edad");
  edad.innerHTML = 2022 - datosPersona.edad;

  const ciudad = document.querySelector("#ciudad");
  ciudad.innerHTML = datosPersona.ciudad;

  const interesJs = document.querySelector("#javascript");
  if (datosPersona.interesPorJs) {
    interesJs.innerHTML = "Sí";
  } else {
    interesJs.innerHTML = "No";
  }
}

let contador = 0;
function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  if (contador == 0) {
    const todosLosItems = [];
    const fila = document.querySelector("#fila");
    listado.forEach((item) => {
      const container = document.createElement("div");
      container.className = "caja";

      const imagen = document.createElement("img");
      imagen.src = item.imgUrl;
      imagen.alt = item.lenguajes;

      const parrafoLenguajes = document.createElement("p");
      parrafoLenguajes.className = "lenguajes";
      parrafoLenguajes.innerText = "Lenguaje: " + item.lenguajes;

      const parrafoBimestre = document.createElement("p");
      parrafoBimestre.className = "bimestre";
      parrafoBimestre.innerText = "Bimestre: " + item.bimestre;

      container.append(imagen, parrafoLenguajes, parrafoBimestre);
      todosLosItems.push(container);
      fila.appendChild(container);

      contador++;
    });
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const sitio = document.querySelector("#sitio");
  sitio.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
const aparecer = document.getElementById("sobre-mi");
window.addEventListener("keypress", (e) => {
  if (e.key == "f") {
    aparecer.classList.remove("oculto");
  }
});
