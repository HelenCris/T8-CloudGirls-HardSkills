$("#botao-frase-id").click(buscaFrase);

let fraseAleatoria = () => {
    $("#spinner").toggle();

    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },1500);
    })
    .always(function(){ // novo, escondendo o spinner
        $("#spinner").toggle();
    });
}

let trocaFraseAleatoria = (data) => {
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}

let atualizaTempoInicial = (tempo) => {
    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);

}

let buscaFrase = () => {
    $("#spinner").toggle();
    var fraseId = $("#frase-id").val();
}

let sincronizaPlacar = () => {
    var placar = [];
    var linhas = $("tbody>tr");

    //novo
    linhas.each(function(){
        var usuario = $(this).find("td:nth-child(1)").text();
        var palavras = $(this).find("td:nth-child(2)").text();

        var score = {
            usuario: usuario,
            pontos: palavras            
        };

        placar.push(score); //guardando o score no array

    });
        var dados = {
            placar: placar
        };

        $.post("http://localhost:3000/placar", dados, function(){
            console.log("Placar sincronizado com sucesso");
        });
}


let atualizaPlacar = () => {
    $.get("http://localhost:3000/placar",function(data){
        $(data).each(function(){
            var linha = novaLinha(this.usuario, this.pontos);

            linha.find(".botao-remover").click(removeLinha);

            $("tbody").append(linha);
        });
    });
}