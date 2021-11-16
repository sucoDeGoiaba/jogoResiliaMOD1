// document.getElementById("submit-button").addEventListener("click", function(){
//     var value = document.getElementById('submit-button').value;
//     if(value){
//         var resposta = prompt("Você recebe a opção de caçar ou ficar em casa, o que escolhe: \n\t1 - Caçar.\n\t2 - Não caçar.");

//         if(resposta === "1"){
//             window.location.assign("./escolhas1/escolhendoCacar.html");
//         } else if(resposta === "2") {
//             window.location.assign("./escolhas1/naoEscolheuCacar.html");
//         } else {
//             alert("Resposta invália.");
//         }
//     }
// });

function escolhas1(){
    // console.log(1);
    var resposta = prompt("Você recebe a opção de caçar ou ficar em casa, o que escolhe: \n\t1 - Caçar.\n\t2 - Não caçar.\n\n");
        if(resposta === "1"){
            window.location.assign("./escolhas1/escolhendoCacar.html");
        } else if(resposta === "2") {
            window.location.assign("./escolhas1/naoEscolheuCacar.html");
        } else {
            alert("Resposta invália.");
        }
}


function escolhas2(){
    var resposta = prompt("Você recebe a opção de caçar ou ficar em casa, o que escolhe: \n\t1 - Caçar.\n\t2 - Não caçar.\n\n");
        if(resposta === "1"){
            window.location.assign("./escolhas1/escolhendoCacar.html");
        } else if(resposta === "2") {
            window.location.assign("./escolhas1/naoEscolheuCacar.html");
        } else {
            alert("Resposta invália.");
        }
}