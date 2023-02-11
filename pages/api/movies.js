import moviesMock from "../../server/mocks/moviesMock.json";
export default (req, res) => {
  res.send(moviesMock);
};

export async function traerPeliculas(page) {
  const apiKey = process.env.API_KEY;
  const url = process.env.URL;
  const fetchUrl = `${url}/discover/movie?api_key=${apiKey}&language=es&sort_by=revenue.desc&vote_count.gte=100&include_adult=true&page=${page}`;
  const repuesta = await fetch(fetchUrl);
  const json = repuesta.json();
  return json;
}
