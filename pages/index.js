import { traerPeliculas } from "./api/movies";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import { useAppContext } from "../components/Context";
import Video from "../components/Video";
import Modal from "../components/Modal";
import auth0 from "../utils/auth0";

export default function Home({ peliculas }) {
  const [playMovie, setPlayMovie] = useState(false);
  const [useModal, setUseModal] = useState(false);
  return (
    <>
      {playMovie && <Video id={playMovie} setPlayMovie={setPlayMovie} />}
      {useModal && (
        <Modal
          position={useModal?.position}
          movie={useModal?.movieData}
          setUseModal={setUseModal}
        />
      )}
      <Header />
      {peliculas.map((movie, id) => (
        <Carousel
          peliculas={movie}
          setPlayMovie={setPlayMovie}
          setUseModal={setUseModal}
          key={id}
        />
      ))}
    </>
  );
}
//

export async function getStaticProps() {
  const peliculas = [];
  for (let i = 1; i < 6; i++) {
    const movie = await traerPeliculas(i);
    peliculas.push(movie.results);
  }
  return {
    props: {
      peliculas,
    },
  };
}

// export async function getServerSideProps(context) {
//   const session = auth0.getSession(context.req)
//   return {
//     props: {
//       user: session
//     }, // will be passed to the page component as props
//   }
// }
