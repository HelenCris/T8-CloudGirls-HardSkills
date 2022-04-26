var tempoInicial = $("#tempo-digitacao").text();

$(function(){
        atualizaTamanhoFrase();
        inicializaContadores();
        inicializaCronometro();
        inicializaMarcadores(); //novo

        $("#botao-reiniciar").click(reiniciaJogo);
});

let atualizaTamanhoFrase= () => {
    var frase = $(".frase").text(); 
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}

var campo = $(".campo-digitacao");


let inicializaContadores = () => {
    campo.on("input", function() {
        var conteudo = campo.val();
    
        var qtdPalavras = conteudo.split(/\S+/).length;
        $("#contador-palavras").text(qtdPalavras);
    
        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
}



let inicializaCronometro = () => {
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function() {
    var cronometroID = setInterval(function(){
        tempoRestante--;
        //console.log(tempoRestante);
        $("#tempo-digitacao").text(tempoRestante);
        if(tempoRestante < 1){
            campo.attr("disabled", true);
            clearInterval(cronometroID);
            campo.toggleClass("campo-desativado"); //novo
        }        
    },1000);
});
}


let reiniciaJogo = () => {
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado"); //novo

    campo.removeClass("borda-vermelha"); //novo
    campo.removeClass("borda-verde"); //novo
}


function inicializaMarcadores() {

    var frase = $(".frase").text();
    campo.on("input", function() {
        var digitado = campo.val();
        var comparavel = frase.substr(0 , digitado.length);

        if(digitado == comparavel) {
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
}