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
	texto.innerHTML = "function <strong>hacerClic()</strong> {<br>"
	texto.innerHTML += "	var lista = <br>"
	texto.innerHTML += "<strong>document.querySelectorAll('.resultado p')</strong><br>"
	texto.innerHTML += "	for (var i = 0; i < lista.length; i++) {<br>"
	texto.innerHTML += "		lista[i].onclick=<strong>mostrarAlerta</strong><br>"
	texto.innerHTML += "	}<br>"
	texto.innerHTML += "}<br><br>"
	texto.innerHTML += "function <strong>mostrarAlerta()</strong> {<br>"
	texto.innerHTML += "	alert('Hizo clic')<br>"
	texto.innerHTML += "}<br><br>"
	texto.innerHTML += "<strong>window.onload = hacerClic</strong><br>"	

	var texto = document.querySelector("#texto2")
	texto.innerHTML = "Este es el segundo <strong><em>article 1</em></strong> por eso debemos usar el indice = 1 <br><br>"
	texto.innerHTML += "function hacerClic() {<br>"
	texto.innerHTML += "var lista = <br>"
	texto.innerHTML += "<strong>document.getElementsByClassName('resultado')[1].querySelectorAll('p')</strong><br>"
	texto.innerHTML += "	for (var i = 0; i < lista.length; i++) {<br>"
	texto.innerHTML += "		lista[i].onclick=mostrarAlerta<br>. . ."

}

window.onload = hacerClic