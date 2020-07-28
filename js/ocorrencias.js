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
        startTime();
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



/*Funções para mudança de imagem*/

var check = window.document.getElementById('poucoUrgente');

function img01() {
    document.getElementById("icone").src = "img/urgente.png";
}

function img02() {
    document.getElementById("icone").src = "img/meio_urgente.png";
}

function img03() {
    document.getElementById("icone").src = "img/pouco_urgente.png";
}

/* Upload Imagens */

/*
  <script>
  function PreviewImage() {
          var oFReader = new FileReader();
          oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);
  
          oFReader.onload = function (oFREvent) {
              document.getElementById(this."uploadPreview").src = oFREvent.target.result;
          };
      };
  </script>

        /* Upload 01 */


function PreviewImage1() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("uploadImage1").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("uploadPreview1").src = oFREvent.target.result;
    };
}

/* Upload 02 */

function PreviewImage2() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("uploadImage2").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("uploadPreview2").src = oFREvent.target.result;
    };
}

/* Upload 03 */

function PreviewImage3() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("uploadImage3").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("uploadPreview3").src = oFREvent.target.result;
    };
}

//Função aparecer aba ocorrências
function openNovaOcorrencia() {
    var divAparece = document.getElementById('novaOcorrencia');
    divAparece.style.display = "grid";
}

//Função desaparecer aba ocorrências
function closedNovaOcorrencia() {
    var divAparece = document.getElementById('novaOcorrencia');
    divAparece.style.display = "none";
}

//Função atualisa ID










function adcionar() {


            var idOcorrencia = window.document.getElementById('idOcorrencia').innerHTML;
            var data = window.document.getElementById('data').innerHTML;
            var time = window.document.getElementById('time').innerHTML;
            var nomeAgente = window.document.getElementById('nomeAgente').value;
            //var tituloOcorrencia = window.document.getElementById('tituloOcorrencia').value;
            //var divIcone = window.document.getElementById('divIcone').innerHTML;
            //var descricao = window.document.getElementById('descricao').value;
            //var resolucao = window.document.getElementById('resolucao').value;
            //var img1 = window.document.getElementById('uploadPreview1').innerHTML;
            //var img2 = window.document.getElementById('uploadPreview2').innerHTML;
            //var img3 = window.document.getElementById('uploadPreview3').innerHTML;

            var conteudo = [idOcorrencia, data, time, nomeAgente]


            
          
           

      


    /*var newId = document.createElement("div");
    var textId = document.createTextNode(idOcorrencia);
    newId.appendChild(textId);
    var listId = document.getElementById("myList");
    listId.insertBefore(newId, listId.childNodes[0]);

    var newTime = document.createElement("div");
    var textTime = document.createTextNode(time);
    newTime.appendChild(textTime);
    var listTime = document.getElementById("myList");
    listTime.insertBefore(newTime, listTime.childNodes[1]);

    var newNomeAgente = document.createElement("div");
    var textNomeAgente = document.createTextNode(nomeAgente);
    newNomeAgente.appendChild(textNomeAgente);
    var listNomeAgente = document.getElementById("myList");
    listNomeAgente.insertBefore(newNomeAgente, listNomeAgente.childNodes[2]);

    var newData = document.createElement("div");
    var textData = document.createTextNode(data);
    newData.appendChild(textData);
    var listData = document.getElementById("myList");
    listData.insertBefore(newData, listData.childNodes[3]);

    var newTituloOcorrencia = document.createElement("div");
    var textTituloOcorrencia = document.createTextNode(tituloOcorrencia);
    newTituloOcorrencia.appendChild(textTituloOcorrencia);
    var listTituloOcorrencia = document.getElementById("myList");
    listTituloOcorrencia.insertBefore(newTituloOcorrencia, listTituloOcorrencia.childNodes[4]);

    var newIcone = document.createElement('div');
    var textnode = document.createTextNode(divIcone);
    nexIcone.appendChild(textIcone);
    var list = document.getElementById("myList");
    list.insertBefore(newIcone, list.childNodes[5]);

    var newDescricao = document.createElement('div');
    var textDescricao = document.createTextNode(descricao);
    newDescricao.appendChild(textDescricao);
    var listDescricao = document.getElementById("myList");
    listDescricao.insertBefore(newDescricao, listDescricao.childNodes[6]);

    var newResolucao = document.createElement('div');
    var textResolucao = document.createTextNode(resolucao);
    newResolucao.appendChild(textResolucao);
    var listResolucao = document.getElementById('myList');
    listResolucao.insertBefore(newResolucao, listResolucao.childNodes[7]);*/
  }
