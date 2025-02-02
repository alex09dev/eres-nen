import { RESET_BUTTON } from "../reset.js";

const preguntas = [
  {
    pregunta: "Quin es el teu videojoc preferit?",
    opciones: ["El Minecraft nen", "El Fornaik nen", "El Vicyoria II nen"],
  },
  {
    pregunta: "On menjes normalment?",
    opciones: [
      "Al McDonal's nen",
      "Al Miiiis Panaas wey",
      "A la meva casa nen",
    ],
  },
  {
    pregunta: "Quin esport fas?",
    opciones: ["Bastquet nen", "Sofà nen", "Futbol nen"],
  },
  {
    pregunta: "Quentes vegades menges al dia?",
    opciones: ["4 vegades, nen", "3 vegades, nen", "∞ vegades, nen"],
  },
  {
    pregunta: "Et veus reflexat? <img src='peter.jpg' >",
    opciones: ["Si nen 😭", "No nen", "D'avegades nen"],
  },
  {
    pregunta: "Quin es el teu mengar prefetit?",
    opciones: ["Els macarrons nen", "Les hamburgueses nen", "La pizza nen"],
  },
  {
    pregunta: "com et desplaçes?",
    opciones: ["Amb el buga nen", "caminant nen", "Jo no surto de casa nen"],
  },
  {
    pregunta: "Quina beguda prefereixes?",
    opciones: ["La coca-cola nen", "L'aigua nen", "L'acuarius nen"],
  },
  {
    pregunta: "Com et dius?",
    opciones: [
      "Eustaqui nen",
      "Sergi Malbastre nen",
      "Cap de les dues es correcte nen",
    ],
  },
];

let actualQ = 0;
const respuestas = [];
function showQuestion(numero) {
  const pregunta = preguntas[numero];
  document.querySelector("button.boton-guan").innerHTML = pregunta.opciones[0];
  document.querySelector("button.boton-chu").innerHTML = pregunta.opciones[1];
  document.querySelector("button.boton-zri").innerHTML = pregunta.opciones[2];

  document.querySelector("h3").innerHTML = pregunta.pregunta;
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
      if (respuestas[0] === "El Vicyoria II nen") respuestasAcertadas++;
      if (respuestas[1] === "Al McDonal's nen") respuestasAcertadas++;
      if (respuestas[2] === "Sofà nen") respuestasAcertadas++;
      if (respuestas[3] === "∞ vegades, nen") respuestasAcertadas++;
      if (respuestas[4] === "Si nen 😭") respuestasAcertadas++;
      if (respuestas[5] === "Les hamburgueses nen") respuestasAcertadas++;
      if (respuestas[6] === "Jo no surto de casa nen") respuestasAcertadas++;
      if (respuestas[7] === "La coca-cola nen") respuestasAcertadas++;
      if (respuestas[8] === "Sergi Malbastre nen") respuestasAcertadas++;

      if (respuestas[8] === "Sergi Malbastre nen") {
        document.body.innerHTML = `<img src='guinnes.png'style="max-width: 100%; height: 600px;"/>
            ${RESET_BUTTON}
            </main>`;
      } else {
        document.body.innerHTML = `<main><h3 class='nen-final'>🎉 Estas un  ${
          Math.floor((respuestasAcertadas / preguntas.length) * 100) +
          "% gros 🎉"
        }</h3>
            ${RESET_BUTTON}
            </main>`;
      }
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
