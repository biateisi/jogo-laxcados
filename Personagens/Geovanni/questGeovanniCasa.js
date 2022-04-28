function startQuestTresGe() {
    var escolhaTresGe=prompt ("O reboque custou R$300, Geovanni ainda tem R$200, Geovanni chega em casa frustrado e não sabe o que fazer:\n1-Tenta o date em casa\n2-Fica sozinho");

    if (escolhaTresGe==1) {
        alert ("Ele liga para a pessoa do date, explica tudo que aconteceu e a convida para assistir uma série em casa. A pessoa aceitou e Geovanni conseguiu o date e ainda economizou uma graninha.\n\n\nPARABÉNS VOCÊ AJUDOU UM LAXCADO!");
        end();
    } else if (escolhaTresGe == 2) {
        alert ("Ele pede cerveja pelo aplicativo e assiste videos de lock picking até dormir. Quando acorda, Geovanni vê que gastou R$200 em cerveja e ficou sem nenhum tostão.\n\n\nGEOVANNI SE LAXCOU!");
        end();
    } else {
        alert ("Essa opção não é válida, tente novamente.");
    }
}

var botaoComecarQuestTresGe = document.getElementById("botaoComecarQuestTresGe");
botaoComecarQuestTresGe.onclick = startQuestTresGe;

function end() {
    var deNovoJobGe;
    while (deNovoJobGe != 1 && deNovoJobGe != 2) {
        deNovoJobGe = prompt ("Tentar novamente? Digite:\n1-sim\n2-não");
        if(deNovoJobGe==1){
            window.location.href="../indexPersonagens.html";
        }else if(deNovoJobGe==2){
            window.location.href="../../index.html";
        } else {
            alert ("Essa opção não é válida, tente novamente.");
        }
    }
}