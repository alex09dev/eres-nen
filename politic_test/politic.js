import { RESET_BUTTON } from "../reset.js";

let right = 0;
let prog = 0;
let auth = 0;

const questions = [
  {
    id: 0,
    question:
      "La llibertat de negoci és la millor manera pràctica perquè una societat prosperi.",
    effects: { right: 1 },
  },
  {
    id: 1,
    question:
      "La caritat és una millor manera d’ajudar els necessitats que el benestar social.",
    effects: { right: 1 },
  },
  {
    id: 2,
    question:
      "Els salaris sempre són justos, ja que els empresaris saben millor quant val la feina d’un treballador.",
    effects: { right: 1 },
  },
  {
    id: 3,
    question: 'És "naturalesa humana" ser cobdiciós.',
    effects: { right: 1 },
  },
  {
    id: 4,
    question:
      '"Explotació" és un terme antiquat, ja que les lluites del capitalisme del segle XIX ja no existeixen.',
    effects: { right: 1 },
  },
  {
    id: 5,
    question: "El comunisme és un ideal que mai podrà funcionar a la pràctica.",
    effects: { right: 1 },
  },
  {
    id: 6,
    question:
      "Imposar impostos als rics és una mala idea, la societat estaria millor sense això.",
    effects: { right: 1 },
  },
  {
    id: 7,
    question: "Com més treballes, més avances en l’escala social.",
    effects: { right: 1 },
  },
  {
    id: 8,
    question:
      "Les organitzacions i corporacions no són de fiar i necessiten ser regulades pel govern.",
    effects: { right: -1 },
  },
  {
    id: 9,
    question:
      "Un govern que proveeix per a tothom és una idea inherentment bona.",
    effects: { right: -1 },
  },
  {
    id: 10,
    question:
      "El sistema de benestar actual hauria d’ampliar-se per combatre encara més la desigualtat.",
    effects: { right: -1 },
  },
  {
    id: 11,
    question:
      "La terra no hauria de ser una mercaderia que es pugui comprar i vendre.",
    effects: { right: -1 },
  },
  {
    id: 12,
    question: "Tota la indústria i els bancs haurien de ser nacionalitzats.",
    effects: { right: -1 },
  },
  {
    id: 13,
    question: "La classe és la divisió principal de la societat.",
    effects: { right: -1 },
  },
  {
    id: 14,
    question: "La desigualtat econòmica és massa alta al món.",
    effects: { right: -1 },
  },
  {
    id: 15,
    question:
      "De vegades és correcte que el govern pugui espiar els seus ciutadans per combatre extremistes i terroristes.",
    effects: { auth: 1 },
  },
  {
    id: 16,
    question:
      "Les figures d’autoritat, si són moralment correctes, són una bona cosa per a la societat.",
    effects: { auth: 1 },
  },
  {
    id: 17,
    question: "La força és necessària perquè qualsevol govern tingui èxit.",
    effects: { auth: 1 },
  },
  {
    id: 18,
    question:
      "Només el govern pot regular organitzacions de manera justa i efectiva.",
    effects: { auth: 1 },
  },
  {
    id: 19,
    question: "La societat necessita estructura i burocràcia per funcionar.",
    effects: { auth: 1 },
  },
  {
    id: 20,
    question:
      "Els documents d’identificació obligatoris haurien d’usar-se per garantir la seguretat pública.",
    effects: { auth: 1 },
  },
  {
    id: 21,
    question:
      "En temps de crisi, la seguretat es torna més important que les llibertats civils.",
    effects: { auth: 1 },
  },
  {
    id: 22,
    question: "Si no tens res a amagar, no tens res a témer.",
    effects: { auth: 1 },
  },
  {
    id: 23,
    question:
      "El govern hauria d’estar menys involucrat en el dia a dia dels seus ciutadans.",
    effects: { auth: -1 },
  },
  {
    id: 24,
    question: "Sense democràcia, una societat no és res.",
    effects: { auth: -1 },
  },
  {
    id: 25,
    question: "La nul·lificació del jurat hauria de ser legal.",
    effects: { auth: -1 },
  },
  {
    id: 26,
    question: "Com més petit sigui el govern, més lliure serà la gent.",
    effects: { auth: -1 },
  },
  {
    id: 27,
    question:
      "El govern només hauria de proporcionar serveis d’emergència i forces de seguretat.",
    effects: { auth: -1 },
  },
  {
    id: 28,
    question:
      "La policia no es va crear per protegir la gent, sinó per mantenir l’statu quo per la força.",
    effects: { auth: -1 },
  },
  {
    id: 29,
    question:
      "Les escoles públiques són una mala idea perquè l’estat no hauria d’influir en els nostres fills.",
    effects: { auth: -1 },
  },
  {
    id: 30,
    question:
      "Dues persones adultes haurien de poder fer el que volguessin l’una amb l’altra, encara que em resulti incòmode.",
    effects: { prog: 1 },
  },
  {
    id: 31,
    question:
      "El cos d’una persona és la seva propietat, i hauria de poder fer-hi el que desitgés.",
    effects: { prog: 1 },
  },
  {
    id: 32,
    question: "Una persona hauria de poder adorar qui o el que vulgui.",
    effects: { prog: 1 },
  },
  {
    id: 33,
    question: "El nudisme és perfectament natural.",
    effects: { prog: 1 },
  },
  {
    id: 34,
    question: "Els animals mereixen certs drets universals.",
    effects: { prog: 1 },
  },
  {
    id: 35,
    question:
      "El gènere és una construcció social, no un estat natural de les coses.",
    effects: { prog: 1 },
  },
  {
    id: 36,
    question:
      "Les lleis basades en valors culturals, en lloc de valors ètics, no són justícia.",
    effects: { prog: 1 },
  },
  {
    id: 37,
    question:
      "L’autonomia corporal s’hauria d’aplicar fins i tot a menors, persones amb malalties mentals i criminals greus.",
    effects: { prog: 1 },
  },
  {
    id: 38,
    question: "L’homosexualitat va en contra dels meus valors.",
    effects: { prog: -1 },
  },
  {
    id: 39,
    question: "Les persones transgènere no haurien de poder adoptar infants.",
    effects: { prog: -1 },
  },
  {
    id: 40,
    question: "Les drogues són nocives i haurien d’estar prohibides.",
    effects: { prog: -1 },
  },
  {
    id: 41,
    question: "La pena de mort hauria d’existir per a certs crims.",
    effects: { prog: -1 },
  },
  {
    id: 42,
    question: "Els crims sense víctimes encara haurien de ser castigats.",
    effects: { prog: -1 },
  },
  {
    id: 43,
    question: "No es pot ser moral sense religió.",
    effects: { prog: -1 },
  },
  {
    id: 44,
    question:
      "Els pares haurien de tenir poder absolut sobre els seus fills, ja que són més grans i experimentats.",
    effects: { prog: -1 },
  },
  {
    id: 45,
    question: "El multiculturalisme és dolent.",
    effects: { prog: -1 },
  },
];

let actualQ = 0;
const respuestas = [];
function showQuestion(numero) {
  const pregunta = questions[numero];

  document.querySelector("h3").innerText = pregunta.question;
}
showQuestion(actualQ);

document.querySelectorAll("button").forEach(function (element) {
  element.onclick = function () {
    const option = element.innerText;
    if (option === "D'acord") {
      if (questions[actualQ].effects.right != undefined) {
        right += questions[actualQ].effects.right;
      } else if (questions[actualQ].effects.prog != undefined) {
        prog += questions[actualQ].effects.prog;
      } else if (questions[actualQ].effects.auth != undefined) {
        auth += questions[actualQ].effects.auth;
      }
    } else if (option === "Desacord") {
      if (questions[actualQ].effects.right != undefined) {
        right -= questions[actualQ].effects.right;
      } else if (questions[actualQ].effects.prog != undefined) {
        prog -= questions[actualQ].effects.prog;
      } else if (questions[actualQ].effects.auth != undefined) {
        auth -= questions[actualQ].effects.auth;
      }
    }

    console.log(right, prog, auth);
    actualQ++;
    if (actualQ < questions.length) {
      showQuestion(actualQ);
      nombrePreg();
    } else {
      const x_axis = Math.round(right/10*20/3)
      const y_axis = Math.round(auth/10*20/3)
      document.body.innerHTML = '<img src="" id="banner"></canvas>';
      var background = new Image();
      background.onload = function () {
        var c = document.createElement("canvas");
        c.width = 1850;
        c.height = 1600;
        var ctx = c.getContext("2d");
        ctx.fillStyle = "#EEEEEE";
        ctx.fillRect(0, 0, 1850, 1600);
        ctx.drawImage(background, 0, 0);

        var dot = c.getContext("2d");
        dot.beginPath();
        dot.arc(
          200 + (1000 * (x_axis + 10)) / 20,
          1150 - (1000 * (y_axis + 10)) / 20,
          25,
          0,
          2 * Math.PI
        );
        dot.fillStyle = "red";
        dot.fill();
        dot.stroke();

        var line = c.getContext("2d");
        line.beginPath();
        line.moveTo(1500, 1145 - (1000 * (prog + 10)) / 20);
        line.lineTo(1650, 1145 - (1000 * (prog + 10)) / 20);
        line.lineWidth = 10;
        line.strokeStyle = "red";
        line.stroke();

        ctx.font = "50px Montserrat";
        ctx.textAlign = "center";
        ctx.fillStyle = "#222222";
        ctx.fillText("Left / Right Axis (x): " + x_axis, 725, 1375);
        ctx.fillText("Auth / Lib Axis (y): " + y_axis, 725, 1450);
        ctx.fillText("Prog / Con Axis (z): " + prog, 725, 1525);
        ctx.textAlign = "right";
        ctx.font = "60px Montserrat";
        ctx.fillText("SapplyValues.github.io", 1820, 1560);

        document.getElementById("banner").src = c.toDataURL();
      };
      background.src = "./compass.png";

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
