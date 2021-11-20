var cronometroInterface = document.querySelector("#cronometro");
var interfaceRelogio = document.querySelector("#relogio");
var interfaceTemporizador = document.getElementById("temporizador");
var abrirTemporizador = document.querySelector("#abrirTemporizador");
var abrirRelogio = document.querySelector("#abrirRelogio");
var abrirCronometro = document.querySelector("#abrirCronometro");

abrirTemporizador.addEventListener("click", mostrarInterface);

function mostrarInterface() {
   if(this.id == "abrirTemporizador") {
        cronometroInterface.style.display = "none";
        interfaceTemporizador.style.display = "block";
        interfaceRelogio.style.display = "none";
    }
}

var horaInput = document.querySelector("#valorHora");
var minutoInput = document.querySelector("#valorMinuto"); 
var segundoInput = document.querySelector("#valorSegundo");


var iniciarTemporizador = document.querySelector("#iniciarTemporizador");
var pausarTemporizador = document.querySelector("#pausarTemporizador");
var pararTemporizador = document.querySelector("#pararTemporizador");


iniciarTemporizador.addEventListener("click", temporizador);

var temp; 


function temporizador() {
    pausarTemporizador.style.display = "block";
    pararTemporizador.style.display = "block";

    temporizador = setInterval(() => {
        let horas = Number(hora.value), minutos = Number(minuto.value), segundos = Number(segundo.value);
       if(horas > 0) {
           segundos--;
           if(segundos == 0) {
               segundos = 60;
               minutos--;
               if(minutos == 0) {
                   horas--;
               }
           }
       }
    }, 1000);
}