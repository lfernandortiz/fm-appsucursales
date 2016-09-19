console.log("test GMaps");

var map;
var markers = [];
//varible para objeto de informacion del marcador 
var infoW;

function iniciar(){
	//crea el mapa con las coordenada iniciales y el zoom
	map = new GMaps({
		div: '#map',
		lat: 7.8890971,
		lng: -72.49668959999997,
		zoom: 13
	});



	var contents = 
			'<div id="iw-container">' +
                '<div class="iw-title">'+
					'<img src="images/iconoFarmanorte.png" alt="logoFarmanorte">'+
					'<h3>Droguería '+ 'Farmanorte 10' +'</h3>'+
				'</div>'+
				'<div class="iw-content">'+
					'<p><span class="icon-home"></span>'+ 'cerca de aca' +'</p>'+
					'<p><a href="tel:(037)'+ '575555' +'" class="footertext"><span class="icon-phone"></span>'+ '5755555' +'</a></p>'+	
					'<p><a href="tel:3002692042" class="footertext"><span class="icon-mobile"></span>3002692042</a></p>'+	
					'<h3>Horarios</h3>'+
					'<p class="horario">24 Horas.</p>'+
				'</div>'+
            '</div>';

    var infoW = new google.maps.InfoWindow();

	google.maps.event.addListener(map, 'click', function() {
		infowindow.close();
	});

	infoW.setContent(contents);
	//añadir un marker con GMap
	var mark = map.createMarker ({	
	    lat: 7.908388743984923 ,  
	    lng: -72.491574883461,
	    icon: "images/markDromedicas.png",
		title: 'Dromedicas del Oriente',
		infoWindow: {content:contents},
	});
	var infoWindowCustom = mark.infoWindow;
	//Desde aca se comienza la manipulacion del DOM del objeto Info Window
	//nos apoyamos de jQuery
	google.maps.event.addListener(infoWindowCustom, 'domready', function() {
		// Reference to the DIV that wraps the bottom of infowindow
		var iwOuter = $('.gm-style-iw');
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
  	});
	map.addMarker(mark);




	

	

}//fin del metodo iniciar

window.addEventListener('load',iniciar,false);
