const URL = process.env.URL_FETCH;

export async function getPodcasts() {
  const response = await fetch(URL);
  console.log('fetched data from url',response);
  const data = await response.json();
  console.log('data',data);

  return data;
}
