var abrirRelogio = document.querySelector("#abrirRelogio");
var horaRelogio = document.querySelector("#horaRelogio");
var interfaceRelogio = document.querySelector("#relogio");
var infoHora = document.getElementById("infoHora");
var interfaceTemporizador = document.getElementById("temporizador");
var cronometroInterface = document.querySelector("#cronometro");
var interfaceRelogio = document.querySelector("#relogio");

var exibirHora = setInterval(mostrarHora, 1000);

abrirRelogio.addEventListener("click", mostrarInterface);

function mostrarHora() {
    var date = new Date();
    horaRelogio.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    infoHora.innerHTML = `${String(date).slice(24, 33)}`;
}

function mostrarInterface() {
     if(this.id == "abrirRelogio") {
        cronometroInterface.style.display = "none";
        interfaceTemporizador.style.display = "none";
        interfaceRelogio.style.display = "block";
    }
}
