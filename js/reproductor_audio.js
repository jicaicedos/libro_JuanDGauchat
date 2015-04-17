/*
*	Funcion principal que inicia el reproductor elaborado
*	con componentes HTML5 y usando los métodos, propiedades
*	de JavaScript para manejar audio
*/
(
	function () {
		barra = document.getElementById("reproductor_audio_barra")
		progreso = document.getElementById("progreso_audio")
		reproducir = document.getElementById("reproductor_audio_reproducir")
		audio = document.getElementById("miaudio")
		duracion_avance = document.getElementById("reproductor_audio_avance")
		duracion = document.getElementById("reproductor_audio_duracion")
		maximo = 200

		reproducir.addEventListener("click", presionar, false)
		barra.addEventListener("click", mover, false)
	}
)();

/*
*	Funcion que maneja el evento para llevar a cabo para reproducir
*	el audio
*/
function presionar() {
	mostrarDuracion(audio.duration, duracion)
	if( !audio.ended && !audio.paused ) {
		audio.pause()
		reproducir.innerHTML = "Reproducir"
		window.clearInterval(bucle)
	} else {
		audio.play()
		reproducir.innerHTML = "Pausar"
		bucle = setInterval(estado, 1000)
	}	
}

/*
*	Funcion que pinta en la pagina el avance del video
*/
function estado() {
	mostrarDuracion(audio.currentTime, duracion_avance)
	if( !audio.paused && !audio.ended ) {
		avance = Math.floor( (audio.currentTime*maximo)/audio.duration )
		progreso.style.width = avance + "px"		
	} else {
		progreso.style.width = "0px"
		reproducir.innerHTML = "Reproducir"
		window.clearInterval(bucle)
	}
}

/*
*	Funcion para detectar el punto desde donde se reproducirá el audio
*	Se encarga de reiniciar el audio desde un momento donde el usuario
*	de clic sobre la barra de desplazamiento
*/

function mover(e) {
	// Obtenemos mediante la interfaz gráfica el punto donde el usuario
	// quiere reproducir el audio. Dado en pixeles
	valProgreso = parseInt(e.pageX) - barra.offsetLeft	
	// Tomamos el valor de los pixeles y calculamos el momento (el tiempo en segundos)
	// donde el usuario desea reproducir el audio
	audio.currentTime = Math.floor( (valProgreso * audio.duration)/maximo )
	// Se pinta la cantidad de pixeles de la barra de avance del audio
	progreso.style.width = valProgreso + "px"
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
