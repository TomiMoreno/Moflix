import { traerPeliculas } from './api/movies'
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import {useAppContext} from "../components/Context";
import Video from '../components/Video';

export default function Home({ peliculas }) {
  const [playMovie, setPlayMovie] = useState(false)
  return (
    <>
      {playMovie && <Video id={playMovie} setPlayMovie={setPlayMovie}/>}
      <Header />
      {
        peliculas.map((movie, id)=>
          <Carousel peliculas={movie} setPlayMovie={setPlayMovie} key={id}/>
        )
      }
    </>
  );
}
//

export async function getStaticProps() {
  const peliculas = []
  for(let i= 1; i<6;i++){
    const movie = await traerPeliculas(i)
    peliculas.push(movie.results)
  }
  return {
    props: {
      peliculas,
    },
  };
}
