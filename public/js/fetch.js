

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
