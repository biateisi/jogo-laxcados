function start() {
    var escolha=prompt ("Escolha o seu Laxcado:\n1-Adalberto\n2-Natalia\n3-Geovanni");

    if (escolha==1) {
        window.location.href="./Adalberto/questAdalbertoHospital.html";
    } else if (escolha == 2) {
        window.location.href="./Natalia/questNataliaEscola.html";
    } else if (escolha == 3) {
        window.location.href="./Geovanni/questGeovanniDate.html";
    } else {
        alert ("Esse laxcado não foi encontrado, tente novamente.");
    }
}

var divpersonagens = document.getElementById("personagens");
divpersonagens.onclick = start;