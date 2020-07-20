$(function () {
	function Adicionar() {

		var data = window.document.getElementById('data').innerHTML;
		var hora = window.document.getElementById('time').innerHTML;
		var bloco = window.document.getElementById('bloco').value;
		var apartamento = window.document.getElementById('apartamento').value;
		var codigoRastreio = window.document.getElementById('codigoRastreio').value;
		var tipoEmbalagem = window.document.getElementById('tipoEmbalagem').value;
		var dataEntrega = window.document.getElementById('dataEntrega').value;
		//entrega = '<div id="novaData"></div>';

		$("#tblCadastro tbody").append(
			"<tr>" +
			"<td>" + data + " - " + hora + "</td>" +
			"<td>" + bloco + "</td>" +
			"<td>" + apartamento + "</td>" +
			"<td>" + codigoRastreio + "</td>" +
			"<td>" + tipoEmbalagem + "</td>" +
			"<td>" + dataEntrega + "</td>" +
			"<td><img src='images/pencil.png' class='btnEditar'/><img src='images/delete.png' class='btnExcluir'/></td>" +
			"</tr>");

		$(".btnExcluir").bind("click", Excluir);
		$(".btnEditar").bind("click", Editar);

	};

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
});


/*
function func() {
  return this.method();
}

var obj = {
  method: function() {
    return 'method de obj';
  }
};
*/