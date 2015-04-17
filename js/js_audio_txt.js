(
	function() {
		text = document.getElementById("texto_codigo")
		texto_codigo.innerHTML = "// Código HTML<br /><br />"
		texto_codigo.innerHTML += "<strong>< audio id='miaudio' width='200' ></strong><br />"
		texto_codigo.innerHTML += "<strong>< source src='audios/Himno de Colombia.mp3' ></source ></strong><br />"
		texto_codigo.innerHTML += "<strong>< source src='audios/Himno de Colombia.ogg' ></source ></strong><br />"
		texto_codigo.innerHTML += "<strong>< /audio ></strong><br />"
		texto_codigo.innerHTML += "<strong>< div id='reproductor_audio_barra' ></strong><br />"
		texto_codigo.innerHTML += "<strong>< div id='progreso_audio' ></div ></strong><br />"
		texto_codigo.innerHTML += "<strong>< /div ></strong><br />"
		texto_codigo.innerHTML += "<strong>< /nav ></strong><br />"
		texto_codigo.innerHTML += "<strong>< p id='reproductor_audio_avance' >0:0:0< /p ></strong><br />"
		texto_codigo.innerHTML += "<strong>< p id='reproductor_audio_duracion' >0:0:0< /p ></strong><br>"
		texto_codigo.innerHTML += "<strong></strong><br>"
		texto_codigo.innerHTML += "// Código JavaScript del reproductor de audio<br>"
	}
)();