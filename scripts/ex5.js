
function exibeMensagem() {
    var letra = document.getElementById("letra").value;

	var resultado = document.getElementById("resultado");

    if (letra === "a") {
		resultado.innerHTML = "A";
        
    } else if (letra === "b"){
		resultado.innerHTML = "B";
        
    } else  {
		resultado.innerHTML = "Outra letra!";

    }
}