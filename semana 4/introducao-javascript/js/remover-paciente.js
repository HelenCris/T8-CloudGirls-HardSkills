var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");
    //event.target.parentNode.remove();

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
})

/*pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        console.log('Fui clicado com um duplo click');
        this.remove();
    })
})*/