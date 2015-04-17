/*
*	Funcion principal que inicia el reproductor elaborado
*	con componentes HTML5 y usando los métodos, propiedades
*	de JavaScript para manejar video
*/
(
	function () {
		maximo = 350
		medio = document.getElementById("medio")
		barra = document.getElementById("barra")
		reproducir = document.getElementById("reproducir")
		progreso = document.getElementById("progreso")
		duracion_avance = document.getElementById("reproductor_video_avance")		
		duracion = document.getElementById("reproductor_video_duracion")

		reproducir.addEventListener("click", presionar, false)
		barra.addEventListener("click", mover, false)		
	}

)();

/*
*	Funcion que maneja el evento para llevar a cabo para reproducir
*	el video
*/
function presionar() {	

	mostrarDuracion(medio.duration, duracion)
	// if ( medio.canPlayType("mp4")) {  // BUSCAR COMO USAR EL METODO ==> canPlayType
	if( !medio.paused && !medio.ended ) {
		medio.pause()
		reproducir.innerHTML = "Reproducir"
		window.clearInterval(bucle)
	} else {		
		medio.play()
		reproducir.innerHTML = "Pausar"
		bucle = setInterval(estado, 1000)
	}
	// } else {
	// 	alert("El video no se puede reproducir. Formato no válido")
	// }
}

function mostrarDuracion(segs, duracion) {

	// Calcula el tiempo del medio video/audio
	var segundos = parseInt(segs)	

	// Obtenemos la cantidad de horas
	var horas = Math.floor(segundos/3600)	

	segundos = Math.floor(segundos%3600)
	
	// Calculamos la cantidad de minutos a partir de los segundos restantes
	var minutos = Math.floor(segundos/60)
	
	// Calculamos la cantidad de segundos
	segundos = Math.floor(segundos%60)

	duracion.innerHTML = horas+":"+minutos+":"+segundos
}

/*
*	Funcion que pinta en la pagina el avance del video
*/
function estado() {
	mostrarDuracion(medio.currentTime,duracion_avance)
	if( !medio.ended ) {		
		var total = parseInt( medio.currentTime*maximo/medio.duration )
		progreso.style.width = total + "px"
	} else {
		total = parseInt( medio.currentTime*maximo/medio.duration )
		progreso.style.width = total + "px"
		reproducir.innerHTML = "Reproducir"
		window.clearInterval(bucle)
	}	
}

/*
*	Funcion para detectar el punto desde donde se reproducirá el video
*	Se encarga de reiniciar el video desde un momento donde el usuario
*	de clic sobre la barra de desplazamiento
*/
function mover(e) {	
	// if( !medio.paused && !medio.ended ) {
	var ratonX = e.pageX - barra.offsetLeft
	var nuevoTiempo = ratonX * medio.duration / maximo
	medio.currentTime = nuevoTiempo
	progreso.style.width = ratonX + "px"		
	// }
}

