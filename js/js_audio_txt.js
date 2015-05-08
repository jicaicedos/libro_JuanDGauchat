(
	function() {
		text = document.getElementById("texto_codigo")
		texto_codigo.innerHTML = "// Código HTML<br /><br />"
		texto_codigo.innerHTML += "< audio id='miaudio' width='200' ><br />"
		texto_codigo.innerHTML += "< source src='audios/Himno de Colombia.mp3' ></source ><br />"
		texto_codigo.innerHTML += "< source src='audios/Himno de Colombia.ogg' ></source ><br />"
		texto_codigo.innerHTML += "< /audio ><br />"
		texto_codigo.innerHTML += "< div id='reproductor_audio_barra' ><br />"
		texto_codigo.innerHTML += "< div id='progreso_audio' ></div ><br />"
		texto_codigo.innerHTML += "< /div ><br />"
		texto_codigo.innerHTML += "< p id='reproductor_audio_avance' >0:0:0< /p ><br />"
		texto_codigo.innerHTML += "< p id='reproductor_audio_duracion' >0:0:0< /p ><br>"
		texto_codigo.innerHTML += "<br>"
		texto_codigo.innerHTML += "// Código JavaScript del reproductor de audio<br>"
	}
)();