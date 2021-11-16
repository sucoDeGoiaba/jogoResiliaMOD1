function escolhasVamp1(){
    var resposta = prompt("Você recebe a opção de caçar ou ficar em casa, o que escolhe: \n\t1 - Caçar.\n\t2 - Não caçar.\n\n");
        if(resposta === "1"){
            window.location.assign("./escolhas1/escolhendoCacar.html");
        } else if(resposta === "2") {
            window.location.assign("./escolhas1/naoEscolheuCacar.html");
        } else {
            alert("Resposta invália.");
        }
}


function escolhasVamp2(){
    var resposta = prompt("Você recebe a opção de mata-la ou não, o que escolhe: \n\t1 - Matar.\n\t2 - Não matar.\n\n");
        if(resposta === "1"){
            window.location.assign("./escolhas1/escolhas2/escolhendoMatarAmulher.html");
        } else if(resposta === "2") {
            window.location.assign("./escolhas1/escolhas2/naoMatandoMulher.html");
        } else {
            alert("Resposta invália.");
        }
}

function gameOver(){
    window.location.assign("../../../gameover/gameOver.html");
}