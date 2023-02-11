import { useEffect } from "react";
import { motion } from "framer-motion";
export default function Movie(props) {
  const {
    id,
    title,
    sinopsis,
    duracion,
    genero,
    clasificacion,
    backdrop_path,
    link,
    director,
    reparto,
    estreno,
    setPlayMovie,
  } = props;
  useEffect(() => {
    const timer = setTimeout(() => {}, 499);
    return () => {
      window.clearTimeout(timer);
    };
  }, []);
  const miniatura = `https://image.tmdb.org/t/p/w780/${backdrop_path}`;
  return (
    <>
      <div
        style={{
          minWidth: 300,
        }}
      >
        <motion.div
          className="movie"
          whileHover={{
            scale: 1.1,
            filter: "grayscale(1)",
            position: "absolute",
            zIndex: 2,
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setPlayMovie(id);
          }}
        >
          <img src={miniatura} alt={title} style={{ width: "100%" }} />
        </motion.div>
      </div>
      <style jsx>{``}</style>
    </>
  );
}
