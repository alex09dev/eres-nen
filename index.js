const preguntas = [
    {
        pregunta: "Què faries a Castefa?",
        opciones: ["Vaig de festa nen", "Visitar el llocs nen", "Matar negres nen"],
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
        opciones: ["Els napos nen", "Els pavos del Fornaik nen", "Les minecoins nen"],
        
    },
    {
        pregunta: "Quants naps costa una càmara (por lo menos nen) nen?",
        opciones: ["33 naps nen", "No se nen, jo les robo, nen", "50 naps com a mínim nen"],
        
    }

]

let actualQ = 0
const respuestas = []
 function showQuestion(numero){
    const pregunta = preguntas[numero]
    document.querySelector("button.boton-guan").innerText = pregunta.opciones[0]
    document.querySelector("button.boton-chu").innerText = pregunta.opciones[1]
    document.querySelector("button.boton-zri").innerText = pregunta.opciones[2]

    document.querySelector("h3").innerText = pregunta.pregunta
 }
showQuestion(actualQ)

document.querySelectorAll("button").forEach(function(element){
    element.onclick = function(){
        respuestas.push(element.innerText)
        actualQ++
        if (actualQ < preguntas.length){
            showQuestion(actualQ)
            
        }
        else {
            let respuestasAcertadas = 0
            if (respuestas[0] === "Vaig de festa nen") respuestasAcertadas++
            if (respuestas[1] === "Tot el sant dia nen") respuestasAcertadas++
            if (respuestas[2] === "Buga nen") respuestasAcertadas++
            if (respuestas[3] === "Cap rapat nen 😡") respuestasAcertadas++
            if (respuestas[4] === "7:00 nen") respuestasAcertadas++
            if (respuestas[5] === "Ser dijokei nen") respuestasAcertadas++
            if (respuestas[6] === "Els napos nen") respuestasAcertadas++
            if (respuestas[7] === "50 naps com a mínim nen") respuestasAcertadas++
            
            document.body.innerHTML = "<h3>Ets un "+ Math.floor(respuestasAcertadas/preguntas.length*100) +"% nen!</h3>" 

        }
    }
})


