( function () {
	var texto1 = document.getElementById("texto1")
	texto1.innerHTML = "< video width='350' height='auto' controls > <br>"
	texto1.innerHTML += "<<strong>source src='videos/proxima_parada_estadio.mp4'</strong>/> <br>"
	texto1.innerHTML += "< /video > <br>"

	var texto2 = document.getElementById("texto2")
	texto2.innerHTML = "< video width='350' height='auto' controls > <br>"
	texto2.innerHTML += "<<strong>source src='videos/proxima_parada_estadio.ogv'</strong>/> <br>"
	texto2.innerHTML += "< /video > <br>"

	var texto3 = document.getElementById("texto3")
	texto3.innerHTML = "< video width='350' height='auto' controls <br>"
	texto3.innerHTML += " <<strong>poster='images/cristo_rey_cali.jpg'</strong>><br>"
	texto3.innerHTML += "< source src='videos/proxima_parada_estadio.mp4' /> <br>"
	texto3.innerHTML += "< /video > <br>"

	var texto4_html = document.getElementById("texto4_html")
	texto4_html.innerHTML += "//Código HTML<br><br>"
	texto4_html.innerHTML += "< div id='reproductor' ><br>"
	texto4_html.innerHTML += "< nav id='reproductor_nav' ><br>"
	texto4_html.innerHTML += "< <strong>div id='botones'</strong> ><br>"
	texto4_html.innerHTML += "< <strong>button type='button' id='reproducir' >Reproducir< /button ></strong><br>"
	texto4_html.innerHTML += "< /div ><br>"
	texto4_html.innerHTML += "< <strong>div id='barra'</strong>><br>"
	texto4_html.innerHTML += "< <strong>div id='progreso'</strong>></div><br>"
	texto4_html.innerHTML += "< /div><br>"
	texto4_html.innerHTML += "< <strong>div style='clear: both' </strong>>< /div ><br>"
	texto4_html.innerHTML += "< /nav ><br>"
	texto4_html.innerHTML += "< video id='medio' width='350' height='auto' poster='images/0019-play.png' ><br>"
	texto4_html.innerHTML += "< source src='videos/proxima_parada_estadio.mp4'/><br>"
	texto4_html.innerHTML += "< /video ><br>"
	texto4_html.innerHTML += "< /div ><br>"
	texto4_html.innerHTML += "<br>"
}

)();
