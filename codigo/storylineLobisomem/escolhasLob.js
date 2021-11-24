function escolhasLob1(){
    var resposta = prompt("Você recebe a opção de: \n\t1 - Seguir as recomendações médicas.\n\t2 - Não seguir as instruções.\n\n");
    while(true){
        if(resposta === "1"){
            window.location.assign("./Cap1Escolha1Lob.html");
            break;
        } else if(resposta === "2") {
            window.location.assign("./Cap1Escolha2Lob.html");
            break;
        } else {
            alert("Resposta invália.");
            resposta = prompt("Você recebe a opção de: \n\t1 - Seguir as recomendações médicas.\n\t2 - Não seguir as instruções.\n\n");
        }
    }
}

function fim(){
    window.location.assign("../paginaFim.html");
}

function escolhasLob2(){
    var resposta = prompt("Um forte aroma de sangue paira pelo ar, seus instintos te levam a:\n\t1 - Floresta.\n\t2 - Vila\n\n");
    while(true){
        if(resposta === "1") {
            window.location.assign("./Cap2Escolha1Lob.html");
            break;
        } else if(resposta === "2") {
            window.location.assign("./Cap2Escolha2Lob.html");
            break;
        } else {
            alert("Resposta invália.");
            resposta = prompt("Um forte aroma de sangue paira pelo ar, seus instintos te levam a:\n\t1 - Floresta.\n\t2 - Vila\n\n");
        }
    }
}

function gameOver(){
    window.location.assign("../gameOver.html");
}