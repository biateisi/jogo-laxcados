function startQuestTres() {
    var escolhaTres=prompt ("Na reunião ele passa por uma situação terrível, onde o chefe o humilha publicamente, o que Adalberto faz:\n1- Recebe a humilhação, não fala nada e se retira da sala de reuniões\n2- Se desculpa pelo atraso e informa eufórico para todos da sala que sua companheira entrou em trabalho de parto");

    if (escolhaTres==1) {
        alert ("Após a reunião ele é chamado na sala do chefe, e recebe a notícia de que está sendo demitido. Adalberto não se comunicou corretamente com a liderança, ninguém sabia da sua situação e ele foi demitido!\n\n\n ADALBERTO SE LAXCOU!");
        end();
    } else if (escolhaTres == 2) {
        alert ("Adalberto é chamado na sala do chefe que se sentiu ofendido com a conduta em reunião, e exige que para não o demitir que Adalberto demita 5 funcionários de sua equipe. Adalberto demite os 5 funcionários, não consegue a promoção e agora tem que entregar o mesmo resultado com 5 funcionários a menos!\n\n\n ADALBERTO E OS FUNCIONÁRIOS SE LAXCARAM!");
        end();
    } else {
        alert ("Essa opção não é válida, tente novamente.");
    }
}

var botaoComecarQuestTres = document.getElementById("botaoComecarQuestTres");
botaoComecarQuestTres.onclick = startQuestTres;


function end() {
    var deNovoJob;
    while (deNovoJob != 1 && deNovoJob != 2) {
        deNovoJob = prompt ("Tentar novamente? Digite:\n1-sim\n2-não");
        if(deNovoJob==1){
            window.location.href="../indexPersonagens.html";
        }else if(deNovoJob==2){
            window.location.href="../../index.html";
        } else {
            alert ("Essa opção não é válida, tente novamente.");
        }
    }
}