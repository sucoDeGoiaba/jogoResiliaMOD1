function escolhasVit1(){
    var resposta = prompt("Você recebe a opção de:\n\t1- Continuar o caminho para cidade mais próxima.\n\t2- Continuar ali esperando que o resto do grupo cansasse da piadinha.\n\t3- Se abrigar/pedir ajuda no Castelo que estava ao horizonte.\n\n");
        if(resposta === "1"){
            window.location.assign("./Cap1Escolha1Vit.html");
        } else if(resposta === "2") {
            window.location.assign("./Cap1Escolha2Vit.html");
        } else if(resposta === "3"){
            window.location.assign("")
        } else {
            alert("Resposta invália.");
        }
}

function fim(){
    window.location.assign("../paginaFim.html");
}

function gameOver(){
    window.location.assign("../gameOver.html");
}
