var dividendo = document.getElementById( "txtDividendo" );
var divisor = document.getElementById( "txtDivisor" );
var respuesta = document.getElementById( "pRespuesta" );

var colorRojo = "#e74c3c";
var colorVerde = "#27ae60";
var colorAzul = "#2980b9";

$( document ).on( "ready", function () {
	$( document ).foundation();

	dividendo.focus();

	document.getElementById( "btnCalcular" ).addEventListener( "click", function () {
		if ( validando ( dividendo.value, divisor.value ) == false ) {
			respuesta.style.color = colorRojo;
			respuesta.innerHTML = "Ingresa un valor válido.";
		}else
		if ( validando ( dividendo.value, divisor.value ) == true ) {
			respuesta.style.color = colorVerde;
			respuesta.innerHTML = "<img alt='cargando' src='img/packman.GIF' />";

			calcular( dividendo.value, divisor.value );
		}
	} );
} );

/*	v1 es el dividendo y el v2 es el divisor*/
function validando ( v1, v2 ) {
	if ( isNaN( v1 ) || v1.length == 0 ) {
		return false;
	}
	if ( isNaN( v2 ) || v2.length == 0 ) {
		return false;
	}
	return true;
}
/*	v1 es el dividendo y el v2 es el divisor*/
function calcular ( v1, v2 ) {
	if ( v2 <= 0 ) {
		respuesta.style.color = colorRojo;
		respuesta.innerHTML = "El divisor debe ser mayor que 0";
		return false;
	}else{
		setTimeout( function () {
			respuesta.style.color = colorVerde;
			respuesta.innerHTML = "";
			var cociente = ( v1 / v2 );
			var residuo = ( v1 % v2 );

			console.log( parseInt( cociente ) );
			console.log( parseInt( residuo ) );

			respuesta.innerHTML = "Dividendo: " + parseInt( v1 ) + " <br />" +
			"Divisor: " + parseInt( v2 ) + " <br />" +
			"Cociente: " + parseInt( cociente ) + " <br />" +
			"Residuo: " + parseInt( residuo ) + " <br /><br />" +
			v1 + " = " + v2 + " * " + parseInt( cociente ) + " + " + parseInt( residuo );
		}, 1000 );
	}
}