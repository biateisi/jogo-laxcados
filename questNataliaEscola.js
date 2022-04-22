function startQuestNat() {
    var escolhaUmNat=prompt ("Natalia acordou muito cansada e quando olhou a hora viu que estava muito atrasada para as atividades do dia. Quando foi acordar o filho, ele a avisou que teria uma reunião de pais e mestres na escola. Mas Natalia não se programou e a reunião impacta no seu horário de trabalho já que ela não avisou ao chefe.\nNatalia vai para a reunião?\n1-sim\n2-não");

    if (escolhaUmNat==1) {
        window.location.href="./questNataliaTrabalho.html";
    } else if (escolhaUmNat == 2) {
        alert ("Natalia chega na hora no trabalho e realiza todas as atividades do dia. A reunião que ela perdeu era sobre o desempenho do filho na escola, e como ela não soube disso ele acabou repetindo de ano!\n\n\n   O FILHO DE NATALIA SE LAXCOU!")
        var deNovoNat;
        while (deNovoNat != 1 && deNovoNat != 2) {
            deNovoNat = prompt ("Tentar novamente? Digite:\n1-sim\n2-não");
            if(deNovoNat==1){
                window.location.href="./indexPersonagens.html";
            }else if(deNovoNat ==2){
                window.location.href="./index.html";
            } else {
                alert ("Essa opção não é válida, tente novamente.");
            }
        }
    } else {
        alert ("Essa opção não é válida, tente novamente.");
    }
}

var botaoComecarQuestNat = document.getElementById("botaoComecarQuestNat");
botaoComecarQuestNat.onclick = startQuestNat;