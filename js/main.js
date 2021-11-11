var hora = 0, minuto = 0, segundo = 0, milissegundo = 0;
var hr = document.querySelector("#hr");
var min = document.querySelector("#min");
var seg = document.querySelector("#seg");
var ms = document.querySelector("#ms");
var iniciar = document.querySelector("#iniciar");
var pausar = document.querySelector("#pausar");

let cronometro;


iniciar.addEventListener("click", iniciarCronometro);
pausar.addEventListener("click", pausarCronometro);
parar.addEventListener("click", pararCronometro);



function iniciarCronometro() {
    pausar.style.display = "block";
    parar.style.display = "block";

    cronMs = setInterval(() => {
        milissegundo += 10;
        if(milissegundo == 1000) {
            milissegundo = 0;
        }
        ms.innerHTML = `${(milissegundo/10).toFixed(0)}`;
    }, 10) 

    cronometro = setInterval(() => {
        
        segundo++;
        if(segundo == 60) {
            segundo = 0;
            minuto++;
            if(minuto == 60) {
                minuto = 0;
                hora++;
            }
        }
        
        //ms.innerHTML = `${milissegundo}`;
        if(segundo < 10) {
            seg.innerHTML = `0${segundo}`;
        } else {
            seg.innerHTML = `${segundo}`;
        }
        if(minuto < 10) {
            min.innerHTML = `0${minuto}`;
        } else {
            min.innerHTML = `${minuto}`;
        }
            
        if(hora < 10) {
            hr.innerHTML = `0${hora}`;
        } else {
            hr.innerHTML = `${hora}`;
        }
    }, 1000);
    
}     


function pausarCronometro() {
    clearInterval(cronometro);
    clearInterval(cronMs);
}

function pararCronometro() {
    clearInterval(cronometro);
    clearInterval(cronMs);
    segundo = 0, minuto = 0, hora = 0, milissegundo = 0;
    pausar.style.display = "none";
    parar.style.display = "none";  
    hr.innerHTML = "00"; 
    min.innerHTML = "00"; 
    seg.innerHTML = "00"; 
    ms.innerHTML = "00";   
}