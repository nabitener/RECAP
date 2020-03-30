
function checMul() {

event.preventDefault();    

let radio = document.getElementsByName("mul");

for(var i; i <= radio.length; i++) {

if(radio[1].checked == true) {
    console.log("Resposta Correta");
    respostas.classList.add("correta");
} else{
    console.log("Resposta Incorreta");
    respostas.classList.add("incorreta");
}
}
}
