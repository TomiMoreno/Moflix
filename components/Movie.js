import {useState, useEffect} from 'react'
export default function Movie(props) {
  const [isHovering, setIsHovering] = useState(false)
  const [position, setPosition] = useState(false)
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
    setUseModal
  } = props;
  useEffect(()=>{
    const timer = setTimeout(()=>{ 
      if(isHovering){
        setUseModal({position: position.getBoundingClientRect(), movieData: props})}
        console.log('fin',isHovering)
      },500)
    return () =>{
      window.clearTimeout(timer)
    }
  },[isHovering, position])
  const miniatura = `https://image.tmdb.org/t/p/w780/${backdrop_path}`
  return (
    <>
      <div 
        onMouseOver={(e) => {setIsHovering(true); setPosition(e.currentTarget)}} 
        onMouseOut={() => {setIsHovering(false)}} 
        onClick={()=>{setPlayMovie(id)}}>
      </div>
      <style jsx>{`

        div {
          cursor:pointer;
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
      `}</style>
    </>
  );
}