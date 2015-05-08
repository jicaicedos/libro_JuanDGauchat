function hacerClic() {
	var lista = document.querySelectorAll('.resultado p')
	for (var i = 0; i < lista.length; i++) {
		lista[i].onclick=mostrarAlerta
	};	

	// Para colocar eventos en la Opcion 2
	lista = document.getElementsByClassName('resultado')[1].querySelectorAll('p')
	for (var i = 0; i < lista.length; i++) {
		lista[i].onclick=mostrarAlerta
	};	
	// Texto en la pagina Web
	mostrarTexto()
}

function mostrarAlerta() {
	alert("Hizo clic")
}

function mostrarTexto() {
	var texto = document.querySelector("#texto1")
	texto.innerHTML = "function hacerClic() {<br>"
	texto.innerHTML += "	var lista = <br>"
	texto.innerHTML += "document.querySelectorAll('.resultado p')<br>"
	texto.innerHTML += "	for (var i = 0; i < lista.length; i++) {<br>"
	texto.innerHTML += "		lista[i].onclick=mostrarAlerta<br>"
	texto.innerHTML += "	}<br>"
	texto.innerHTML += "}<br><br>"
	texto.innerHTML += "function mostrarAlerta() {<br>"
	texto.innerHTML += "	alert('Hizo clic')<br>"
	texto.innerHTML += "}<br><br>"
	texto.innerHTML += "window.onload = hacerClic<br>"	

	var texto = document.querySelector("#texto2")
	texto.innerHTML = "Este es el segundo <em>article 1</em> por eso debemos usar el indice = 1 <br><br>"
	texto.innerHTML += "function hacerClic() {<br>"
	texto.innerHTML += "var lista = <br>"
	texto.innerHTML += "document.getElementsByClassName('resultado')[1].querySelectorAll('p')<br>"
	texto.innerHTML += "	for (var i = 0; i < lista.length; i++) {<br>"
	texto.innerHTML += "		lista[i].onclick=mostrarAlerta<br>. . ."

}

window.onload = hacerClic