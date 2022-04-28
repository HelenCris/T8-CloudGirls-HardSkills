$("#botao-frase").click(fraseAleatoria);

let fraseAleatoria = () => {
    $.get("http://localhost:3000/frases");
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