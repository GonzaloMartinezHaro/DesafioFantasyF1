//Ejemplo de objeto de grandes premios se muestran solo los datos de la primera carreras
//y de forma incompleta 
//Primero:25	Segundo:18	Tercero:15	Cuarto:12	Quinto:10	
//Sexto:8	Septimo:6	Octavo:4	Noveno:2	Décimo:1	
var grandesPremios = {
	description : 'Grandes Premios de F1',
	carreras : [
		{id:1, posiciones:[ {piloto:4,puntos:25},{piloto:2,puntos:18},{piloto:1,puntos:15} ]},
		{id:2, posiciones :[ {piloto:2,puntos:25},{piloto:11,puntos:18},{piloto:15,puntos:15} ]}
	]	
}
//Ejemplo del objeto pilotos, inicialmente se tienen que cargar todos con rol libre y 
//en propiedad jugador no deben tener ninguno asignado.
var pilotos = {
	piloto : [
	{id:1,nombre:'Alexsander',apellidos:'Albon',nacionalidad:'',propiedadJugador: 2, rol:'Suplete'},
	{id:2,nombre:'Carlos',apellidos:'Sainz',nacionalidad:'',propiedadJungador: '',rol:'Libre'},
	]}
	
	
	