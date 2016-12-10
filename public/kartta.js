var map;
       var helsinki = new google.maps.LatLng(60.1704191, 24.9521651);

       var valkosaari = new google.maps.LatLng(60.1614, 24.9659);

       var rantsu = new google.maps.LatLng(60.1882462,24.8370535);

       function initialize() {

           var roadAtlasStyles = [
 {
     "featureType": "road.highway",
     "elementType": "geometry",
     "stylers": [
       { "saturation": -100 },
       { "lightness": -8 },
       { "gamma": 1.18 }
     ]
 }, {
     "featureType": "road.arterial",
     "elementType": "geometry",
     "stylers": [
       { "saturation": -100 },
       { "gamma": 1 },
       { "lightness": -24 }
     ]
 }, {
     "featureType": "poi",
     "elementType": "geometry",
     "stylers": [
       { "saturation": -100 }
     ]
 }, {
     "featureType": "administrative",
     "stylers": [
       { "saturation": -100 }
     ]
 }, {
     "featureType": "transit",
     "stylers": [
       { "saturation": -100 }
     ]
 }, {
     "featureType": "water",
     "elementType": "geometry.fill",
     "stylers": [
       { "saturation": -100 }
     ]
 }, {
     "featureType": "road",
     "stylers": [
       { "saturation": -100 }
     ]
 }, {
     "featureType": "administrative",
     "stylers": [
       { "saturation": -100 }
     ]
 }, {
     "featureType": "landscape",
     "stylers": [
       { "saturation": -100 }
     ]
 }, {
     "featureType": "poi",
     "stylers": [
       { "saturation": -100 }
     ]
 }, {
 }
           ]

           var mapOptions = {
               zoom: 14,
               center: helsinki,
               mapTypeControlOptions: {
                   mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'usroadatlas']
               },
               gestureHandling: 'cooperative',
               scrollwheel: false
           };

           map = new google.maps.Map(document.getElementById('map-canvas'),
               mapOptions);

          var marker = new google.maps.Marker({
            position: helsinki,
            map: map
          });

          var markerValkosaari = new google.maps.Marker({
            position: valkosaari,
            map: map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png'
          });

          var markerRantsu = new google.maps.Marker({
            position: rantsu,
            map: map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png'
          });

          marker.setIcon('http://maps.google.com/mapfiles/ms/icons/purple-dot.png')

           var styledMapOptions = {

           };

           var usRoadMapType = new google.maps.StyledMapType(
               roadAtlasStyles, styledMapOptions);

           map.mapTypes.set('usroadatlas', usRoadMapType);
           map.setMapTypeId('usroadatlas');
       }

       google.maps.event.addDomListener(window, 'load', initialize);
