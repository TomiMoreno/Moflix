import {useState} from 'react'
export default function Movie(props) {
  const [isHovering, setIsHovering] = useState(false)
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
  } = props;
  const miniatura = `https://image.tmdb.org/t/p/w780/${backdrop_path}`
  return (
    <>
      <div onMouseOver={() => {setIsHovering(true)}} onMouseLeave={() => {setIsHovering(false)}}>
            <h3>{title}</h3>
            <img  src="/play.svg" />
      </div>
      <style jsx>{`
        img{
          width: 25px;
          padding: 5px;
          display: block;
          margin-block-end: 1em;
          background: white;
          border:black 1px solid;
          border-radius: 10%;
          transition: visibility 0s, opacity 0.5s linear;
          ${isHovering ? 'visibility:visible; opacity: 1;': 'visibility:hidden;opacity: 0;'}
        }
        div {
          margin: 3px;
          padding: 3px;
          background: url(${miniatura});
          background-size: cover;
          min-width: 300px;
          width:300px;
          height: 150px;
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          transition: min-width 1s, height 1s, filter 2s;
          align-items: flex-end;
          justify-content: space-between;
        }
        div:hover{
          filter: grayscale(90%);
          min-width: 400px;
          height: 200px
        }
        h3{
          color:white;
          font-weight:bold;
          background: rgba(0,0,0,0.5);
          box-shadow:2px 2px rgba(0,0,0,0.3);
          transition: visibility 0s, opacity 0.5s linear;
          ${isHovering ? 'visibility:visible;opacity: 1;': 'visibility:hidden;opacity: 0;'}
        }
      `}</style>
    </>
  );
}
