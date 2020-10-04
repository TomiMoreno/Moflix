import { traerPeliculas } from './api/movies'
import { useState,useEffect } from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import {useAppContext} from "../components/Context";

export default function Home({ peliculas }) {
  return (
    <>
      <Header />
      {
        peliculas.map((movie, id)=>
          <Carousel peliculas={movie} key={id}/>
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
  //El primer elemento de todos es un mock, por eso lo borramos
  peliculas[0].shift()
  return {
    props: {
      peliculas,
    },
  };
}
