( function () {
	var texto1 = document.getElementById("texto1")
	texto1.innerHTML = "< video width='350' height='auto' controls > <br>"
	texto1.innerHTML += "< source src='videos/proxima_parada_estadio.mp4'/ >"
	texto1.innerHTML += "< /video > <br>"

	var texto2 = document.getElementById("texto2")
	texto2.innerHTML = "< video width='350' height='auto' controls > <br>"
	texto2.innerHTML += "< source src='videos/proxima_parada_estadio.ogv'/ > <br>"
	texto2.innerHTML += "< /video > <br>"

	var texto3 = document.getElementById("texto3")
	texto3.innerHTML = "< video width='350' height='auto' controls <br>"
	texto3.innerHTML += " < poster='images/cristo_rey_cali.jpg' ><br>"
	texto3.innerHTML += "< source src='videos/proxima_parada_estadio.mp4' /> <br>"
	texto3.innerHTML += "< /video > <br>"

	var texto4_html = document.getElementById("texto4_html")
	texto4_html.innerHTML += "//Código HTML<br><br>"
	texto4_html.innerHTML += "< div id='reproductor' ><br>"
	texto4_html.innerHTML += "< nav id='reproductor_nav' ><br>"
	texto4_html.innerHTML += "< div id='botones' ><br>"
	texto4_html.innerHTML += "< button type='button' id='reproducir' >Reproducir< /button ><br>"
	texto4_html.innerHTML += "< /div ><br>"
	texto4_html.innerHTML += "< div id='barra'><br>"
	texto4_html.innerHTML += "< div id='progreso'></div><br>"
	texto4_html.innerHTML += "< /div><br>"
	texto4_html.innerHTML += "< div style='clear: both' >< /div ><br>"
	texto4_html.innerHTML += "< /nav ><br>"
	texto4_html.innerHTML += "< video id='medio' width='350' height='auto' poster='images/0019-play.png' ><br>"
	texto4_html.innerHTML += "< source src='videos/proxima_parada_estadio.mp4'/><br>"
	texto4_html.innerHTML += "< /video ><br>"
	texto4_html.innerHTML += "< /div ><br>"
	texto4_html.innerHTML += "<br>"
}

)();
