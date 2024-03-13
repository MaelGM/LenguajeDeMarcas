var fotos = ["./../IMG/d1.png","./../IMG/d2.png","./../IMG/d3.png","./../IMG/d4.png","./../IMG/d5.png","./../IMG/d6.png"];
var dadosJ1 = document.querySelectorAll(".dadosJugador1");
var dadosJ2 = document.querySelectorAll(".dadosJugador2");
var boton = document.getElementById("boton");
var resultados = document.getElementById("Resultados");
var marcador = document.getElementById("marcador");
var sumaJ2 = 0, sumaJ1 = 0, victoriasJ1 = 0, victoriasJ2 = 0, numTiradas = 3;

boton.addEventListener("click", function reproducir(){
    numTiradas--;
    sumaJ1 = 0;
    sumaJ2 = 0;
    for (var i = 0; i < 10; i++) {
        dadosJ1[i].style.display = "none";
        dadosJ2[i].style.display = "none";
    }
    
    var numdados1 = parseInt(document.getElementById("player1").value);
    var numdados2 = parseInt(document.getElementById("player2").value);
    for (var i = 0; i < numdados1; i++) {
        var numAleatorio = Math.floor(Math.random()*5)+1;
        dadosJ1[i].src = fotos[numAleatorio];
        dadosJ1[i].style.display = "block";
        sumarDadosJ1(numAleatorio);
    }
    for (var i = 0; i < numdados2; i++) {
        var numAleatorio = Math.floor(Math.random()*5)+1;
        dadosJ2[i].src = fotos[numAleatorio];
        dadosJ2[i].style.display = "block";
        sumarDadosJ2(numAleatorio);
    }
    resultados.innerHTML = sumaJ1 + " - "+ sumaJ2;
    victorias(sumaJ1, sumaJ2);
    boton.innerHTML = "TIRADAS RESTANTES: "+numTiradas;
    if(numTiradas == 0) {
        imprimirGanador();
        boton.removeEventListener("click"); // No me acuerdo
    }
});

function sumarDadosJ1(numAleatorio){
    if(numAleatorio == 0) sumaJ1 += 1;
    else if(numAleatorio == 1) sumaJ1 += 2;
    else if(numAleatorio == 2) sumaJ1 += 3;
    else if(numAleatorio == 3) sumaJ1 += 4;
    else if(numAleatorio == 4) sumaJ1 += 5;
    else if(numAleatorio == 5) sumaJ1 += 6;
}

function sumarDadosJ2(numAleatorio){
    if(numAleatorio == 0) sumaJ2 += 1;
    else if(numAleatorio == 1) sumaJ2 += 2;
    else if(numAleatorio == 2) sumaJ2 += 3;
    else if(numAleatorio == 3) sumaJ2 += 4;
    else if(numAleatorio == 4) sumaJ2 += 5;
    else if(numAleatorio == 5) sumaJ2 += 6;
}

function victorias(){
    if(sumaJ1 > sumaJ2) {
        victoriasJ1++;
        marcador.innerHTML = victoriasJ1 + " vs "+victoriasJ2;
    }else if(sumaJ1 < sumaJ1){
        victoriasJ2++;
        marcador.innerHTML = victoriasJ1 + " vs "+victoriasJ2;
    }else {
        victoriasJ1++;
        victoriasJ2++;
        marcador.innerHTML = victoriasJ1 + " vs "+victoriasJ2;
    }
}

function imprimirGanador(){
    var ganador = document.getElementById("ganador");
    if(victoriasJ1 > victoriasJ2) ganador.innerHTML = "GANADOR: Jugador1";
    else if(victoriasJ1 < victoriasJ2) ganador.innerHTML = "GANADOR: Jugador2";
    else ganador.innerHTML = "EMPATE";
}