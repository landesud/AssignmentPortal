var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','http://api.wunderground.com/api/8e74e5070463a375/conditions/q/MN/Franklin.json', true);

weatherObject.send();



weatherObject.onload = function() {
var weatherInfo = JSON.parse(weatherObject.responseText);	
console.log(weatherInfo)
document.getElementById("sun").src = weatherInfo.current_observation.icon_url
document.getElementById("FrankWeather").innerHTML = weatherInfo.current_observation.icon
/*document.getElementById("high").innerHTML = weatherInfo.current_observation.dewpoint_f
document.getElementById("low").innerHTML = weatherInfo.current_observation.windchill_f*/
document.getElementById("wind").innerHTML = weatherInfo.current_observation.wind_mph
document.getElementById("feelsLike").innerHTML = weatherInfo.current_observation.feelslike_f
}
var weatherDesc = new XMLHttpRequest();
weatherDesc.open('GET','http://api.wunderground.com/api/8e74e5070463a375/forecast/q/MN/Franklin.json', true);

weatherDesc.send();
weatherDesc.onload = function() {
var desc = JSON.parse(weatherDesc.responseText);
console.log(desc);
document.getElementById("high").innerHTML = desc.forecast.simpleforecast.forecastday["0"].high.fahrenheit
document.getElementById("low").innerHTML = desc.forecast.simpleforecast.forecastday["0"].low.fahrenheit
document.getElementById("desc").innerHTML = desc.forecast.txt_forecast.forecastday[7].fcttext
}

