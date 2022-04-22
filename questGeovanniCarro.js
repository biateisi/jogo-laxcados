function startQuestDoisGe() {
    var escolhaDoisGe=prompt ("Geovanni decide ir de carro, pela maior comodidade, e na metade do caminho o carro quebra, ele precisa decidir se chama o reboque ou se continua no caminho pro date:\n1-reboque\n2-date");

    if (escolhaDoisGe==1) {
        window.location.href="./questGeovanniCasa.html";
    } else if (escolhaDoisGe == 2) {
        alert ("Geovanni deixa o carro numa calçada e vai pro date de ônibus. O Carro é rebocado pela prefeitura e Geovanni precisa pagar uma multa de R$500, mas ele gastou R$200 no date!\n\n\n GEOVANNI SE LAXCOU!");
        var deNovoGe;
        while (deNovoGe != 1 && deNovoGe != 2) {
            deNovoGe = prompt ("Tentar novamente? Digite:\n1-sim\n2-não");
            if(deNovoGe==1){
                window.location.href="./indexPersonagens.html";
            }else if(deNovoGe ==2){
                window.location.href="./index.html";
            } else {
                alert ("Essa opção não é válida, tente novamente.");
            }
        }
    } else {
        alert ("Essa opção não é válida, tente novamente.");
    }
}

var botaoComecarQuestDoisGe = document.getElementById("botaoComecarQuestDoisGe");
botaoComecarQuestDoisGe.onclick = startQuestDoisGe;