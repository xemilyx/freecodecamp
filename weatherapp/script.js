$(function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("latitude: " + position.coords.latitude + " longitude: " + position.coords.longitude);

            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon;
        
            //$.get("https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139", 
            $.get(url,
            function(data, success) {
                var status = success;
                var weather = data.weather[0].main;
                var icon = data.weather[0].icon;
                var cDegree = data.main.temp;
                var fDegree = cDegree*9/5+32;
                console.log("Data: " + weather + "\nStatus: " + status);
                console.log("Icon: " + icon + "\nCelsius: " + cDegree + "\nFarenheit: " + fDegree);
                $("#description").append(weather);
                $("#icon").append("<img src =" + icon +">");
                var toggleValue = fDegree;
                $("#temp").append(toggleValue + " F");
                $('button').click(function() {
                    if (toggleValue == fDegree) {
                        $("#temp").html("<span class=\"label label-info\">Temp:</span> " + cDegree + " C");
                        toggleValue = cDegree;
                    }
                    else {
                        $("#temp").html("<span class=\"label label-info\">Temp:</span> " + fDegree + " F");
                        toggleValue = fDegree;
                    }
                    
                });

            });
        
        });
    };
  
});