$(function () {
	function Adicionar() {

		var agente = window.document.getElementById('agente').innerText
		var data = window.document.getElementById('data').innerHTML;
		var hora = window.document.getElementById('time').innerHTML;
		var bloco = window.document.getElementById('bloco').value;
		var apartamento = window.document.getElementById('apartamento').value;
		var responsavel = window.document.getElementById('responsavel').value;
		var area = window.document.getElementById('area').value;
        var dataPrevista = window.document.getElementById('dataPrevista').value;
        var horaPrevista = window.document.getElementById('horaPrevista').value;
		var dataEntrega = window.document.getElementById('dataEntrega').value;
		//entrega = '<div id="novaData"></div>';

		$("#tblCadastro tbody").append(
			"<tr>" +
			"<td>" + data + " - " + hora + " <br> " + agente +"</td>" +
			"<td>" + bloco + "</td>" +
			"<td>" + apartamento + "</td>" +
			"<td>" + responsavel + "</td>" +
			"<td>" + area + "</td>" +
			"<td>" + dataPrevista + " - " + horaPrevista + "</td>" +
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
		var tdresponsavel = par.children("td:nth-child(4)");
		var tdArea = par.children("td:nth-child(5)");
		var tddataPrevista = par.children("td:nth-child(6)");
		var tdDataEntrega = par.children("td:nth-child(7)");
		var tdBotoes = par.children("td:nth-child(8)");

		tdData.html(tdData.children("input[type=text]").val());
		tdBloco.html(tdBloco.children("input[type=text]").val());
		tdApartamento.html(tdApartamento.children("input[type=text]").val());
		tdresponsavel.html(tdresponsavel.children("input[type=text]").val());
		tdArea.html(tdArea.children("input[type=text]").val());
		tddataPrevista.html(tddataPrevista.children("input[type=text]").val());
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
		var tdresponsavel = par.children("td:nth-child(4)");
		var tdArea = par.children("td:nth-child(5)");
		var tddataPrevista = par.children("td:nth-child(6)");
		var tdDataEntrega = par.children("td:nth-child(7)");
		var tdBotoes = par.children("td:nth-child(8)");

		//tdData.html("<input type='text' id='txtData' value='" + tdData.html() + "'/>");
		tdBloco.html("<input type='text'id='txtBloco' value='" + tdBloco.html() + "'/>");
		tdApartamento.html("<input type='text' id='txtApartamento' value='" + tdApartamento.html() + "'/>");
		tddataPrevista.html("<input type='text' id='txtTipoEmblagem' value='" + tddataPrevista.html() + "'/>");
		tdresponsavel.html("<input type='text' id='txtresponsavel' value='" + tdresponsavel.html() + "'/>");
		tdArea.html("<input type='text' id='txtAreatdArea' value='" + tdArea.html() + "'/>");
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