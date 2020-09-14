import moviesMock from '../server/mocks/moviesMock'
import { useState,useEffect } from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import {useAppContext} from "../components/Context";

export default function Home({ peliculasPorCategoria }) {
  return (
    <>
      <Header />
      {
        peliculasPorCategoria.map((category, id)=>
          <Carousel peliculas={category} nombre={category[0].genero} key={category[0].genero}/>
        )
      }
    </>
  );
}
//

export async function getStaticProps() {
      let movies = moviesMock
      const categories = []
      while(movies.length){
        categories.push(movies.filter((movie)=>movies[0].genero === movie.genero))
        movies = movies.filter(({genero})=>movies[0].genero !== genero)
      }
  return {
    props: {
      peliculasPorCategoria: categories,
    },
  };
}
