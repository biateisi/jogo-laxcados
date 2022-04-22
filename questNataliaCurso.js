function startQuestTresNat() {
    var escolhaTresNat=prompt ("Natália passa da hora no trabalho, mas consegue entrega as provas corrigidas. Como Natália perdeu a hora para sair do trabalho ela precisa decidir:\n1- busca o filho na escola\n2- vai para o curso");

    if (escolhaTresNat==1) {
        alert ("Natalia encontra o filho sozinho e chorando na coordenação e decide passear com ele perdendo a apresentação no curso.\n\n\n NATALIA SE LAXCOU NO CURSO!");
        end();
    } else if (escolhaTresNat == 2) {
        alert ("Natalia pede para a amiga buscar o filho na escola e corre para o curso. Natalia consegue fazer a apresentação no curso com sucesso e foi convidada para participar de um processo seletivo!! Chegando em casa pediu uma pizza para comemorar com o filho.\n\n\n PARABÉNS VOCÊ AJUDOU UM LAXCADO!");
        end();
    } else {
        alert ("Essa opção não é válida, tente novamente.");
    }
}

var botaoComecarQuestTresNat = document.getElementById("botaoComecarQuestTresNat");
botaoComecarQuestTresNat.onclick = startQuestTresNat;

function end() {
    var deNovoJobNat;
    while (deNovoJobNat != 1 && deNovoJobNat != 2) {
        deNovoJobNat = prompt ("Tentar novamente? Digite:\n1-sim\n2-não");
        if(deNovoJobNat==1){
            window.location.href="./indexPersonagens.html";
        }else if(deNovoJobNat==2){
            window.location.href="./index.html";
        } else {
            alert ("Essa opção não é válida, tente novamente.");
        }
    }
}