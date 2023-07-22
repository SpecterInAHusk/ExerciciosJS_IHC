function maiorNumeroVetor() {
	var input = document.getElementById("vetor").value;
	var numeros = input.split(" ").map(Number);
	var maiorNumero = Math.max(...numeros);
	document.getElementById("resultado").innerHTML =
		"O maior número é: " + maiorNumero;
}
