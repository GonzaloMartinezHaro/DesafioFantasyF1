
if (!sessionStorage.getItem('primeraVisita')) {



var grandesPremios = {
	description : 'Grandes Premios de F1',
	carreras : [
		{id:1, posiciones : [ 
            {piloto:5,puntos:25},
            {piloto:2,puntos:18},
            {piloto:1,puntos:15},
            {piloto:11,puntos:12},
            {piloto:15,puntos:10},
            {piloto:3,puntos:8},
            {piloto:5,puntos:6},
            {piloto:6,puntos:4},
            {piloto:7,puntos:2},
            {piloto:8,puntos:1}
        ]},
		{id:2, posiciones : [ 
            {piloto:3,puntos:25},
            {piloto:2,puntos:18},
            {piloto:1,puntos:15},
            {piloto:11,puntos:12},
            {piloto:5,puntos:10},
            {piloto:12,puntos:8},
            {piloto:9,puntos:6},
            {piloto:19,puntos:4},
            {piloto:13,puntos:2},
            {piloto:10,puntos:1}
        ]},
        {id:3, posiciones : [ 
            {piloto:5,puntos:25},
            {piloto:2,puntos:18},
            {piloto:1,puntos:15},
            {piloto:11,puntos:12},
            {piloto:15,puntos:10},
            {piloto:13,puntos:8},
            {piloto:9,puntos:6},
            {piloto:16,puntos:4},
            {piloto:17,puntos:2},
            {piloto:16,puntos:1}
        ]},
        {id:4, posiciones : [ 
            {piloto:2,puntos:25},
            {piloto:11,puntos:18},
            {piloto:15,puntos:15},
            {piloto:4,puntos:12},
            {piloto:1,puntos:10},
            {piloto:3,puntos:8},
            {piloto:5,puntos:6},
            {piloto:6,puntos:4},
            {piloto:7,puntos:2},
            {piloto:8,puntos:1}
        ]}
	]	
}
//Ejemplo del objeto pilotos, inicialmente se tienen que cargar todos con rol libre y 
//en propiedad jugador no deben tener ninguno asignado.
var pilotos = {
	piloto : [
	{id:1,nombre:'Alexsander',apellidos:'Albon',nacionalidad:'Tailandia',propiedadJugador: '', rol:'Libre'},
	{id:2,nombre:'Carlos',apellidos:'Sainz',nacionalidad:'España',propiedadJungador: '',rol:'Libre'},
    {id:3,nombre:'Charles',apellidos:'Leclerc',nacionalidad:'Monaco',propiedadJungador: '',rol:'Libre'},
    {id:4,nombre:'Esteban',apellidos:'Ocon',nacionalidad:'Frances',propiedadJungador: '',rol:'Libre'},
    {id:5,nombre:'Fernando',apellidos:'Alonso',nacionalidad:'España',propiedadJungador: '',rol:'Libre'},
    {id:6,nombre:'George',apellidos:'Rusell',nacionalidad:'Gran Bretaña',propiedadJungador: '',rol:'Libre'},
    {id:7,nombre:'Guanyu',apellidos:'Zhou',nacionalidad:'China',propiedadJungador: '',rol:'Libre'},
    {id:8,nombre:'Kevin',apellidos:'Magnussen',nacionalidad:'Dinamarca',propiedadJungador: '',rol:'Libre'},
    {id:9,nombre:'Lance',apellidos:'Stroll',nacionalidad:'Canada',propiedadJungador: '',rol:'Libre'},
    {id:10,nombre:'Lando',apellidos:'Norris',nacionalidad:'Gran Bretaña',propiedadJungador: '',rol:'Libre'},
    {id:11,nombre:'Lewis',apellidos:'Hamilton',nacionalidad:'Gran Bretaña',propiedadJungador: '',rol:'Libre'},
    {id:12,nombre:'Logan',apellidos:'Sargeant',nacionalidad:'Estados Unidos',propiedadJungador: '',rol:'Libre'},
    {id:13,nombre:'Max',apellidos:'Verstappen',nacionalidad:'Paises Bajos',propiedadJungador: '',rol:'Libre'},
    {id:14,nombre:'Nico',apellidos:'Hulkenberg',nacionalidad:'Alemania',propiedadJungador: '',rol:'Libre'},
    {id:15,nombre:'Nyck',apellidos:'de Vries',nacionalidad:'Paises Bajos',propiedadJungador: '',rol:'Libre'},
    {id:16,nombre:'Oscar',apellidos:'Piastri',nacionalidad:'Australia',propiedadJungador: '',rol:'Libre'},
    {id:17,nombre:'Pierre',apellidos:'Gasly',nacionalidad:'Frances',propiedadJungador: '',rol:'Libre'},
    {id:18,nombre:'Sergio',apellidos:'Perez',nacionalidad:'Mexico',propiedadJungador: '',rol:'Libre'},
    {id:19,nombre:'Valtteri',apellidos:'Bottas',nacionalidad:'Finlandia',propiedadJungador: '',rol:'Libre'},
    {id:20,nombre:'Yuki',apellidos:'Tsunoda',nacionalidad:'Japon',propiedadJungador: '',rol:'Libre'},
	]}

    var datosUsuarioString = sessionStorage.getItem("usuarios");
    var datosUsuario = JSON.parse(datosUsuarioString);

    var bot1 =  {id:2, usuario: 'bot1', nombre : 'bot1', apellido: 'bot1', contrasena: null, correo: null, puntos: 0 }
    var bot2 =  {id:3, usuario: 'bot2', nombre : 'bot2', apellido: 'bot2', contrasena: null, correo: null, puntos: 0 }

    datosUsuario.usuario.push(bot1);
    datosUsuario.usuario.push(bot2);

    
    sessionStorage.setItem("usuarios", JSON.stringify(datosUsuario));
    

    sessionStorage.setItem('primeraVisita', 'true');                                                 
 }


    var contadorNoticias = 0;

    var carreras = {
        carrera : [
            {id:1, carrera: 'GP de España', lugar: 'Montmeló', descripcion: 'Increible circuito etc.', foto : '../img/gpEspaña.jpg'},
            {id:2, carrera: 'GP de Monaco', lugar: 'Montecarlo', descripcion: 'Increible circuito etc.', foto : '../img/gpMonaco.jpg'},
            {id:3, carrera: 'GP de Austria', lugar: 'Red Bull Ring', descripcion: 'Increible circuito etc.', foto : '../img/austriagp.jpg'},
            {id:4, carrera: 'GP de GranBretaña', lugar: 'Silverstone', descripcion: 'Increible circuito etc.', foto : '../img/gpGranBretaña.jpg'}
        ]

    }

    var carreraTxt = document.getElementById('carrera');
    var lugarTxt = document.getElementById('lugar');
    var descripcion = document.getElementById('descripcion');
    var img = document.getElementById('imagen');
   
    
    var carreraActual = carreras.carrera[contadorNoticias];
    
    carreraTxt.textContent = carreraActual.carrera;
    lugarTxt.textContent = 'Lugar: ' + carreraActual.lugar;
    descripcion.textContent = 'Descripción: ' + carreraActual.descripcion;
    img.innerHTML = '<img src=' + carreraActual.foto + ' alt="Foto de la carrera">';


     function asignarPilotos() {
        var pilotosAsignados = [];
        var pilotosDisponibles = pilotos.piloto.filter(function(piloto) {
            return piloto.propiedadJugador === '';
        });
        var usuariosDisponibles = datosUsuario.usuario.filter(function(usuario) {
            return usuario.id !== 0; // Exclude the first user with id 1
        });
        var numPilotosAsignados = 0;
        while (numPilotosAsignados < 2) {
            var randomPilotoIndex = Math.floor(Math.random() * pilotosDisponibles.length);
            var randomUsuarioIndex = Math.floor(Math.random() * usuariosDisponibles.length);
            var piloto = pilotosDisponibles[randomPilotoIndex];
            var usuario = usuariosDisponibles[randomUsuarioIndex];
            piloto.propiedadJugador = usuario.id;
            pilotosAsignados.push(piloto);
            pilotosDisponibles.splice(randomPilotoIndex, 1);
            usuariosDisponibles.splice(randomUsuarioIndex, 1);
            numPilotosAsignados++;
        }
        if (pilotosAsignados.length > 0) {
            pilotosAsignados[0].rol = 'Titular';
        }
        if (pilotosAsignados.length > 1) {
            pilotosAsignados[1].rol = 'Suplente';
        }
        console.log('Pilotos asignados:', pilotosAsignados);
        
    }

    
  