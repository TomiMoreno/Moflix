import Movie from "./Movie";
export default function Carousel({ peliculas, nombre, setPlayMovie }) {
  return (
    <>
      <div>
        <div className="scroll">
          {peliculas.map((pelicula) => (
            <Movie
              {...pelicula}
              setPlayMovie={setPlayMovie}
              key={pelicula.id}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        div {
          margin: 0px 20px;
        }
        h2 {
          margin-bottom: 0;
          color: #dadef7;
        }
        .scroll {
          margin: 0;
          margin-bottom: 20px;
          display: flex;
          overflow-x: scroll;
          overflow-y: hidden;
          height: 180px;
        }
        .scroll::-webkit-scrollbar {
          width: 12px;
        }
        .scroll::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }

        .scroll::-webkit-scrollbar-thumb {
          border-radius: 10px;
          -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </>
  );
}
// {peliculas.map((pelicula) => {
//   return (
//     <div>
//       <h2>Mis pelis</h2>
//       <div className="scroll">
//         <Movie {...pelicula} key={pelicula.id} />
//       </div>
//     </div>
//   );
// })}
