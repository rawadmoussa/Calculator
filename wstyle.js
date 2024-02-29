const apiKey = "dd609714fe828c02e4ad63dead4cbc45";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=victorville&units=imperial";
async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".location").innerHTML = data.name + ", " + data.sys.country;
    document.querySelector(".speed").innerHTML = data.wind.speed + " mph &#11164;";
    document.querySelector(".humid").innerHTML = data.main.humidity + "%";
    document.querySelector(".temp").innerHTML = data.main.temp + "&deg;F";
}
checkWeather();
