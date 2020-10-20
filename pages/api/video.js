export default async (req, res) => {
  const API_KEY = process.env.API_KEY
  const fetchUrl=`https://api.themoviedb.org/3/movie/${req.query.id}/videos?api_key=${API_KEY}&language=en-US`
  const data = await fetch(fetchUrl)
  const json = await data.json()
  res.json(json)
};