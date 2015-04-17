(
	function() {
	
		var texto_form = document.getElementById("texto_form")
		texto_form.innerHTML = "// Formulario  <br /><br />"
		texto_form.innerHTML += "<strong>< form name='miFormulario' autocomplete='on' id='miFormulario' method='get' ></strong> <br />"
		texto_form.innerHTML += "< input type='text' name='nombre' id='nombre' /> <br />"
		texto_form.innerHTML += "< input type='submit' value='Enviar' > <br />"
		texto_form.innerHTML += "<strong>< /form ></strong> <br />"
		
		texto_autocomplete = document.getElementById("texto_autocompletar")
		texto_autocomplete.innerHTML = "<br /><br /><br />Propiedad <strong><em>autocomplete</em></strong>"
		texto_autocomplete.innerHTML += " de <strong><em>form</em></strong><br /><br />"
		texto_autocomplete.innerHTML += "Valor <strong>on</strong> Funcion de completar<br />"
		texto_autocomplete.innerHTML += "Valor <strong>off</strong> Funcion de completar desactivada"

		texto_attrib_form = document.getElementById("texto_attrib_form")
		texto_attrib_form.innerHTML = "<em>< <strong>input</strong> type='search' name='formBusqueda' id='formBusqueda' <strong>form='formExterno'</strong> placeholder='input fuera del form' ></em><br><br>"
		texto_attrib_form.innerHTML += "< <strong>form</strong> name='formExterno' <strong>id='formExterno'</strong> method='get' ><br><br>"
		texto_attrib_form.innerHTML += "< input type='text' name='nombre2' id='nombre2' placeholder='input dentro del form' ><br><br>"
		texto_attrib_form.innerHTML += "< input type='submit' value='Enviar' ><br><br>"
		texto_attrib_form.innerHTML += "<strong>< /form ></strong><br>"

		texto_elemento_datalist = document.getElementById("texto_elemento_datalist")
		texto_elemento_datalist.innerHTML = "< <strong>datalist id='informacion'</strong> > <br />"
		texto_elemento_datalist.innerHTML += "< option value='3202130000' label='Telefono COL' ><br />"
		texto_elemento_datalist.innerHTML += "< option value='3168787444' label='Telefono MEX' ><br />"
		texto_elemento_datalist.innerHTML += "< /datalist ><br />"
		texto_elemento_datalist.innerHTML += "<br />"
		texto_elemento_datalist.innerHTML += "< input type='text' name='elemento_list' id='elemento_list' <strong>list='informacion'</strong> ><br />"
		texto_elemento_datalist.innerHTML += "<br /><br />"
		texto_elemento_datalist.innerHTML += "<strong>Otros elementos</strong><br /><br />"
		texto_elemento_datalist.innerHTML += "Elemento <strong>progress</strong> representa el progreso de una tarea<br /><br />"
		texto_elemento_datalist.innerHTML += "Elemento <strong>meter</strong> Similar a <strong>progress</strong> muestra una escala pero no de progreso<br /><br />"
		texto_elemento_datalist.innerHTML += "Elemento <strong>output</strong> ayuda a mostrar resultados del procesamiento de valores provistos por un formulario. "
		texto_elemento_datalist.innerHTML += "El atributo <strong>for</strong> asocia el elemento <strong>< output ></strong> con el elemento fuente. "
		texto_elemento_datalist.innerHTML += "Será referenciado y modificado con JavaScript<br />"
	}	
)();