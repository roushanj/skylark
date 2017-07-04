

 function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: -34.397, lng: 150.644}
        });
        var geocoder = new google.maps.Geocoder();
        
      document.getElementById('address').addEventListener('click', function() {
          //
          localStorage.setItem('valu', address);
          alert(localStorage.setItem('valu', address));

          geocodeAddress(geocoder, map);
          
        });
         
      }

      function geocodeAddress(geocoder, resultsMap) {
  
        var address = document.getElementById('address').value;
  
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });

          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }

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
    
        function init() {
              localStorage.removeItem('jsonurl')
             
             loadJSON(function(response) {

               var actual_JSON = JSON.parse(response);

               

              for (var i = 0; i < 100; i++) {
                  //console.log(country.actual_JSON[i])

                   if (actual_JSON[i].country == 'valu') {
                           var data = actual_JSON[i].val; 
                           return data
                   };
                  };
                         
              })

         }
