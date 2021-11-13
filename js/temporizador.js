var cronometroInterface = document.querySelector("#cronometro");
var interfaceRelogio = document.querySelector("#relogio");
var interfaceTemporizador = document.getElementById("temporizador");
var abrirTemporizador = document.querySelector("#abrirTemporizador");
var abrirRelogio = document.querySelector("#abrirRelogio");
var abrirCronometro = document.querySelector("#abrirCronometro");
abrirTemporizador.addEventListener("click", mostrarInterface);

abrirRelogio.addEventListener("click", mostrarInterface);
abrirRelogio.addEventListener("click", mostrarInterface);
abrirTemporizador.addEventListener("click", mostrarInterface);

function mostrarInterface() {
   if(this.id == "abrirTemporizador") {
        cronometroInterface.style.display = "none";
        interfaceTemporizador.style.display = "block";
        interfaceRelogio.style.display = "none";
    }
}