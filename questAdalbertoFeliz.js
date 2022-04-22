function startQuestDois() {
    var escolhaDois=prompt ("Adalberto chamou a ambulância e se atrasou para o trabalho.\n Ao chegar no trabalho ele tem duas opções:\n1-  Chama o chefe e explica o motivo do atraso\n2- Entra na reunião sem explicações sobre o atraso");

    if (escolhaDois==1) {
        alert ("Adalberto chamou o chefe em um momento em que ele não estava falando na reunião e explicou o ocorrido, justificando o atraso. Ao terminar a reunião o chefe o chama no escritório e ele consegue a promoção, por que o chefe valoriza o relacionamento dele com os subordinados e valoriza a conduta tomada. Adalberto volta ao hospital e conta para a companheira que foi promovido.\n\n\nPARABÉNS VOCÊ AJUDOU UM LAXCADO!");

        var deNovo;
        while (deNovo != 1 && deNovo != 2) {
            deNovo = prompt ("Tentar novamente? Digite:\n1-sim\n2-não");
            if(deNovo==1){
                window.location.href="./indexPersonagens.html";
            }else if(deNovo ==2){
                window.location.href="./index.html";
            } else {
                alert ("Essa opção não é válida, tente novamente.");
            }
        }
    } else if (escolhaDois == 2) {
        window.location.href="./questAdalbertoTrabalho.html";
    } else {
        alert ("Essa opção não é válida, tente novamente.");
    }
}

var botaoComecarQuestDois = document.getElementById("botaoComecarQuestDois");
botaoComecarQuestDois.onclick = startQuestDois;