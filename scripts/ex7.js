function calcularFatorial() {
	var num = parseInt(document.getElementById("numeroInput").value);
	var fatorial = 1;

	for (var i = 1; i <= num; i++) {
		fatorial *= i;
	}

	document.getElementById("resultado").innerHTML =
		"Fatorial de " + num + " é: " + fatorial;
}
