import { RESET_BUTTON } from "../reset.js";

const preguntas = [
  {
    pregunta: "De quin pais ets?",
    opciones: ["Catalunya nen", "Panchitolandia nen", "De l'Imperi Romà nen"],
  },
  {
    pregunta: "Quin es el teu transport preferit?",
    opciones: ["La patera nen", "El metro nen", "El buga nen"],
  },
  {
    pregunta: "Quin es el teu déu nen?",
    opciones: ["El Neng de Castefa nen", "Jisus Crist nen", "Allah nen"],
  },
  {
    pregunta: "Com portes els cabells?",
    opciones: ["No tinc pel nen", "Amb tupé de 5 metres nen", "Amb rastes nen"],
  },
  {
    pregunta: "Com pagues la teva casa?",
    opciones: ["Hipoteca nen", "Pagar? Jo l'ocupo nen", "La llogo nen"],
  },
  {
    pregunta: "A que li tens por?",
    opciones: ["A la mort nen", "Als lladres nen", "Als skinhead nen"],
  },
  {
    pregunta: "Quina es la moneda del teu país?",
    opciones: [
      "El dírham nen",
      "El Ruble nen",
      "Les pesetes nen",
    ],
  },
  {
    pregunta: "Quants naps costa una càmara nen?",
    opciones: [
      "5 quatrillions de sols peruans nen",
      "No se nen, jo les robo, nen",
      "1939 pesetes nen",
    ],
  },
  {
    pregunta: "Quina marca de roba fas servir?",
    opciones: ["Adidas nen", "Fred Perry nen", "Niqe nen"],
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
      if (respuestas[0] === "Panchitolandia nen") respuestasAcertadas++;
      if (respuestas[1] === "La patera nen") respuestasAcertadas++;
      if (respuestas[2] === "Allah nen") respuestasAcertadas++;
      if (respuestas[3] === "Amb rastes nen") respuestasAcertadas++;
      if (respuestas[4] === "Pagar? Jo l'ocupo nen") respuestasAcertadas++;
      if (respuestas[5] === "Als skinhead nen") respuestasAcertadas++;
      if (respuestas[6] === "El dírham nen") respuestasAcertadas++;
      if (respuestas[7] === "No se nen, jo les robo, nen") respuestasAcertadas++;
      if (respuestas[8] === "Niqe nen") respuestasAcertadas++;

      document.body.innerHTML = `<main><h3 class='nen-final'>🎉 Ets un  ${
        Math.floor((respuestasAcertadas / preguntas.length) * 100) + "% negre🎉"
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
