function startQuestDoisNat() {
    var escolhaDoisNat=prompt ("Natalia decide ir para a reunião da escola e depois chega atrasada no trabalho. Ao chegar no trabalho, ela explica a situação e o chefe diz que não tem problema o atraso, mas ela precisa entregar todas as provas corrigidas até o final do dia.\n1- Ela corrige as provas\n2- Ela não corrige as provas");

    if (escolhaDoisNat==1) {
        window.location.href="./questNataliaCurso.html";
    } else if (escolhaDoisNat == 2) {
        alert ("Natália tenta conversar com o chefe, e diz que isso não é possível, pois ela tem o filho e o curso e muitas responsabilidades. Natalia argumentou bem e conseguiu negociar com o chefe, mas terá que trabalhar neste sábado, que é o aniversário de seu filho!\n\n\n O FILHO DE NATALIA SE LAXCOU!");
        var deNovoNat;
        while (deNovoNat != 1 && deNovoNat != 2) {
            deNovoNat = prompt ("Tentar novamente? Digite:\n1-sim\n2-não");
            if(deNovoNat==1){
                window.location.href="../indexPersonagens.html";
            }else if(deNovoNat ==2){
                window.location.href="../../index.html";
            } else {
                alert ("Essa opção não é válida, tente novamente.");
            }
        }
    } else {
        alert ("Essa opção não é válida, tente novamente.");
    }
}

var botaoComecarQuestDoisNat = document.getElementById("botaoComecarQuestDoisNat");
botaoComecarQuestDoisNat.onclick = startQuestDoisNat;