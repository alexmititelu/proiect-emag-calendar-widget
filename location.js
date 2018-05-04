

var time = new Date();
var hour = time.getHours();
if(hour<10) {
    hour = "0"+hour;
}

var minutes = time.getMinutes();

if(minutes<10) {
    minutes = "0"+minutes;
}

timeValue = document.createTextNode(hour + ":" + minutes);
document.getElementById("timeValue").innerHTML = hour + ":" + minutes;

function setCurrentHour() {
    time = new Date();
    hour = time.getHours();
    minutes = time.getMinutes();
    if(hour<10) {
        hour = "0"+hour;
    }
    if(minutes<10) {
        minutes = "0"+minutes;
    }
    document.getElementById("timeValue").innerHTML = hour + ":" + minutes;
}


setInterval(setCurrentHour,500); 

var geocoder;
var lat = '';
var lng = '';
locationValue = '';
    initialize();
        
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successFunction,errorFunction);
    } 
    //Get the latitude and the longitude;
    function successFunction(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        codeLatLng(lat, lng)
    }
    
    function errorFunction(){
        alert("Geocoder failed");
    }

    function initialize() {
        geocoder = new google.maps.Geocoder();
    }

    function codeLatLng(lat, lng) {

    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
        console.log(results);
        if (results[1]) {
            
        //find country name
                
                for (var i=0; i<results[0].address_components.length; i++) {
            for (var b=0;b<results[0].address_components[i].types.length;b++) {

            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                    //this is the object you are looking for
                    city= results[0].address_components[i];
                    // country = results[0].address_components[7].short_name;
                    country = 'RO';
                    break;
                }
            }
        }
        //city data
        element = document.getElementById("userLocation");
        // document.getElementById("DEMO").children[0].
        locationValue = document.createTextNode(city.long_name.split(" ")[1] + ", " + country);
        element.appendChild(locationValue);
        console.log(city.short_name);    

        var weather = document.getElementById("weatherValue");
        weather.innerHTML =  '28°';
        weather();

        } else {
            alert("No results found");
        }
        } else {
        alert("Geocoder failed due to: " + status);
        }
    });
    }

    function weather() {

        var weather = document.getElementById("weatherValue");
        var apiKey = 'e5c33fec135ca48df7ff44f97b702d59';
        var url = 'https://api.forecast.io/forecast/';
        var proxy = 'https://cors-anywhere.herokuapp.com/';
    
          weather.innerHTML =  '°';
    
           $.getJSON(url + apiKey + "/" + lat + "," + lng + "?callback=?", function(data) {
            $('#temp').html(data.currently.temperature + '° F');
            $('#minutely').html(data.minutely.summary);
    
      });
    }
   
    
    //  weather();
    
    
   
