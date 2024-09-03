import "./styles.css";
import { gifGetter } from "./api/gifs";
import { weatherDatas, weatherGetter } from "./api/weather";

async function getDataOnSubmit(location, image, para) {
  const weather = await weatherGetter(location)
  const gif = await gifGetter(weather)
  console.log(location)

  image.src = `${gif}`
  para.textContent = `Weather Conditions in ${location} are ${weather} for today`
}

async function populateDivs(loc, list) {
  const data = await weatherDatas(loc)
  for (let i = 0; i < list.length; i++) {
    const date = list[i].querySelector(".date")
    const city = list[i].querySelector(".city")
    const weatherCondition = list[i].querySelector(".weather-condition")
    const description = list[i].querySelector(".description")
    const maxTemp = list[i].querySelector(".max-temp")
    const minTemp = list[i].querySelector(".min-temp")
    const sunrise = list[i].querySelector(".sunrise")
    const sunset = list[i].querySelector(".sunset")
    const humidity = list[i].querySelector(".humidity")
    const windspeed = list[i].querySelector(".wind-speed")

    date.textContent = `Date: ${new Date(data.days[i].datetime).toLocaleDateString("en-UK")}`
    city.textContent = data.resolvedAddress
    weatherCondition.textContent = `Conditions: ${data.days[i].conditions}`
    description.textContent = `Description: ${data.days[i].description}`
    maxTemp.textContent = `Max Temp: ${data.days[i].tempmax} Celsius`
    minTemp.textContent = `Min Temp: ${data.days[i].tempmin} Celsius`
    sunrise.textContent = `Sunrise: ${data.days[i].sunrise}`
    sunset.textContent = `Sunset: ${data.days[i].sunset}`
    humidity.textContent = `Humidity: ${data.days[i].humidity}`
    windspeed.textContent = `Windspeed: ${data.days[i].windspeed} m/s`
  }
}

async function render() {
  const image = document.querySelector("img")
  const para = document.querySelector(".weather-text")
  const input = document.querySelector(".city-input")
  const submitButton = document.querySelector(".submit-city")
  const containers = document.querySelectorAll(".day")


  submitButton.addEventListener("click", () => {
    getDataOnSubmit(input.value, image, para)
    populateDivs(input.value, containers)
    input.value = ""
  });

  const localization = "Bucharest"

  const weatherResults = await weatherGetter(localization)

  const gifUrl = await gifGetter(weatherResults)

  image.src = `${gifUrl}`
  para.textContent = `Weather Conditions in ${localization} are ${weatherResults} for today`

  populateDivs(localization, containers);
}

render();

