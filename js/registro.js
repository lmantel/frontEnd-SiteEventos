function limpiarErrores() {

	var errores = document.getElementsByClassName("text-danger");
	for (var i = 0; i < errores.length; i++) {
		console.log(errores[i]);
		errores[i].innerHTML = "";
	}
}


// Hemos omitido los acentos en los comentarios por compatibilidad

function validar(formulario) {

	limpiarErrores();

	//Expresion regular del correo

	if (formulario.nombres.value.trim().length == 0) {
		document.getElementById("errornombres").innerText = "Campo obligatorio";
		document.getElementById("errorEmail").innerText = "Campo obligatorio";
		document.getElementById("errorContrasena").innerText = "Campo obligatorio";
		document.getElementById("errorConfirmacion").innerText = "Confirmación no coincide";
		document.getElementById("errorTipo").innerText = "Campo obligatorio";
		document.getElementById("errorAcepto").innerText = "Debe aceptar los términos y condiciones";
		formulario.nombres.focus();
		return false;
	}

	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (formulario.email.value.trim().length == 0) {
		document.getElementById("errorEmail").innerText = "Campo obligatorio";
		document.getElementById("errorContrasena").innerText = "Campo obligatorio";
		document.getElementById("errorConfirmacion").innerText = "No coincide con contraseña";
		document.getElementById("errorTipo").innerText = "Campo obligatorio";
		document.getElementById("errorAcepto").innerText = "Debe aceptar los términos y condiciones";
		formulario.email.focus();
		return false;
	}
	
	if (!re.test(formulario.email.value)) {
		document.getElementById("errorEmail").innerText = "Campo invalido";
		document.getElementById("errorContrasena").innerText = "Campo obligatorio";
		document.getElementById("errorConfirmacion").innerText = "No coincide con contraseña";
		document.getElementById("errorTipo").innerText = "Campo obligatorio";
		document.getElementById("errorAcepto").innerText = "Debe aceptar los términos y condiciones";
		formulario.email.focus();
		return false;
	}

	if (formulario.contrasena.value.trim().length == 0) {
		document.getElementById("errorContrasena").innerText = "Campo obligatorio";
		document.getElementById("errorConfirmacion").innerText = "No coincide con contraseña";
		document.getElementById("errorTipo").innerText = "Campo obligatorio";
		document.getElementById("errorAcepto").innerText = "Debe aceptar los términos y condiciones";
		formulario.contrasena.focus();
		return false;
	} 
	
	if (formulario.contrasena.value.trim().length < 7) {
		document.getElementById("errorContrasena").innerText = "Debe tener al menos 7 caracteres";
		document.getElementById("errorConfirmacion").innerText = "No coincide con contraseña";
		document.getElementById("errorTipo").innerText = "Campo obligatorio";
		document.getElementById("errorAcepto").innerText = "Debe aceptar los términos y condiciones";
		formulario.contrasena.focus();
		return false;
	}

	if (formulario.contrasena.value != formulario.confirmacion.value) {
		document.getElementById("errorConfirmacion").innerText = "No coincide con contraseña";
		document.getElementById("errorTipo").innerText = "Campo obligatorio";
		document.getElementById("errorAcepto").innerText = "Debe aceptar los términos y condiciones";
		formulario.confirmacion.focus();
		return false;
	}

	if (formulario.tipo.value == "") {
		document.getElementById("errorTipo").innerText = "Campo obligatorio";
		document.getElementById("errorAcepto").innerText = "Debe aceptar los términos y condiciones";
		formulario.tipo.focus();
		return false;
	}

	if (!formulario.acepto.checked) {
		document.getElementById("errorAcepto").innerText = "Debe aceptar los términos y condiciones";
		formulario.acepto.focus();
		return false;
	}

	alert("Datos enviados");

	return true;

}
