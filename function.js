// const searchButton = document.getElementById("search-button")
// const input = document.getElementById("city-input");
// const cityName = document.getElementById("city-name");
// const cityTime = document.getElementById("city-time");
// const cityTemp = document.getElementById("city-temp");

// async function getData(cityname){
//     const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=e092209e72fb47058a6104140252905&q=${cityname}&aqi=yes`);
//     return await data.json();
// }

    

// searchButton.addEventListener("click", async () => {
//     const value = input.value;
//     const result = await getData(value);
//     cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
//     cityTime.innerText = `${result.location.localtime}`;
//     cityTemp.innerText = `${result.current.temp_c}`;
// });


const searchButton = document.getElementById("searchBtn");
const input = document.getElementById("searchInput");
const cityName = document.getElementById("city");
const temp = document.getElementById("temp");
const desc = document.getElementById("description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const img = document.getElementById("icon");


// window.addEventListener("load", gotLocation); 


async function gotLocation (position) {
    const result = await getDataLatLong(position.coords.latitude, position.coords.longitude);
    cityName.innerText = `${result.location.name}, ${result.location.country}`;
    temp.innerText = `${result.current.temp_c} °C`;
    desc.innerText = result.current.condition.text;
    humidity.innerText = `Humidity: ${result.current.humidity}%`;
    windSpeed.innerText = `Wind Speed: ${result.current.wind_kph} km/hr`;
    img.src = `https://${result.current.condition.icon}`;
}

function failedToGet() {
    console.log("some error occured");
}

navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);

async function getDataLatLong(lat, long){
    const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=e092209e72fb47058a6104140252905&q=${lat},${long}&aqi=yes`);
    return await data.json();

}


async function getData(cityname){
    const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=e092209e72fb47058a6104140252905&q=${cityname}&aqi=yes`);
    return await data.json();

}

searchButton.addEventListener("click", async () => {
    const val = input.value;
    const result = await getData(val);
    // console.log(result);
    cityName.innerText = `${result.location.name}, ${result.location.country}`;
    temp.innerText = `${result.current.temp_c}`;
    desc.innerText = result.current.condition.text;
    humidity.innerText = `Humidity: ${result.current.humidity}%`;
    windSpeed.innerText = `Wind Speed: ${result.current.wind_kph} km/hr`;
    img.src = `https://${result.current.condition.icon}`;
});

