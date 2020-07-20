// funcao remove uma linha da tabela
function entregue(linha) {

  var senha = window.prompt("Informe a Senha:");

  var idUsuario = 123;

  if (senha == "") {
    alert('Favor Informar Senha'); return removeLinha();
  } else if (senha == idUsuario) {

    var data = window.document.getElementById('data').innerHTML;
    var hora = window.document.getElementById('time').innerHTML;

    var i = linha.parentNode.parentNode.rowIndex;
    document.getElementById('tbl').insertRow(data);

    var dataAtualizada = window.document.getElementById('novaData');
    dataAtualizada.innerHTML = data + " às " + hora;


  } else {
    alert('Não foi possível esxcluir!!!');
  }

}


//Carrega Hora atualizada
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function () {
    startTime()
  }, 500);
}
startTime();



//Carrega data atualizada 


function carregaData() {

  var dataHoje = window.document.getElementById('data');

  var hoje = new Date();
  var dia = hoje.getUTCDate();
  var mes = hoje.getUTCMonth();
  var ano = hoje.getFullYear();

  switch (mes) {
    case 0:
      nomeMes = 'Jan';
      break;

    case 1:
      nomeMes = 'Fev';
      break;

    case 2:
      nomeMes = 'Mar';
      break;

    case 3:
      nomeMes = 'Abr';
      break;

    case 4:
      nomeMes = 'Mai';
      break;

    case 5:
      nomeMes = 'Jun';
      break;

    case 6:
      nomeMes = 'Jul';
      break;

    case 7:
      nomeMes = 'Ago';
      break;

    case 8:
      nomeMes = 'Set';
      break;

    case 9:
      nomeMes = 'Out';
      break;

    case 10:
      nomeMes = 'Nov';
      break;

    case 11:
      nomeMes = 'Dez';
      break;

    default:
      nomeMes = 'indefinido';

  }

  dataHoje.innerHTML = dia + "/" + nomeMes + "/" + ano;
}

/* Função para fechar Páginas */
function closeCurrentWindow() {
  window.close();
}

//Função aparecer aba ocorrências
function openNovaEncomenda() {
  var divAparece = document.getElementById('novaEncomenda');
  divAparece.style.display="block";
}

//Função desaparecer aba ocorrências
function closedEncomenda() {
  var divAparece = document.getElementById('novaEncomenda');
  divAparece.style.display="none";
}