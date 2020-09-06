export default function Movie(props) {
  const {
    id,
    titulo,
    sinopsis,
    duracion,
    genero,
    clasificacion,
    preview,
    link,
    director,
    reparto,
    estreno,
  } = props;
  return (
    <>
      <div>
        <h3>{titulo}</h3>
        <p>{sinopsis}</p>
      </div>
      <style jsx>{`
        div {
          margin: 3px;
          background: url(${preview});
          background-size: cover;
          min-width: 300px;
          height: 150px;
          display: flex;
           {
            /* te sirvio como lo hice yo */
          }
          overflow-x: auto;
          scroll-snap-type: x mandatory;
        }
      `}</style>
    </>
  );
}
