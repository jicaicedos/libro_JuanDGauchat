(
	function() {
	
		var texto_form = document.getElementById("texto_form")
		texto_form.innerHTML = "// Formulario  <br /><br />"
		texto_form.innerHTML += "< form name='miFormulario' autocomplete='on' id='miFormulario' method='get' > <br />"
		texto_form.innerHTML += "< input type='text' name='nombre' id='nombre' /> <br />"
		texto_form.innerHTML += "< input type='submit' value='Enviar' > <br />"
		texto_form.innerHTML += "< /form > <br />"
		
		texto_autocomplete = document.getElementById("texto_autocompletar")
		texto_autocomplete.innerHTML = "<br /><br /><br />Propiedad <em>autocomplete</em>"
		texto_autocomplete.innerHTML += " de <em>form</em><br /><br />"
		texto_autocomplete.innerHTML += "Valor on Funcion de completar<br />"
		texto_autocomplete.innerHTML += "Valor off Funcion de completar desactivada"

		texto_attrib_form = document.getElementById("texto_attrib_form")
		texto_attrib_form.innerHTML = "<em>< input type='search' name='formBusqueda' id='formBusqueda' form='formExterno' placeholder='input fuera del form' ></em><br><br>"
		texto_attrib_form.innerHTML += "< form name='formExterno' id='formExterno' method='get' ><br><br>"
		texto_attrib_form.innerHTML += "< input type='text' name='nombre2' id='nombre2' placeholder='input dentro del form' ><br><br>"
		texto_attrib_form.innerHTML += "< input type='submit' value='Enviar' ><br><br>"
		texto_attrib_form.innerHTML += "< /form ><br>"

		texto_elemento_datalist = document.getElementById("texto_elemento_datalist")
		texto_elemento_datalist.innerHTML = "< datalist id='informacion' > <br />"
		texto_elemento_datalist.innerHTML += "< option value='3202130000' label='Telefono COL' ><br />"
		texto_elemento_datalist.innerHTML += "< option value='3168787444' label='Telefono MEX' ><br />"
		texto_elemento_datalist.innerHTML += "< /datalist ><br />"
		texto_elemento_datalist.innerHTML += "<br />"
		texto_elemento_datalist.innerHTML += "< input type='text' name='elemento_list' id='elemento_list' list='informacion' ><br />"
		texto_elemento_datalist.innerHTML += "<br /><br />"
		texto_elemento_datalist.innerHTML += "Otros elementos<br /><br />"
		texto_elemento_datalist.innerHTML += "Elemento progress representa el progreso de una tarea<br /><br />"
		texto_elemento_datalist.innerHTML += "Elemento meter Similar a progress muestra una escala pero no de progreso<br /><br />"
		texto_elemento_datalist.innerHTML += "Elemento output ayuda a mostrar resultados del procesamiento de valores provistos por un formulario. "
		texto_elemento_datalist.innerHTML += "El atributo for asocia el elemento < output > con el elemento fuente. "
		texto_elemento_datalist.innerHTML += "Será referenciado y modificado con JavaScript<br />"
	}	
)();