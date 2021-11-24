function escolhasVit1(){
    var resposta = prompt("Você recebe a opção de:\n\t1- Continuar o caminho para cidade mais próxima.\n\t2- Continuar ali esperando que o resto do grupo cansasse da piadinha.\n\t3- Se abrigar/pedir ajuda no Castelo que estava ao horizonte.\n\n");
    while(true){
        if(resposta === "1"){
            window.location.assign("./Cap1Escolha1Vit.html");
            break;
        } else if(resposta === "2") {
            window.location.assign("./Cap1Escolha2Vit.html");
            break;
        } else if(resposta === "3"){
            window.location.assign("./Cap1Escolha3Vit.html");
            break;
        } else {
            alert("Resposta invália.");
            resposta = prompt("Você recebe a opção de:\n\t1- Continuar o caminho para cidade mais próxima.\n\t2- Continuar ali esperando que o resto do grupo cansasse da piadinha.\n\t3- Se abrigar/pedir ajuda no Castelo que estava ao horizonte.\n\n");
        }
    }
}

function fim(){
    window.location.assign("../paginaFim.html");
}

function gameOver(){
    window.location.assign("../gameOver.html");
}

function paraCap2(){
    window.location.assign("./Cap2Vit.html");
}

function escolhasVit2(){
    var resposta = prompt("Você recebe a opção de:\n\t1- Se vingar.\n\t2- Tentar fugir.\n\n");
    while(true){
        if(resposta === "1"){
            window.location.assign("./Cap3Escolha1Vit.html");
            break;
        } else if(resposta === "2") {
            window.location.assign("./Cap3Escolha2Vit.html");
            break;
        } else {
            alert("Resposta invália.");
            resposta = prompt("Você recebe a opção de:\n\t1- Se vingar.\n\t2- Tentar fugir.\n\n");
        }
    }
}