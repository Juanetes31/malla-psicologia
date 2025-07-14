const malla = {
  "Primer año": [
    "Biología del Comportamiento", "Comunicación (Guaraní)", "Expresión Oral y Escrita (Castellano)",
    "Filosofía", "Historia de la Psicología", "Matemática", "Método de Estudio",
    "Psicología General", "Psicología Informática", "Seminario I"
  ],
  "Segundo año": [
    "Antropología Cultural", "Didáctica General", "Estadística", "Introducción a la Investigación",
    "Lógica Semántica", "Psicología Evolutiva I", "Psicología Social", "Seminario II",
    "Sociología", "Teorías del Aprendizaje"
  ],
  "Tercer año": [
    "Didáctica Especial de la Psicología", "Dinámica de Grupo", "Epistemología", "Ética",
    "Historia de los Sistemas Psicológicos", "Introducción a las Especialidades Psicológicas",
    "Lingüística y Semiótica", "Psicología de la Personalidad", "Psicología Diferencial",
    "Psicología Evolutiva II", "Psicometría General", "Seminario III"
  ],
  "Cuarto año": [
    "Consejería", "Desarrollo Interpersonal y Grupal I", "Paradigmas de la Psicología Clínica",
    "Psicohigiene", "Psiconeuroendocrinología", "Psicopatología", "Psicometría Aplicada I",
    "Seminario IV", "Técnicas y Prácticas Psicoterapéuticas I", "Teorías Psicoterapéuticas I"
  ],
  "Quinto año": [
    "Desarrollo Interpersonal y Grupal II", "Investigación en Psicología Clínica", "Psicofarmacología",
    "Psicología del Excepcional", "Psicometría Aplicada II", "Psiquiatría", "Realidad Nacional y Latinoamericana",
    "Seminario V", "Técnicas y Prácticas Psicoterapéuticas II", "Teorías Psicoterapéuticas II",
    "Trastornos Psicosomáticos"
  ]
};

const contenedor = document.getElementById("contenedor-malla");
const estado = JSON.parse(localStorage.getItem("estadoRamos")) || {};

function crearMalla() {
  Object.entries(malla).forEach(([anio, ramos]) => {
    const seccion = document.createElement("div");
    seccion.classList.add("anio");

    const titulo = document.createElement("h2");
    titulo.textContent = anio;
    seccion.appendChild(titulo);

    const grid = document.createElement("div");
    grid.classList.add("grid");

    ramos.forEach(ramo => {
      const div = document.createElement("div");
      div.classList.add("ramo");
      div.textContent = ramo;
      div.dataset.ramo = ramo;

      if (estado[ramo]) {
        div.classList.add("aprobado");
      }

      div.addEventListener("click", () => {
        div.classList.toggle("aprobado");
        estado[ramo] = div.classList.contains("aprobado");
        localStorage.setItem("estadoRamos", JSON.stringify(estado));
      });

      grid.appendChild(div);
    });

    seccion.appendChild(grid);
    contenedor.appendChild(seccion);
  });
}

crearMalla();
