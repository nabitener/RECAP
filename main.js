let usuario = window.prompt("Seja Bem-vindo! Digite seu nome para começar o jogo:");
let divUm = document.getElementById("nome");
divUm.innerHTML = "Olá " + usuario;



function jogoA()
{
location.href="index_1.html"
}

function jogoB()
{
    location.href="index_2.html"
}



  /*  let segundo = window.prompt("Questão 2 \nQual a cor do meu gato preto? \nA. Branco \nB. Amarelo \nC. Preto")
    let segundoUpper = segundo.toUpperCase()
    if (segundoUpper == "C") {
        let divQuatro = document.getElementById("corretas-dois")
        divQuatro.innerHTML = "Questão 2"

    } else {
        let divCinco = document.getElementById("incorretas-dois")
        divCinco.innerHTML = "Questão 2"
    }

    let terceiro = window.prompt("Questão 3 \nQuanto é 4 + 2? \nA. 6 \nB. 7 \nC. 8")
    let terceiroUpper = terceiro.toUpperCase()
    if (terceiroUpper == "A") {
        let divSeis = document.getElementById("corretas-tres")
        divSeis.innerHTML = "Questão 3"

    } else {
        let divSete = document.getElementById("incorretas-tres")
        divSete.innerHTML = "Questão 3"
    } 
   else {
    alert("Prova Cancelada")
    document.location.reload(true);
}*/