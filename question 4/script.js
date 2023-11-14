async function listImages(url) {
  const response = await fetch(url);
  const json = await response.json();

  if (!Array.isArray(json)) return null;

  return json;
}

listImages('https://jsonplaceholder.typicode.com/photos').then(value => {
  console.log(value);
});
