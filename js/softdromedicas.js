console.log("test GMaps");

var map;
var markers = [];
//varible para objeto de informacion del marcador 
var infoWindowCustom;

//coordenadas iniciales
var lat=  7.8890971;
var lng= -72.49668959999997;
var urlMarker ;


//informacion y coordenada de sucursales
var sucursales = [
	['Dromedicas del Oriente SAS', 7.908388743984923, -72.491574883461, 'Avenida 11 Be # 8Bn - 10  Guaimaral', '5740075','5777762', 'CUCUTA','','', '', '', '', 1],
	['Farmanorte 01', 7.840764903473619, -72.5028133392334, 'Calle 33 Con Avenida 4 Esquina Brr La Sabana', '5808800','3167409253', 'LOS PATIOS','','6:30pm', '22:30', '7:30am', '22:30', 2],
	['Farmanorte 02', 7.923595410892432, -72.52201795578003, 'Avenida 5 Con Calle 2N Pescadero', '5780727','3166909962', 'CUCUTA','','8am', '23:30', '8am', '2pm', 3],
	['Farmanorte 03', 7.917091999388589, -72.49572694301605, 'Avenida 4 Con Calle 20An Esquina Brr Prados Del Norte', '5796888','3166909583', 'CUCUTA','true', '', '', '', '', 4],
	['Farmanorte 04', 7.9049350202970805, -72.51519441604614, 'Avenida Kennedy Con 2Da Esquina Brr La Victoria', '5787878','3183353570', 'CUCUTA','','7:30am', '21', '7:30am', '9pm', 5],
	['Farmanorte 05', 7.898048740341691, -72.52727508544922, 'Calle 2 Con Avenida 6 Esquina Brr Ceci', '5870555','3168309523', 'CUCUTA','true', '', '', '', '', 6],
	['Farmanorte 06', 7.87261944, -72.52802511, 'Avenida 26 Con Calle 28 Esquina Brr Belen', '5828280','3155888094', 'CUCUTA','true', '', '', '', '', 7],
	['Farmanorte 07', 7.8904609470678055, -72.49629020690918, 'Calle 8 # 1E-76 Junto Cafesalud La Salle', '5744094','3153437725', 'CUCUTA','true', '', '', '', '', 8],
	['Farmanorte 08', 7.373990247532279, -72.64909029006958, 'Crr 6 # 7-99 Calle Real', '5682217','3183437726', 'PAMPLONA','','7:30am', '22', '7:30am', '10pm', 9],
	['Farmanorte 09', 7.929875568608961, -72.50390768051147, 'Avenida 2 Con Calle 4 Esquina Brr Aeropuerto', '5818245','3166910544', 'CUCUTA','true', '', '', '', '', 10],
	['Farmanorte 10', 7.912830721471756, -72.48752474784851, 'Avenida Libertadores # 18N-181 Brr Santa Elena Bloques Del Zulima', '5776206','3155997099', 'CUCUTA','','7:30am', '22', '7:30am', '9pm', 11],
	['Farmanorte 11', 7.8871853, -72.49622654, 'Cll 11 Con Av 2E Esquina Diagonal C.C. Ventura Plaza', '5711737','3173643955', 'CUCUTA','true', '', '', '', '', 12],
	['Farmanorte 12', 7.88983925194856, -72.49102771282196, 'Av. 9E Con Cll 9 Esq Fte Col. Domingo Savio Brr La Riviera', '5751377','3185166993', 'CUCUTA','','7am', '22', '7am', '10pm', 13],
	['Farmanorte 13', 7.886720134976074, -72.51558065414429, 'Av 3E # 1-108 Local 1 Frente Al Parque La Ceiba', '577770','3185166990', 'CUCUTA','','8am', '21', '8am', '9pm', 14],
	['Farmanorte 14', 7.88912722, -72.51350731, 'Cll 6 # 13-61 Fte Ese Loma Bolivar', '5739782','3155120028', 'CUCUTA','true', '', '', '', '', 15],
	['Farmanorte 15', 7.91121118, -72.51772667, 'Avenida 0 # 4-68 Esquina Barrio Comuneros', '5796173','3154372258', 'CUCUTA','true', '', '', '', '', 16],
	['Farmanorte 16', 7.607999367664449, -72.59926557540894, 'Cll 3 # 3-34  Parq Prpal Chinacota', '5864324','3173660022', 'CHINACOTA','true', '', '', '', '', 17],
	['Farmanorte 17', 7.92706246, -72.51931541, 'Avenida 5 Con Calle 24 Ospina Perez Esquina', '5781108','3153084801', 'CUCUTA','true', '', '', '', '', 18],
	['Farmanorte 18', 7.88198692, -72.4986197, 'Avendad 1 #15-87 Barrio La Playa', '5710546','3176410633', 'CUCUTA','','7am', '21:30', '8am', '2pm', 19],
	['Farmanorte 19', 7.87879545, -72.49714686, 'Avenida 0 Con Calle 19 Esquina', '5831554','3174378532', 'CUCUTA','true', '', '', '', '', 20],
	['Farmanorte 20', 7.88715719, -72.5027738, 'Calle 10 Con Avenida 4 Esquina', '5730318','3175020642', 'CUCUTA','','7:30am', '20', '8am', '2pm', 21],
	['Farmanorte 21', 7.88680822, -72.5048961, 'Av 6 Con Calle 10# 5-94  Frente Al Parque Santander Centro', '5719113','3174380134', 'CUCUTA','','7am', '20', '8am', '2pm', 22],
	['Farmanorte 22', 8.23596841, -73.35418615, 'Calle 10 # 12-87 Frente Al Parque - Ocaña', '5691839','3153926643', 'OCAÑA','','7:30am', '21', '7:30am', '5pm', 23],
	['Farmanorte 23', 7.88755082, -72.50502387, 'Avenida 6 # 9-21', '5730526','3183380633', 'CUCUTA','','7am', '20', '8am', '2pm', 24],
	['Farmanorte 24', 7.88765518, -72.49848544, 'Avenida 0 · 10-14', '5711114','3175021518', 'CUCUTA','true', '', '', '', '', 25],
	['Farmanorte 25', 7.8666476, -72.49764258, 'Centro Cial Pinar Del Rio Local 10', '5842555','3174333572', 'CUCUTA','true', '', '', '', '', 26],
	['Farmanorte 26', 7.87187112, -72.52892628, 'Avenida 26 No 29-48 Br Belen', '5754140','3162331144', 'CUCUTA','','7:30am', '21:30', '7:30am', '9:30pm', 27],
	['Farmanorte 27', 7.91694492, -72.4727475, 'El Escobal, Anillo Vial, Plaza Del Este Local 6', '5847808','3188135356', 'CUCUTA','','7am', '22', '7am', '10pm', 28],
	['San Antonio del Norte', 7.88749215, -72.50609315, 'Av 7 Calle 9 Esquina Centro', '5727091','3155997098', 'CUCUTA','','7am', '20', '8am', '2pm', 29],

];

//metodo principa
function iniciar(){
	//crea el mapa con las coordenada iniciales y el zoom
	map = new GMaps({
		div: '#map',
		lat:  lat,
		lng:  lng,
		zoom: 14,
		zoomControl : true,
		// scrollwheel:false,		
		// panControl: false,
		// streetViewControl: true,
		mapTypeControl: false,
		// overviewMapControl: false,
		// clickable: false
	});
	//metodo para geolocalizacion y trazo de la ruta
	// findMe();
	//creando los marcadores
	createMarkers();
	//registrando manejo de evento de cierre de infowindow clic en el mapa	
	google.maps.event.addListener(map.map, "click", function() {
		// console.log('maneje el evento de click en el mapa');	
		map.hideInfoWindows();
	});
	
}//fin del metodo iniciar


function createMarkers(){
	//iteramos la coleccion de sucursales
	for (var i = 0; i < sucursales.length; i++) {
		//se crea un objeto coordenadas para crear nuestro marcador
		var coordenadas = new google.maps.LatLng(sucursales[i][1], sucursales[i][2]);
		//variables creadas para comparar determinar cual es la ppal
		var principal = new String(sucursales[i][0]);
		var sucursalt = new String('Dromedicas del Oriente SAS');
		
		if (principal.localeCompare(sucursalt) === 0) {	
		 	addMarkerWithTimeoutPpal(coordenadas, i * 100, 
										sucursales[i][0], i, sucursales[i][3]);			
		} else {
			addMarkerWithTimeout(coordenadas,	  //coordenadas del marker
								 i * 50,		  //temporizador para la caida
								 sucursales[i][0],//nombre de la sucursal
								 i, 			  //posicion en la coleccion
								 sucursales[i][3],//direccion
								 sucursales[i][4],//tel fijo 
								 sucursales[i][5],//celular
								 sucursales[i][6],//ciudad
								 sucursales[i][7],//24horas
								 sucursales[i][8],//apertura l-v
								 sucursales[i][9],//cierre l-v
								 sucursales[i][10],//apertura d-f
								 sucursales[i][11]//cierre apertura d-f
								);
		}
	} //fin del for
}//fin del metodo createMarkers


//anade el marcardor "Marker" al mapa y registra el evento click sobre el marcador
//para mostrar la informacion de la sucursal en un objeto InfoWindow
function addMarkerWithTimeout(position, timeout, suc, i, dir, telefono, celular, ciudad, _24H, aLV, cLV, aDF,cDF) {
		
		var contents = 
			'<div id="iw-container">' +
                '<div class="iw-title">'+
					'<img src="images/iconoFarmanorte.png" alt="logoFarmanorte">'+
					'<h3>Droguería '+ suc +'</h3>'+
				'</div>'+
				'<div class="iw-content">'+
						'<div class="row-content"><span class="icon-home"></span><div class="infocontent">'+ dir +'</div></div>'+
						'<div class="row-content"><a href="tel:(037)'+ telefono +'" class="footertext"><span class="icon-phone"></span><span class="infocontent">'+ telefono +'</span></a></div>'+	
						'<div class="row-content"><a href="tel:'+ celular +'" class="footertext"><span class="icon-mobile"></span><span class="infocontent">'+celular+'</span></a></div>'+	
						'<div class="row-content final"></div>'	+					
						'<div class="layoutcontent">'+
							'<div class="titlesection"><h3>Horarios</h3></div>';		
		
		var _24_horas= 	'<div class="_24horas"><h4>Servicicio 24 Horas</h4></div>';
						
		var complementoHora = 	'<div class="contentestado">'+
									'<div class="titleestado"><h4>Estado</h4></div>'+
									'<div class="infoestado"><i id="iconestado" class="zmdi zmdi-circle"></i>&nbsp;<span id="estadosuc"></span></div>'+
								'</div>'+
							'</div><!-- fin de layoutcontentbutton de horarios-->'+
						'</div><!-- fin de layoutcontent-->';
						
		var footer =	'<div class="row-content final"></div>'	+
						'<div class="layoutcontentbutton">'+
							'<div class="titlesection"><h3>Como Llegar</h3></div>'+
							'<div class="layoutcontentbutton">'+
								'<button class="buttonruta"><span class="zmdi zmdi zmdi-car zmdi-hc-2x"></span>&nbsp;&nbsp;En carro</button>'+
								'<button class="buttonruta"><i class="zmdi zmdi-walk zmdi-hc-2x"></i>&nbsp;&nbsp;Caminando</button>'+
								'<button class="buttonruta"><i class="zmdi zmdi-bus zmdi-hc-2x"></i>&nbsp;&nbsp;Bus</button>'+
							'</div>'+							
						'</div><!-- fin de layoutcontent-->'+						
					'</div><!--fin de contenedor de horarios -->'+
				'</div>'+
            '</div>';


        
        //con base en el dia comparamos el rango de horas icluyendo minutos
        //genero el contenido dinamicamente
        
        if( _24H === 'true'){
        	contents +=   _24_horas + complementoHora + footer ;
        	//registro del manejo de evento click para desplegar el objeto InfoWindow
			window.setTimeout(function(){
					//añadir un marker con GMap
					urlMarker = "images/markFarmaAbierto.png";
					var mark = map.createMarker ({	
					    position: position,
					    icon: urlMarker,
						title: suc,
						infoWindow: {content:contents, maxWidth:345,},
						animation: google.maps.Animation.DROP,
					});
					//obteniendo el infowindow del objeto GMap
					infoWindowCustom = mark.infoWindow;
					//editando el css del infowindow
					editCssInfoWindow();
					//añadiendo la marca al mapa	
					map.addMarker(mark);
					// markers.push(mark);
				}, i * 50);
        }else{        	
        	var fechaActual = new Date();
        	var horaActual = fechaActual.getHours();
        	var diaDeLaSemana = fechaActual.getDay();
        	var urlMarker2;
         	//valida si el dia actual esta entre lunes y Sabado
			if (diaDeLaSemana >= 0 && diaDeLaSemana <= 5) {
				var est;				
				if( (fechaActual.getHours() >= getRealHour(aLV).getHours()) && 
							 (fechaActual.getHours() < getRealHour(cLV).getHours()) ){
					urlMarker2 = "images/markFarmaAbierto.png";
					est = 'abierto';					
				}else{
					urlMarker2 = "images/markFarmaCerrado.png";
					est = 'cerrado';					
				}//fin del else 
				var hOrdinario ='<div class="layoutcontentbutton">'+
								'<div class="contentestado">'+
								'<input id="estadoSucursal" type="hidden" value="'+est+'">'+
									'<div class="titleestado"><h4>Lunes - Sabado</h4></div>'+
									'<div class="infoestado">' + formatAMPM(getRealHour(aLV)) + ' - ' + formatAMPM(getRealHour(cLV)) +'</div>'+
								'</div>'+
								'<div class="contentestado">'+
									'<div class="titleestado"><h4>Domingos - Festivos</h4></div>'+
									'<div class="infoestado">'+ formatAMPM(getRealHour(aDF)) +' - '+ formatAMPM(getRealHour(cDF)) +' </div>'+
								'</div>';
				contents += hOrdinario + complementoHora + footer;
				//registro del manejo 
				window.setTimeout(function() {
					//añadir un marker con GMap
					var markd = map.createMarker({
						position: position,
						icon: urlMarker2,
						title: suc,
						infoWindow: {
							content: contents,
							maxWidth: 330,
						},
						animation: google.maps.Animation.DROP,
					});
					//obteniendo el infowindow del objeto GMap
					infoWindowCustom = markd.infoWindow;
					//editando el css del infowindow
					editCssInfoWindowNormal();
					//añadiendo la marca al mapa	
					map.addMarker(markd);
					// markers.push(mark);
				}, i * 50);
			}//fin del if de horario
			
        }//fin del else	
}

//formato de hora 
function formatAMPM(date) {
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? '0' + minutes : minutes;
	var strTime = hours + ':' + minutes + ' ' + ampm;
	return strTime;
}


//recibe una hora como String y la retorna en formato hora
// puede recibir la hora en cualquier de esto formatos 
//'1:00 pm','1:00 p.m.','1:00 p','1:00pm','1:00p.m.','1:00p','1 pm','1 p.m.','1 p','1pm','1p.m.', '1p','13:00','13'
function getRealHour(stringHour){
	var time = stringHour.match(/(\d+)(?::(\d\d))?\s*(p?)/);
	var dateHour = new Date();
	dateHour.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
	dateHour.setMinutes(parseInt(time[2]) || 0);
	return dateHour;
}

//anade el marcardor "Marker" al mapa y registra el evento click sobre el marcador
//para mostrar la informacion de la sucursal en un objeto InfoWindow
function addMarkerWithTimeoutPpal(position, timeout, suc, i, dir, telefono, celular) {
		
		var contents = 
			'<div id="iw-container">' +
                '<div class="iw-titleppal">'+
					'<img src="images/iconoDromedicas.png" alt="logoFarmanorte">'+
					'<h3>'+ suc +'</h3>'+
				'</div>'+
				'<div class="iw-contentppal">'+
					'<p><span class="icon-home"></span>'+ dir +'</p>'+
					'<p><a href="tel:(037)'+ telefono +'" class="footertext"><span class="icon-phone"></span>'+ telefono +'</a></p>'+	
					'<p><a href="tel:3002692042" class="footertext"><span class="icon-mobile"></span>3002692042</a></p>'+	
					// '<h3>Horarios</h3>'+
					// '<p class="horario">24 Horas.</p>'+
				'</div>'+
            '</div>';
        
		//registro del manejo de evento click para desplegar el objeto InfoWindow
		window.setTimeout(function(){
					//añadir un marker con GMap
					var mark = map.createMarker ({	
					    position: position,
					    icon: "images/markDromedicas.png",
						title: 'Dromedicas del Oriente',
						infoWindow: {content:contents},
						animation: google.maps.Animation.DROP,
					});
					//obteniendo el infowindow del objeto GMap
					infoWindowCustom = mark.infoWindow;
					//editando el css del infowindow
					editCssInfoWindow();					
					//añadiendo la marca al mapa	
					map.addMarker(mark);
					// markers.push(mark);
			}, i * 50);
}


function clearMarkers() {
	for (var i = 0; i < markers.length; i++) {
		markers[i].setMap(null);
	}
	markers = [];
} //fin del metodo  clearMarkers


//Geolocalizacion y trazo de ruta
function findMe(){
	map.addControl({
		position: 'top_right',
		content: 'Mi ubicación',
		style: {
			margin: '5px',
			padding: '1px 6px',
			border: 'solid 1px #717B87',
			background: '#fff'
		},
		events: {
			click: function() {
				GMaps.geolocate({
					success: function(position) {
						map.setCenter(position.coords.latitude, position.coords.longitude);
					},
					error: function(error) {
						alert('Geolocation fallo: ' + error.message);
					},
					not_supported: function() {
						alert("Su navegador no soporta geolocalización");
					}
				})
			}
		}
	});

	GMaps.geolocate({
		success: function(position) {
			map.setCenter(position.coords.latitude, position.coords.longitude);
			map.setZoom(15);
			map.addMarker({
				title: 'Mi ubicación',
				lat: position.coords.latitude,
				lng: position.coords.longitude,
				// animation: google.maps.Animation.DROP,
			});

			map.drawRoute({
				origin: [position.coords.latitude, position.coords.longitude],
				destination: [7.908388743984923, -72.491574883461],
				travelMode: 'driving',
				strokeColor: '#E90525',
				strokeOpacity: 0.7,
				strokeWeight: 6
			});
		},
		error: function(error) {
			$('#geolocalizacion-info').css('display', 'block');
		},
		not_supported: function() {
			$('#geolocalizacion-info').css('display', 'block');
		}
	});
}

//Edicion del CSS para el objeto InfoWindows
function editCssInfoWindowNormal(){
			
	//Desde aca se comienza la manipulacion del DOM del objeto Info Window
	//nos apoyamos de jQuery
	google.maps.event.addListener(infoWindowCustom, 'domready', function() {
		console.log('editando el css del infoWindow+');

		// Reference to the DIV that wraps the bottom of infowindow
		var iwOuter = $('.gm-style-iw');
		iwOuter.children(':nth-child(1)').css({'display' : 'block'});		

		/* Since this div is in a position prior to .gm-div style-iw.
		* We use jQuery and create a iwBackground variable,
		* and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
		*/		
		var iwBackground = iwOuter.prev();		
		// Removes background shadow DIV
		iwBackground.children(':nth-child(2)').css({'display' : 'none'});
		// Removes white background DIV
		iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		// Moves the infowindow 115px to the right.
		iwOuter.parent().parent().css({left: '0px'});
		// Changes the desired tail shadow color.
		iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(0, 10, 123, .5) 0px 1px 6px', 'z-index' : '1'});
		// Reference to the div that groups the close button elements.
		var iwCloseBtn = iwOuter.next();
		// Apply the desired effect to the close button
		iwCloseBtn.css({opacity: '1', right: '38px', top: '3px', border: '7px solid rgba(0, 10, 123, 1.0)', 'border-radius': '5px', 'box-shadow': '0 0 5px rgba(0, 10, 123, .9)'});
		// If the content of infowindow not exceed the set maximum height, then the gradient is removed.
		// if($('.iw-content').height() < 140){
		// $('.iw-bottom-gradient').css({display: 'none'});
		// }
	    // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
	    iwCloseBtn.mouseout(function(){
	      $(this).css({opacity: '1'});
	    });

	    var estado = document.getElementById('estadoSucursal').value;
	    document.getElementById('estadosuc').innerHTML = '';
		if (estado === 'abierto') {
			abiertoCerrado = 'Abierto';
			var iconoAbierto = document.getElementById('iconestado');				
			iconoAbierto.setAttribute("class", "zmdi zmdi-circle iconestadoabierto");
			var infoes = document.getElementById('estadosuc');
			infoes.appendChild(document.createTextNode(abiertoCerrado));
		} else {
			var iconoCerrado = document.getElementById('iconestado');
			abiertoCerrado = 'Cerrado';
			iconoCerrado.setAttribute("class", "zmdi zmdi-circle iconestadocerrado");
			var infoes = document.getElementById('estadosuc');
			infoes.appendChild(document.createTextNode(abiertoCerrado));
		}
  	});
}// fin del metodo editCssInfoWindow


//Edicion del CSS para el objeto InfoWindows
function editCssInfoWindow(){
	// console.log('editando el css del infoWindow');		
	//Desde aca se comienza la manipulacion del DOM del objeto Info Window
	//nos apoyamos de jQuery
	google.maps.event.addListener(infoWindowCustom, 'domready', function() {
		console.log('editando el css del infoWindow');
		// Reference to the DIV that wraps the bottom of infowindow
		var iwOuter = $('.gm-style-iw');
		iwOuter.children(':nth-child(1)').css({'display' : 'block'});		

		/* Since this div is in a position prior to .gm-div style-iw.
		* We use jQuery and create a iwBackground variable,
		* and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
		*/		
		var iwBackground = iwOuter.prev();		
		// Removes background shadow DIV
		iwBackground.children(':nth-child(2)').css({'display' : 'none'});
		// Removes white background DIV
		iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		// Moves the infowindow 115px to the right.
		iwOuter.parent().parent().css({left: '0px'});
		// Changes the desired tail shadow color.
		iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(0, 10, 123, .5) 0px 1px 6px', 'z-index' : '1'});
		// Reference to the div that groups the close button elements.
		var iwCloseBtn = iwOuter.next();
		// Apply the desired effect to the close button
		iwCloseBtn.css({opacity: '1', right: '38px', top: '3px', border: '7px solid rgba(0, 10, 123, 1.0)', 'border-radius': '5px', 'box-shadow': '0 0 5px rgba(0, 10, 123, .9)'});
		// If the content of infowindow not exceed the set maximum height, then the gradient is removed.
		// if($('.iw-content').height() < 140){
		// $('.iw-bottom-gradient').css({display: 'none'});
		// }
	    // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
	    iwCloseBtn.mouseout(function(){
	      $(this).css({opacity: '1'});
	    });	
	    document.getElementById('estadosuc').innerHTML = '';
	    var iconoAbierto = document.getElementById('iconestado');				
			iconoAbierto.setAttribute("class", "zmdi zmdi-circle iconestadoabierto");
			var infoes = document.getElementById('estadosuc');
			infoes.appendChild(document.createTextNode("Abierto"));
  	});
}// fin del metodo editCssInfoWindow

window.addEventListener('load',iniciar,false);
