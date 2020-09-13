import moviesMock from '../server/mocks/moviesMock'
import { useState,useEffect } from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

export default function Home({ movies }) {
  const [categories, setCategories] = useState([])
  useEffect(()=>{
    const filterArray = () =>{
      const categories = []
      while(movies.length){
        categories.push(movies.filter((movie)=>movies[0].genero === movie.genero))
        movies = movies.filter(({genero})=>movies[0].genero !== genero)
      }
      setCategories(categories)
    }
    filterArray()
  }, [])
  
  
  return (
    <>
      <Header />{
        categories.map((category)=>
          <Carousel peliculas={category} nombre={category[0].genero}/>
        )
      }
    </>
  );
}
//

export async function getStaticProps() {
  return {
    props: {
      movies: moviesMock,
    },
  };
}
