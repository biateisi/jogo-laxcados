function start() {
    var escolha=prompt ("Escolha o seu Laxcado:\n1-Adalberto\n2-Natalia\n3-Geovanni");

    if (escolha==1) {
        window.location.href="./questAdalberto.html";
    } else if (escolha == 2) {
        window.location.href="./questNatalia.html";
    } else if (escolha == 3) {
        window.location.href="./questGeovanni.html";
    } else {
        alert ("Esse laxcado não foi encontrado, tente novamente.");
    }
}

var divpersonagens = document.getElementById("personagens");
divpersonagens.onclick = start;