function start() {
    var comecar=prompt ("Você quer jogar?\n1-sim\n2-não");

    if (comecar==1){
        window.location.href="./cardLaxcados.html";
    } else if
        (comecar == 2){
        alert("Parabéns você perdeu a oportunidade de salvar um laxcado!");
    } else {
        alert("Essa opção não foi encontrada, tente novamente.");
    }
}

var botaoComecar = document.getElementById("botaoComecar");
botaoComecar.onclick = start;