import { RESET_BUTTON } from "../reset.js"

const preguntas = [
    {
        pregunta: "Quin és el millor país del món?",
        opciones: ["Catalunya nen", "Espanya nen", "L'Imperi Espanyol nen!"],
    },
    {
        pregunta: "Quina és la millor forma de govern?",
        opciones: ["Que torni el caudillo nen!!", "Democràcia nen", "El comunisme nen"],
    },
    {
        pregunta: "Quina és la millor eina?",
        opciones: ["La falç nen", "El fusil", "L'Ak-47"],
    },
    {
        pregunta: "Com ha de portar el cabell un home de bé?",
        opciones: ["Cap rapat nen", "Tupé nen", "Com el MVP (Hitler) nen"],
    },
    {
        pregunta: "Quin és el monument més feixista?",
        opciones: ["La Sagrada Família nen", "El Vall dels Caiguts nen", "La Mesquita de Còrdova"],
        
    },
    {
        pregunta: "Quina raça és inferior a tú?",
        opciones: ["Els negres d'Àfrica nen", "Tots som iguals nen", "Totes nen"],
        
    },
    {
        pregunta: "Quin idioma es parla a Itàlia?",
        opciones: ["Són tribus indígines (no saben parlar)", "Espanyol nen", "Italià nen"],
        
    },
    {
        pregunta: "Quant costa una càmara nen?",
        opciones: ["1945 euros nen", "Un trilió de pesos bolivians nen", "50 pesetes com a mínim nen"],
        
    },
    {
        pregunta: "Has entés totes les preguntes nen?",
        opciones: ["No sé llegir nen", "A la perfecció", "No entenc l'anglés nen"]

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
            nombrePreg()
            
        }
        else {
            let respuestasAcertadas = 0
            if (respuestas[0] === "L'Imperi Espanyol nen!") respuestasAcertadas++
            if (respuestas[1] === "Que torni el caudillo nen!!") respuestasAcertadas++
            if (respuestas[2] === "El fusil") respuestasAcertadas++
            if (respuestas[3] === "Cap rapat nen") respuestasAcertadas++
            if (respuestas[4] === "El Vall dels Caiguts nen") respuestasAcertadas++
            if (respuestas[5] === "Totes nen") respuestasAcertadas++
            if (respuestas[6] === "Espanyol nen") respuestasAcertadas++
            if (respuestas[7] === "50 pesetes com a mínim nen") respuestasAcertadas++
            if (respuestas[8] === "No entenc l'anglés nen") respuestasAcertadas++
            
            document.body.innerHTML = `<main><h3 class='nen-final'>🎉 Ets un  ${Math.floor(respuestasAcertadas/preguntas.length*100) +"% facha 🎉"}</h3>
            ${RESET_BUTTON}
            </main>` 

        } 
    }
})

function nombrePreg(){
    document.querySelector(".numerin").innerText= actualQ+1
}

