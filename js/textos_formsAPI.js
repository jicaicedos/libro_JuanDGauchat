(
	function () {
		
		fomularioUno()

		formularioDos()

		formularioTres()

	}
)();


// ==============================================================================
// El siguiente código hace funcionar el primer formulario haciendo uso del 
// evento "setCustomValidity" para establecer mensajes personalizados
// ==============================================================================

function fomularioUno() {
	// Elementos para el evento "setCustomValidity"
	pnombre = document.getElementById("pnombre")
	snombre = document.getElementById("snombre")
	apellido = document.getElementById("apellido")

	mostrarTextoAPI()

	pnombre.addEventListener("input", validacion, false)
	snombre.addEventListener("input", validacion, false)
	apellido.addEventListener("input", validacion, false)

	validacion()	
}

function validacion() {
	if( pnombre.value=="" && snombre.value=="" ) {
		pnombre.setCustomValidity("Por favor digite un nombre por lo menos")		
		pnombre.style.background = "#CCCEEE"
		snombre.style.background = "#CCCEEE"
	}	else {
		pnombre.setCustomValidity("")
		pnombre.style.background = "#FFF"
		snombre.style.background = "#FFF"
	}

	if( apellido.value=="" ) {
		apellido.setCustomValidity("Por favor digite el apellido")		
		apellido.style.background = "#CCCEEE"
	}	else {
		apellido.setCustomValidity("")
		apellido.style.background = "#FFF"
	}	
}

function cambiarRangoEdad() {
	salida = document.getElementById("rango")
	rangoCalculado = edad.value-20
	if( rangoCalculado < 20 ) {
		rangoCalculado = 0
		edad.value = 20
	}
	salida.innerHTML = rangoCalculado + " a " + edad.value
}

function mostrarTextoAPI() {
	texto_form_API = document.getElementById("texto_form_API")
	texto_form_API.innerHTML = "<strong>setCustomValidity(<em>mensaje</em>)</strong><br /><br />"
	texto_form_API.innerHTML += "Sirve para crear nuestros propios mensajes personalizados de Error<br />"
	texto_form_API.innerHTML += "<br /><br />"
	texto_form_API.innerHTML += "<strong>// Código JavaScript para controlar las entradas del usuario</strong><br />"
	texto_form_API.innerHTML += "pnombre = document.getElementById('pnombre')<br />"
	texto_form_API.innerHTML += "snombre = document.getElementById('snombre')<br />"
	texto_form_API.innerHTML += "apellido = document.getElementById('apellido')<br />"
	texto_form_API.innerHTML += "<br />"
	texto_form_API.innerHTML += "pnombre.addEventListener('input', validacion, false)<br />"
	texto_form_API.innerHTML += "snombre.addEventListener('input', validacion, false)<br />"
	texto_form_API.innerHTML += "apellido.addEventListener('input', validacion, false)<br />"
	texto_form_API.innerHTML += "<br /><br />"
	texto_form_API.innerHTML += "<strong>function validacion() {</strong><br /><br />"
	texto_form_API.innerHTML += "if( pnombre.value==' ' && snombre.value==' ' ) {<br />"
	texto_form_API.innerHTML += "pnombre.style.background = '#CCCEEE'<br />"
	texto_form_API.innerHTML += "} else {<br />"
	texto_form_API.innerHTML += "pnombre.setCustomValidity('')<br />"
	texto_form_API.innerHTML += "}<br /><br />"
	texto_form_API.innerHTML += "<strong>}</strong><br />"	
}





// ==============================================================================
// El siguiente código hace funcionar el segundo formulario haciendo uso del 
// evento "invalid"
// ==============================================================================

function formularioDos() {
	// Elementos para el evento "invalid" en el formulario "miFormularioEventInvalid"
	usuario = document.getElementById("usuario")
	usuario.setAttribute("pattern","[A-Za-z]{3,}")	

	edad = document.getElementById("edad")

	mostrarTextoEventInvalid()
	
	edad.addEventListener("change", cambiarRangoEdad, false)
	document.miFormularioEventInvalid.addEventListener("invalid", validacionEventInvalid, true)
	// document.getElementById("enviar").addEventListener("click", enviar, false)

	validacionEventInvalid()
}

function validacionEventInvalid( e ) {
	var elemento = e.target
	elemento.style.background = "#FFDDDD"
}

function mostrarTextoEventInvalid() {
	texto_event_invalid = document.getElementById("texto_event_invalid")
	texto_event_invalid.innerHTML = "El evento <strong>invalid</strong> <br /><br />"
	texto_event_invalid.innerHTML += "Lanza un evento si un campo es <strong>inválido</strong><br /><br />"
	texto_event_invalid.innerHTML += "<strong>// Código JavaScript</strong><br />"
	texto_event_invalid.innerHTML += "usuario = document.getElementById('usuario')<br />"
	texto_event_invalid.innerHTML += "<br /><em>// Agregamos mediante JavaScript una propiedad al <strong>input</strong> de usuario</em><br />"
	texto_event_invalid.innerHTML += "<strong>usuario.setAttribute('pattern','[A-Za-z]{3,}')</strong><br />"
	texto_event_invalid.innerHTML += "edad = document.getElementById('edad')<br />"
	texto_event_invalid.innerHTML += "mostrarTextoEventInvalid()<br />"
	texto_event_invalid.innerHTML += "edad.addEventListener('change', cambiarRangoEdad, false)<br />"
	texto_event_invalid.innerHTML += "<br /><em>// Usando el evento <strong>invalid</strong> sobre el formulario</em><br />"
	texto_event_invalid.innerHTML += "<strong>document.miFormularioEventInvalid.addEventListener('invalid', validacionEventInvalid, true)</strong><br />"
	texto_event_invalid.innerHTML += "validacionEventInvalid()<br /><br />"
	texto_event_invalid.innerHTML += "<em>// Función que controla el evento</em><br />"
	texto_event_invalid.innerHTML += "function validacionEventInvalid( e ) {<br />"
	texto_event_invalid.innerHTML += "var elemento = e.target<br />"
	texto_event_invalid.innerHTML += "elemento.style.background = '#FFDDDD'<br />"
	texto_event_invalid.innerHTML += "}<br />"
	texto_event_invalid.innerHTML += "<br />"
}

// =============================================================================
// 
// 
// =============================================================================
function formularioTres() {	
	usuario2 = document.getElementById("usuario2")	
	usuario2.addEventListener("input", controlarUsuario2, false)
	document.formularioTiempoReal.getElementById("enviar").addEventListener("click", enviar, false)
	document.formularioTiempoReal.addEventListener("input", controlarTiempoReal, false)
}

function controlarUsuario2() {
	alert("entro a:  controlarUsuario2")
}

function controlarTiempoReal( e ) {
	// alert("usuario correctamente ingresado: "+e.target)
	var elemen = e.target
	if( elemen.validity.valid ) {
		elemen.style.background = "#FFFFFF"
	} else {
		elemen.style.background = "#FFDDDD"
	}
}

//	Esta función sirve para controlar todo el formulario y solo envía el formulario cuando no haya
// 	datos inválidos.
// 
function enviar() {
	alert("entro a enviar")
	var valido = document.formularioTiempoReal.checkValidity()
	if ( valido ) {
		document.formularioTiempoReal.submit()
	}
	// else {
	// 	alert("Faltan datos -- No funciona bien")
	// }
}

function mostrarTextoTiempoReal() {
	texto_tiempo_real = document.getElementById("texto_tiempo_real")
	texto_tiempo_real += "<br />"
	texto_tiempo_real += "<br />"
	texto_tiempo_real += "<br />"
	texto_tiempo_real += "<br />"
	texto_tiempo_real += "<br />"
	texto_tiempo_real += "<br />"
	texto_tiempo_real += "<br />"
	texto_tiempo_real += "<br />"
	texto_tiempo_real += "<br />"
	texto_tiempo_real += "<br />"
}