const URL = process.env.URL_FETCH;

export async function getPodcasts() {
  const response = await fetch(URL);
  const data = await response.json();

  
  return data;
}
