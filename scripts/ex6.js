function somaMatriz() {
	var matrizInput = document.getElementById("matriz-input").value;
	var linhas = matrizInput.split("\n");
	var matriz = [];

	for (var i = 0; i < linhas.length; i++) {
		var elementosLinha = linhas[i].split(" ");
		matriz.push(elementosLinha);
	}

	var soma = 0;
	for (var i = 0; i < matriz.length; i++) {
		for (var j = 0; j < matriz[i].length; j++) {
			soma += parseInt(matriz[i][j]);
		}
	}

	var resultado = document.getElementById("resultado");
	resultado.innerHTML = "Soma dos elementos da matriz: " + soma;
}
