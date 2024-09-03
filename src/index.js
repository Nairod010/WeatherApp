import "./styles.css";

async function testGif() {
  const response = await fetch("https://api.giphy.com/v1/gifs/trending?api_key=Pt07Kfxu2sHPbtsGX8NaAUANKwFe8ozR&limit=20");
  const gif = await response.json()
  const gottenGif = gif.data[0].images.fixed_height.url;

  return gottenGif
}

async function testWeather() {
  const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Bucharest,RO?key=BZCMA7B8LNURWVVFYA7LZ277L")
  const result = await response.json()


  const weather = result.days[0].conditions

  return weather
}


async function main() {
  const [gifUrl, weatherResults] = await Promise.all([testGif(), testWeather()])
  // const weatherResults = await testWeather()

  const image = document.querySelector("img")
  const para = document.querySelector(".weather")
  image.src = `${gifUrl}`
  para.textContent = `Weather Conditions are ${weatherResults} for today`

}

main();
