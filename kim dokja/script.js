// Simulación de una API con datos JSON
const apiKimDokja = {
  resumen: "Kim Dokja es un lector empedernido y estratega nato, protagonista de 'Omniscient Reader's Viewpoint'. Tras años leyendo una sola novela, su vida cambia cuando la historia cobra vida. Con mente analítica, liderazgo natural y una voluntad férrea, Dokja aprende a sobrevivir en un mundo gobernado por constelaciones y escenarios.",
  
  datos: {
    nombre: "Kim Dokja",
    edad: "28 años",
    nacionalidad: "Coreano",
    profesión: "Analista de estrategias y narrador",
    correo: "kimdokja@orvverse.com"
  },

  habilidades: [
    "Análisis de situaciones complejas",
    "Toma de decisiones bajo presión",
    "Lectura veloz y comprensión profunda",
    "Liderazgo y planificación táctica",
    "Adaptabilidad en entornos hostiles"
  ]
};

// Mostrar datos en el HTML
document.getElementById("resumen").textContent = apiKimDokja.resumen;

const datosList = document.getElementById("datos");
for (const [key, value] of Object.entries(apiKimDokja.datos)) {
  const li = document.createElement("li");
  li.textContent = `${key}: ${value}`;
  datosList.appendChild(li);
}

const habilidadesList = document.getElementById("habilidades");
apiKimDokja.habilidades.forEach(hab => {
  const li = document.createElement("li");
  li.textContent = hab;
  habilidadesList.appendChild(li);
});

// (API accesible por consola)
console.log("API Kim Dokja:", apiKimDokja);
