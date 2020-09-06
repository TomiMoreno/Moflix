import { useState } from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
export default function Home({ movies }) {
  const [peliculas, setPeliculas] = useState(movies);
  return (
    <>
      <Header />
      <Carousel peliculas={peliculas} />
      <Carousel peliculas={peliculas} />
      <Carousel peliculas={peliculas} />
      <Carousel peliculas={peliculas} />
      <Carousel peliculas={peliculas} />
      <Carousel peliculas={peliculas} />
    </>
  );
}

export async function getStaticProps() {
  const peticion = await fetch("http://localhost:3000/api/movies");
  const json = await peticion.json();
  const movies = json.movies;
  return {
    props: {
      movies,
    },
  };
}
