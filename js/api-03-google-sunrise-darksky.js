/*
##### Geocoding
1. What are latitude longitude coordinates of Montreal?
  - https://maps.googleapis.com/maps/api/geocode/json?address=Montreal

2. What time does the sun set in Montreal (based on the Google geocode coordinates)?
  - https://sunrise-sunset.org/api

3. What is the weekly weather forecast in Montreal?
  - https://darksky.net/dev
  - Note: You will have to create an account.

*/


//========================================================================
//  (1) What are latitude longitude coordinates of Montreal?
//
//     - https://developers.google.com/maps/documentation/geocoding/start
//     = NOtE: You don't need an API key for this api
//

const answerElement_apimashup_1 = document.getElementById('apimashup-1')
var montreal = 'https://maps.googleapis.com/maps/api/geocode/json?address=Montreal';
request.get(montreal).then(function(names){
       elements = names.body.results;
       console.log(elements[0].geometry.location)
       var info = elements[0].geometry.location;
       latGlobal = info.lat;
       longGlobal = info.lng;
       console.log(latGlobal);
       console.log(longGlobal);

       answerElement_apimashup_1.innerHTML = '<span id="lat">'+latGlobal+'</span><span>,</span><span id="long">'+longGlobal+'</span>' ;
     })

//========================================================================
//  (2) What time does the sun set in Montreal (based on the Google geocode coordinates)?

const answerElement_apimashup_2 = document.getElementById('apimashup-2')
setTimeout(function(){
  var lat = document.getElementById('lat').textContent;
  var long = document.getElementById('long').textContent;
  sunset = 'https://api.sunrise-sunset.org/json?lat='+lat+'&lng='+long+'';
  request.get(sunset).then(function(names){
    elements = names.body.results;
    sunsetMontreal = elements.sunset
    answerElement_apimashup_2.innerHTML = sunsetMontreal;
  })
}, 1000);

//========================================================================
//  (3) What is the weekly weather forecast in Montreal? (look for summary property in 'daily')

const answerElement_apimashup_3 = document.getElementById('apimashup-3')
//https://api.darksky.net/forecast/700bf35b241f390062f821a55cc27f78/45.5016889,-73.567256

  setTimeout(function(){
    var lat = document.getElementById('lat').textContent;
    var long = document.getElementById('long').textContent;
    var key = '700bf35b241f390062f821a55cc27f78';
    var forecast = 'https://api.darksky.net/forecast/'+key+'/'+lat+','+long;
    console.log(forecast)
    console.log(key)
    request.get(forecast).then(function(names){
      elements = names.body;
      weather = elements.daily.summary;
      answerElement_apimashup_3.innerHTML =  weather;
    })

  }, 1000);




//



//
