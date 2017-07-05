        function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 12.9716, lng: 77.5946},
          zoom: 13
        });
        var card = document.getElementById('pac-card');
        var input = document.getElementById('pac-input');
        var types = document.getElementById('type-selector');
        var strictBounds = document.getElementById('strict-bounds-selector');

        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

        var autocomplete = new google.maps.places.Autocomplete(input);

        // Bind the map's bounds (viewport) property to the autocomplete object,
        // so that the autocomplete requests use the current map bounds for the
        // bounds option in the request.
        autocomplete.bindTo('bounds', map);

        var infowindow = new google.maps.InfoWindow();
        var infowindowContent = document.getElementById('infowindow-content');
        infowindow.setContent(infowindowContent);
        var marker = new google.maps.Marker({
          map: map,
          anchorPoint: new google.maps.Point(0, -29)
        });

        autocomplete.addListener('place_changed', function() {
          infowindow.close();
          marker.setVisible(false);
          var place = autocomplete.getPlace();
          if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            console.log('place.name');
            return;
          }

          // If the place has a geometry, then present it on a map.
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
          }
          marker.setPosition(place.geometry.location);
          marker.setVisible(true);

          var address = '';
          if (place.address_components) {
           
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
          }
          console.log(place.name);


     function loadJSON(callback) {   
      if (localStorage.getItem('v1_valu')== 'v1'){
            localStorage.removeItem('v1_valu');        
        localStorage.setItem('jsonurl',"/json/src/country-by-avg-male-height.json")

      }if(localStorage.getItem('v1_valu')== 'v2')
        {
    
            localStorage.removeItem('v1_valu');
        
          localStorage.setItem('jsonurl',"/json/src/country-by-barcode-prefix.json")

        }if(localStorage.getItem('v1_valu')== 'v3'){
            localStorage.removeItem('v1_valu');        
        localStorage.setItem('jsonurl',"/json/src/country-by-calling-code.json")
      }if(localStorage.getItem('v1_valu')== 'v4'){
            localStorage.removeItem('v1_valu');        
        localStorage.setItem('jsonurl',"/json/src/country-by-capital-city.json")
      }if(localStorage.getItem('v1_valu')== 'v5'){
            localStorage.removeItem('v1_valu');        
        localStorage.setItem('jsonurl',"/json/src/country-by-continent.json")
      }if(localStorage.getItem('v1_valu')== 'v6'){
            localStorage.removeItem('v1_valu');        
        localStorage.setItem('jsonurl',"/json/src/country-by-costline.json")
      }if(localStorage.getItem('v1_valu')== 'v7'){
            localStorage.removeItem('v1_valu');        
        localStorage.setItem('jsonurl',"/json/src/country-by-currency-code.json")
      }if(localStorage.getItem('v1_valu')== 'v8'){
            localStorage.removeItem('v1_valu');        
        localStorage.setItem('jsonurl',"/json/src/country-by-currency-name.json")
      }if(localStorage.getItem('v1_valu')== 'v9'){
            localStorage.removeItem('v1_valu');        
        localStorage.setItem('jsonurl',"/json/src/country-by-domain-tld.json")
      }if(localStorage.getItem('v1_valu')== 'v10'){
            localStorage.removeItem('v1_valu');        
        localStorage.setItem('jsonurl',"/json/src/country-by-elevation.json")
      }if(localStorage.getItem('v1_valu')== 'v11'){
            localStorage.removeItem('v1_valu');        
        localStorage.setItem('jsonurl',"/json/src/country-by-flag.json")
      }if(localStorage.getItem('v1_valu')== 'v12'){
            localStorage.removeItem('v1_valu');        
        localStorage.setItem('jsonurl',"/json/src/country-by-government-type.json")
      }if(localStorage.getItem('v1_valu')== 'v13'){
            localStorage.removeItem('v1_valu');        
        localStorage.setItem('jsonurl',"/json/src/country-by-independence-date.json")
      }if(localStorage.getItem('v1_valu')== 'v14'){
            localStorage.removeItem('v1_valu');        
        localStorage.setItem('jsonurl',"/json/src/country-by-iso-numeric.json")
      }if(localStorage.getItem('v1_valu')== 'v15'){
            localStorage.removeItem('v1_valu');        
        localStorage.setItem('jsonurl',"/json/src/country-by-landlocked.json")
      }if(localStorage.getItem('v1_valu')== 'v16'){
            localStorage.removeItem('v1_valu');        
        localStorage.setItem('jsonurl',"/json/src/country-by-languages.json")
      }if(localStorage.getItem('v1_valu')== 'v17'){
            localStorage.removeItem('v1_valu');        
        localStorage.setItem('jsonurl',"/json/src/country-by-life-expectancy.json")
      }if(localStorage.getItem('v1_valu')== 'v18'){
            localStorage.removeItem('v1_valu');        
        localStorage.setItem('jsonurl',"/json/src/country-by-national-dish.json")
      }if(localStorage.getItem('v1_valu')== 'v19'){
            localStorage.removeItem('v1_valu');        
        localStorage.setItem('jsonurl',"/json/src/country-by-national-symbol.json")
      }if(localStorage.getItem('v1_valu')== 'v20'){
            localStorage.removeItem('v1_valu');        
        localStorage.setItem('jsonurl',"/json/src/country-by-population-density.json")
      }if(localStorage.getItem('v1_valu')== 'v21'){
            localStorage.removeItem('v1_valu');        
        localStorage.setItem('jsonurl',"/json/src/country-by-population.json")
      }if(localStorage.getItem('v1_valu')== 'v22'){
            localStorage.removeItem('v1_valu');        
        localStorage.setItem('jsonurl',"/json/src/country-by-region-in-world.json")
      }if(localStorage.getItem('v1_valu')== 'v23'){
            localStorage.removeItem('v1_valu');        
        localStorage.setItem('jsonurl',"/json/src/country-by-surface-area.json")
      }if(localStorage.getItem('v1_valu')== 'v24'){
            localStorage.removeItem('v1_valu');        
        localStorage.setItem('jsonurl',"/json/src/country-by-yearly-average-temperature.json")
      }



      //alert( sessionStorage.getItem('label')) 
       localStorage.getItem('jsonurl')
      var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET',  localStorage.getItem('jsonurl'), true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
              }
          };
          xobj.send(null);  
        }
    
      
              localStorage.removeItem('jsonurl')
             
             loadJSON(function(response) {
  //                   console.log(response)
                  
               //var actual_JSON=JSON.parse(response);
                
               //console.log(country.actual_JSON[i])
               
                            // var arr = JSON.parse(response);


var arr = response
var sorted = {};
for (var i = 0,max = arr.length; i < max; i++) {
    if (sorted[arr[i].country] == undefined) {
        sorted[arr[i].country] = [];
    }
    sorted[arr[i].country].push(arr[i]);
};
var searchcountry1 =place.name;


console.log(searchcountry1);


var result = sorted[searchcountry1];
console.log(result);
console.log(result[0].country);
console.log(result[0].measurement);
console.log(result[0].val);

             
                         
              })

          infowindowContent.children['place-icon'].src = place.icon;
          infowindowContent.children['place-name'].textContent = place.name;
          infowindowContent.children['place-address'].textContent = address;
         

          

          infowindow.open(map, marker);
        });

        // Sets a listener on a radio button to change the filter type on Places
        // Autocomplete.
        function setupClickListener(id, types) {
          var radioButton = document.getElementById(id);
          radioButton.addEventListener('click', function() {
            autocomplete.setTypes(types);
          });
        }

        setupClickListener('changetype-all', []);
        setupClickListener('changetype-address', ['address']);
        setupClickListener('changetype-establishment', ['establishment']);
        setupClickListener('changetype-geocode', ['geocode']);

        document.getElementById('use-strict-bounds')
            .addEventListener('click', function() {
              console.log('Checkbox clicked! New state=' + this.checked);
              autocomplete.setOptions({strictBounds: this.checked});
            });
      }











         
