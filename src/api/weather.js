export async function weatherGetter(location) {
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=BZCMA7B8LNURWVVFYA7LZ277L&unitGroup=metric`)
  const result = await response.json()

  const weather = result.days[0].conditions

  return weather
}

export async function weatherDatas(location) {
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=BZCMA7B8LNURWVVFYA7LZ277L&unitGroup=metric`)
  const result = await response.json()

  return result
}
