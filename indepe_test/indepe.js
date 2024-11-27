import { RESET_BUTTON } from "../reset.js";

const preguntas = [
  {
    pregunta: "Catalunya és una nació?",
    opciones: ["Encara no nen", "No, ni ho serà mai nen", "Si que ho és nen"],
  },
  {
    pregunta: "Quin idioma parles habitualment?",
    opciones: ["Euskaraz hitz egiten dut umea", "El català nen", "Hablo castellano nen"],
  },
  {
    pregunta: "Quin es el teu menjar preferit?",
    opciones: ["Sopa de galets nen", "Tortilla de patates nen", "Fideuà"],
  },
  {
    pregunta: "Quina bandera representa el teu país?",
    opciones: ["La estelada nen", "La senyera nen", "La d'Espanya nen"],
  },
  {
    pregunta: "Quin estil de ball prefereixes?",
    opciones: ["La salsa nen", "El flamenc nen", "Les sardanes nen"],
  },
  {
    pregunta: "Quin grup musical es mijor?",
    opciones: ["Els catarres nen", "Estopa nen", "Nirvana nen"],
  },
  {
    pregunta: "Quina ideologia es mijor?",
    opciones: [
      "La monarquía nen",
      "La republica nen",
      "Cap de les dues, sóc anarquista nen",
    ],
  },
  {
    pregunta: "De quin equip de futbol ets?",
    opciones: [
      "Del barça nen",
      "Del madrid nen",
      "No m'agrada el futbol nen",
    ],
  },
  {
    pregunta: "Quan és el dia nacional?",
    opciones: ["4 de decembre", "12 de octubre nen", "11 de septembre nen"],
  },
];

let actualQ = 0;
const respuestas = [];
function showQuestion(numero) {
  const pregunta = preguntas[numero];
  document.querySelector("button.boton-guan").innerText = pregunta.opciones[0];
  document.querySelector("button.boton-chu").innerText = pregunta.opciones[1];
  document.querySelector("button.boton-zri").innerText = pregunta.opciones[2];

  document.querySelector("h3").innerText = pregunta.pregunta;
}
showQuestion(actualQ);

document.querySelectorAll("button").forEach(function (element) {
  element.onclick = function () {
    respuestas.push(element.innerText);
    actualQ++;
    if (actualQ < preguntas.length) {
      showQuestion(actualQ);
      nombrePreg();
    } else {
      let respuestasAcertadas = 0;
      if (respuestas[0] === "Si que ho és nen") respuestasAcertadas++;
      if (respuestas[1] === "El català nen") respuestasAcertadas++;
      if (respuestas[2] === "Sopa de galets nen") respuestasAcertadas++;
      if (respuestas[3] === "La senyera nen") respuestasAcertadas++;
      if (respuestas[4] === "Les sardanes nen") respuestasAcertadas++;
      if (respuestas[5] === "Els catarres nen") respuestasAcertadas++;
      if (respuestas[6] === "La republica nen") respuestasAcertadas++;
      if (respuestas[7] === "Del barça nen") respuestasAcertadas++;
      if (respuestas[8] === "11 de septembre nen") respuestasAcertadas++;

      document.body.innerHTML = `<main><h3 class='nen-final'>🎉 Ets un  ${
        Math.floor((respuestasAcertadas / preguntas.length) * 100) + "% indepe 🎉"
      }</h3>
            ${RESET_BUTTON}
            </main>`;
      createConfetti();
    }
  };
});

function nombrePreg() {
  document.querySelector(".numerin").innerText = actualQ + 1;
}

function createConfetti(char = "🎊") {
  var scalar = 3;

  var pineapple = confetti.shapeFromText({ text: char, scalar });

  confetti({
    shapes: [pineapple],
    scalar,
    spread: 200,
    particleCount: 30,
    startVelocity: 35,
  });
}
