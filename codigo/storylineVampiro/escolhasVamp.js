function escolhasVamp1(){
    var resposta = prompt("Você recebe a opção de caçar ou ficar em casa, o que escolhe: \n\t1 - Caçar.\n\t2 - Não caçar.\n\n");
    while(true){
        if(resposta === "1"){
            window.location.assign("./Cap1Escolha1.html");
            break;
        } else if(resposta === "2") {
            window.location.assign("./Cap1Escolha2.html");
            break;
        } else {
            alert("Resposta invália.");
            resposta = prompt("Você recebe a opção de caçar ou ficar em casa, o que escolhe: \n\t1 - Caçar.\n\t2 - Não caçar.\n\n");
        }
    }
}


function escolhasVamp2(){
    var resposta = prompt("Você recebe a opção de mata-la ou não, o que escolhe: \n\t1 - Matar.\n\t2 - Não matar.\n\n");
    while(true){
        if(resposta === "1"){
            window.location.assign("./Cap2Escolha1.html");
            break;
        } else if(resposta === "2") {
            window.location.assign("./Cap2Escolha2.html");
            break;
        } else {
            alert("Resposta invália.");
            resposta = prompt("Você recebe a opção de mata-la ou não, o que escolhe: \n\t1 - Matar.\n\t2 - Não matar.\n\n");
        }
    }
}

function gameOver(){
    window.location.assign("../gameOver.html");
}

function indoProCap3(){
    window.location.assign("./Cap3.html");
}

function fim(){
    window.location.assign("../paginaFim.html");
}

function deVoltaAoComeco(){
    window.location.assign("../index.html");
}