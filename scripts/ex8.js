document.getElementById("menu").addEventListener("change", function () {
	var escolha = document.getElementById("menu").value;
	var mensagem = document.getElementById("mensagem");

	switch (escolha) {
		case "opcao1":
			mensagem.innerText = "Opção 1 escolhida";
			break;
		case "opcao2":
			mensagem.innerText = "Opção 2 escolhida";
			break;
		case "opcao3":
			mensagem.innerText = "Opção 3 escolhida";
			break;
		default:
			mensagem.innerText = "Opção inválida";
			break;
	}
});
