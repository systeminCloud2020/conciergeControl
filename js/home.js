/* FUNÇÕES DE CARREGAMENTO DOS FRAMES */

function openRegimento() {
    window.open('regimento.html');
}

function openManual() {
    window.open('manual.html');
}

function openOcorrencias() {
    window.open('ocorrencias.html');
}

function openVisitas() {
    window.open('visitas.html');
}

function openCorreios() {
    window.open('correios.html');
}

function openReservas() {
    window.open('reservas.html');
}

function cadastroApartamento() {
    window.open('cadastroApartamento.html');
}

function openVeiculos() {
    window.open('veiculos.html');
}

function openMultas() {
    window.open('multas.html');
}

function sair() {
    var res = confirm('Tem certeza que deseja SAIR?...')

    if (res == true){
        window.close('home.html')
    }
}