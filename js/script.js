function carregarPrincipal() {
    fetch('/pages/principal.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('.container_corpo').innerHTML = html;
        });
}

function carregarDicas() {
    fetch('/pages/dicas.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('.container_corpo').innerHTML = html;
        });
}

function carregarPratosPrincipais() {
    fetch('/pages/receitas/pratos_principais.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('.container_corpo').innerHTML = html;
        });
}

function carregarSaladas() {
    fetch('/pages/receitas/saladas.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('.container_corpo').innerHTML = html;
        });
}

function carregarSobremesas() {
    fetch('/pages/receitas/sobremesas.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('.container_corpo').innerHTML = html;
        });
}

function carregarSucos() {
    fetch('/pages/receitas/sucos.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('.container_corpo').innerHTML = html;
        });
}

function carregarContato() {
    fetch('/pages/contato.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('.container_corpo').innerHTML = html;
        });
}

function carregarSobre() {
    fetch('/pages/sobre.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('.container_corpo').innerHTML = html;
        });
}

document.addEventListener('DOMContentLoaded', function() {

    carregarPrincipal();

    document.querySelector('#link_Principal').addEventListener('click', function(event) {
        event.preventDefault();
        carregarPrincipal();
    });

    document.querySelector('#link_Dicas').addEventListener('click', function(event) {
        event.preventDefault();
        carregarDicas();
    });

    document.querySelector('#link_PratosPrincipais').addEventListener('click', function(event) {
        event.preventDefault();
        carregarPratosPrincipais();
    });

    document.querySelector('#link_Saladas').addEventListener('click', function(event) {
        event.preventDefault();
        carregarSaladas();
    });

    document.querySelector('#link_Sobremesas').addEventListener('click', function(event) {
        event.preventDefault();
        carregarSobremesas();
    });

    document.querySelector('#link_Sucos').addEventListener('click', function(event) {
        event.preventDefault();
        carregarSucos();
    });

    document.querySelector('#link_Contato').addEventListener('click', function(event) {
        event.preventDefault();
        carregarContato();
    });

    document.querySelector('#link_Sobre').addEventListener('click', function(event) {
        event.preventDefault();
        carregarSobre();
    });

});
