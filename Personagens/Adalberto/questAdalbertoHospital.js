function startQuest() {
    var escolhaUm=prompt ("Adalberto estava a caminho do trabalho, e a sua esposa entrou em trabalho de parto. Agora ele precisa decidir se leva a esposa para o hospital ou se corre para o trabalho, para não chegar atrasado, já que ele não pode correr o risco de ser demitido.\nO que ele faz?\n1- Leva a esposa para o hospital\n2- Chama ambulância e vai para o trabalho");

    if (escolhaUm==1) {
        alert ("Adalberto levou a mulher para o hospital, passou o dia inteiro lá e perdeu a reunião. No dia seguinte, quando Adalberto chegou ao trabalho, chamou o chefe para conversar e soube que não havia mais chances de ser promovido, pois a vaga foi preenchida na reunião de ontem.\n\n\n ADALBERTO SE LAXCOU!");

        var deNovo;
        while (deNovo != 1 && deNovo != 2) {
            deNovo = prompt ("Tentar novamente? Digite:\n1-sim\n2-não");
            if(deNovo==1){
                window.location.href="../indexPersonagens.html";
            }else if(deNovo ==2){
                window.location.href="../../index.html";
            } else {
                alert ("Essa opção não é válida, tente novamente.");
            }
        }
    } else if (escolhaUm == 2) {
        window.location.href="./questAdalbertoFeliz.html";
    } else {
        alert ("Essa opção não é válida, tente novamente.");
    }
}

var botaoComecarQuest = document.getElementById("botaoComecarQuest");
botaoComecarQuest.onclick = startQuest;