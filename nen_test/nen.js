import { RESET_BUTTON } from "../reset.js";

const preguntas = [
  {
    pregunta: "Què faries a Castefa?",
    opciones: ["Vaig de festa nen", "Visitar el llocs nen", "No hi aniria"],
  },
  {
    pregunta: "Te la flipes mandunguilles?",
    opciones: ["Tot el sant dia nen", "No nen", "Depèn del dia nen"],
  },
  {
    pregunta: "Com li dius al teu cotxe?",
    opciones: ["Catxarro-mòbil nen", "Buga nen", "Terreneitor33 nen"],
  },
  {
    pregunta: "Quin és el millor pentinat?",
    opciones: ["Cap rapat nen", "Melena nen", "Se me'n fot el pentinat nen"],
  },
  {
    pregunta: "A quina hora t'aixeiques del sobre?",
    opciones: ["11:00 nen", "7:00 nen", "Quan tinc ganes de fliparme-la nen"],
  },
  {
    pregunta: "Quina es la teva verdadera vocació nen?",
    opciones: ["Ser butaner nen", "Fer calistenia nen", "Ser dijokei nen"],
  },
  {
    pregunta: "Quina es la moneda del teu país?",
    opciones: [
      "Els napos nen",
      "Els pavos del Fornaik nen",
      "Les minecoins nen",
    ],
  },
  {
    pregunta: "Quants naps costa una càmara nen?",
    opciones: [
      "33 naps nen",
      "No se nen, jo les robo, nen",
      "50 naps com a mínim nen",
    ],
  },
  {
    pregunta: "Que et beus pel matí nen?",
    opciones: ["Una tila nen", "Un cafè nen", "Una cervesa nen"],
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
      if (respuestas[0] === "Vaig de festa nen") respuestasAcertadas++;
      if (respuestas[1] === "Tot el sant dia nen") respuestasAcertadas++;
      if (respuestas[2] === "Buga nen") respuestasAcertadas++;
      if (respuestas[3] === "Cap rapat nen") respuestasAcertadas++;
      if (respuestas[4] === "7:00 nen") respuestasAcertadas++;
      if (respuestas[5] === "Ser dijokei nen") respuestasAcertadas++;
      if (respuestas[6] === "Els napos nen") respuestasAcertadas++;
      if (respuestas[7] === "50 naps com a mínim nen") respuestasAcertadas++;
      if (respuestas[8] === "Una tila nen") respuestasAcertadas++;

      document.body.innerHTML = `<main><h3 class='nen-final'>🎉 Ets un  ${
        Math.floor((respuestasAcertadas / preguntas.length) * 100) + "% nen 🎉"
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
