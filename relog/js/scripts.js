$(document).ready(function(){
	$('.tecla').click(function(){
		if ($(this).text() != "C" && $(this).text() != "=") 
			// si la tecla que pulsamos no es ni 'C' ni '=' entonces con 'append' añadimos el valor 
			// de la tecla en la casilla resultado 
	 {
$("#resultado").append($(this).text());
}
if ($(this).text() == "=")
	//si la tecla pulsada es '=' entonces lanzamos la operación
{

	$("#resultado").each( function(){
		operacion = $("#resultado").text();
		total = "";
	})
operacion = $("#resultado").text();
total = "";
total = total + operacion;

$("#resultado").text(eval(total));  // con eval hacemos que se efectue la operación que deseamos
}
if($(this).text() == "C") // borramos el contenido de la casilla de resultado
{
$("#resultado").text("");
}
	})

	
})