
export async function gifGetter(item) {
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=Pt07Kfxu2sHPbtsGX8NaAUANKwFe8ozR&limit=1&q=${item}`);
  const gif = await response.json()

  const randomGif = gif.data[0].images.downsized_large.url;

  console.log(gif)

  return randomGif
}
