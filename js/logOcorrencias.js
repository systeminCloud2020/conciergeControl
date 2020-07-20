    //

    //
    //
    //
    
    //
    //
    //var img1 = window.document.getElementById('uploadPreview1').innerHTML;
    //var img2 = window.document.getElementById('uploadPreview2').innerHTML;
    //var img3 = window.document.getElementById('uploadPreview3').innerHTML;



        function Adicionar() {
            var idOcorrencia = window.document.getElementById('idOcorrencia').innerHTML;
            var data = window.document.getElementById('data').innerHTML;
            var time = window.document.getElementById('time').innerHTML;
            var nomeAgente = window.document.getElementById('nomeAgente').value;
            var tituloOcorrencia = window.document.getElementById('tituloOcorrencia').value;
            var divIcone = window.document.getElementById('divIcone').innerHTML;
            var descricao = window.document.getElementById('descricao').value;
            var resolucao = window.document.getElementById('resolucao').value;
           //var dataEntrega = window.document.getElementById('dataEntrega').value;
            //entrega = '<div id="novaData"></div>';
    
            $("#tblCadastro tbody").append(
                '<tr>' +
                '<td class="id">' + idOcorrencia +
                '<td class="data">' + data + " - " + time + '</td>' +
                '<td class="icon">' + divIcone + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td class="titulo">' + tituloOcorrencia + '</td>' +
                '<td class="nome">' + nomeAgente + '</td>' +
                '<td colspan="2" class="botoes"><img src="images/pencil.png" class="btnEditar"/><img src="images/delete.png" class="btnExcluir"/></td>' +
                '</tr>' +
                '<tr>' +
                '<td colspan="3" class="descricao">' + descricao + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td colspan="3">' + resolucao + '</td>' +
                '</tr>' +
                /*
                '<tr>' +
                "<td>" + dataEntrega + '</td>' +
                '</tr>' +
                */
                '<tr>' +
                '<td colspan="3" class="nada"> *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***</td>' +
                '</tr>');
    
            $(".btnExcluir").bind("click", Excluir);
            $(".btnEditar").bind("click", Editar);
    
        };
    /*
        function Salvar() {
    
            var par = $(this).parent().parent(); //tr
            var tdData = par.children("td:nth-child(1)");
            var tdBloco = par.children("td:nth-child(2)");
            var tdApartamento = par.children("td:nth-child(3)");
            var tdCodigoRastreio = par.children("td:nth-child(4)");
            var tdTipoEmbalagem = par.children("td:nth-child(5)");
            var tdDataEntrega = par.children("td:nth-child(6)");
            var tdBotoes = par.children("td:nth-child(7)");
    
            tdData.html(tdData.children("input[type=text]").val());
            tdBloco.html(tdBloco.children("input[type=text]").val());
            tdApartamento.html(tdApartamento.children("input[type=text]").val());
            tdCodigoRastreio.html(tdCodigoRastreio.children("input[type=text]").val());
            tdTipoEmbalagem.html(tdTipoEmbalagem.children("input[type=text]").val());
            tdDataEntrega.html(tdDataEntrega.children("input[type=text]").val());
            tdBotoes.html("<img src='images/delete.png'class='btnExcluir'/>");
    
            $(".btnExcluir").bind("click", Excluir);
            //$(".btnEditar").bind("click", Editar);
    
        };
    
        function Editar() {
    
            var data = window.document.getElementById('data').innerHTML;
            var hora = window.document.getElementById('time').innerHTML;
    
            var par = $(this).parent().parent(); //tr
            //var tdData = par.children("td:nth-child(1)");
            var tdBloco = par.children("td:nth-child(2)");
            var tdApartamento = par.children("td:nth-child(3)");
            var tdCodigoRastreio = par.children("td:nth-child(4)");
            var tdTipoEmbalagem = par.children("td:nth-child(5)");
            var tdDataEntrega = par.children("td:nth-child(6)");
            var tdBotoes = par.children("td:nth-child(7)");
    
            //tdData.html("<input type='text' id='txtData' value='" + tdData.html() + "'/>");
            tdBloco.html("<input type='text'id='txtBloco' value='" + tdBloco.html() + "'/>");
            tdApartamento.html("<input type='text' id='txtApartamento' value='" + tdApartamento.html() + "'/>");
            tdTipoEmbalagem.html("<input type='text' id='txtTipoEmblagem' value='" + tdTipoEmbalagem.html() + "'/>");
            tdCodigoRastreio.html("<input type='text' id='txtCodigoRastreio' value='" + tdCodigoRastreio.html() + "'/>");
            tdDataEntrega.html(data + " - " + hora);
            tdBotoes.html("<img src='images/disk.png' class='btnSalvar'/>");
    
            $(".btnSalvar").bind("click", Salvar);
            //$(".btnEditar").bind("click", Editar);
            $(".btnExcluir").bind("click", Excluir);
        };
    
        function Excluir() {
            var par = $(this).parent().parent(); //tr
            par.remove();
    
        }
        $(".btnEditar").bind("click", Editar);
        $(".btnExcluir").bind("click", Excluir);
        $("#btnAdicionar").bind("click", Adicionar);
        */

    