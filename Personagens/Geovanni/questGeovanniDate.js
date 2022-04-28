function startQuestGe() {
    var escolhaUmGe=prompt ("Geovanni estava indo para um date, e estava em dúvida se iria de carro ou de metrô. Como Geovanni deve ir?\n1- carro\n2- metrô");

    if (escolhaUmGe==1) {
        window.location.href="./questGeovanniCarro.html";
    } else if (escolhaUmGe == 2) {
        alert ("Geovanni decide ir de metrô pois assim não dependeria do trânsito, reduziria as chances de atraso e poderia economizar uma grana e beber um pouco mais, ele consegue chegar na hora do encontro, e se diverte muito comendo e bebendo bem.\n\n\nPARABÉNS VOCÊ AJUDOU UM LAXCADO!");
        var deNovoGe;
        while (deNovoGe != 1 && deNovoGe != 2) {
            deNovoGe = prompt ("Tentar novamente? Digite:\n1-sim\n2-não");
            if(deNovoGe==1){
                window.location.href="../indexPersonagens.html";
            }else if(deNovoGe ==2){
                window.location.href="../../index.html";
            } else {
                alert ("Essa opção não é válida, tente novamente.");
            }
        }
    } else {
        alert ("Essa opção não é válida, tente novamente.");
    }
}

var botaoComecarQuestGe = document.getElementById("botaoComecarQuestGe");
botaoComecarQuestGe.onclick = startQuestGe;